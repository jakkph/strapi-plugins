import React, { useState } from 'react';
import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
} from '@strapi/design-system';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import axiosInstance from '../../utils/axiosInstance';

function TaskModal({ handleClose, refetchTasks, task, action }) {
  const [name, setName] = useState(task?.name || '');
  const [status, setStatus] = useState();

  const { slug, initialData } = useCMEditViewDataManager();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      setStatus('loading');

      if (action === 'create') {
        await axiosInstance.post('/todo/tasks', {
          name,
          isDone: false,
          related: {
            __type: slug,
            id: initialData.id,
          },
        });
      } else if (action === 'edit') {
        await axiosInstance.put(`/todo/tasks/${task.id}`, {
          name,
        });
      }
      await refetchTasks();
      setStatus('success');
      handleClose();
    } catch (e) {
      setStatus('error');
    }
  };

  const getError = () => {
    if (name.length > 40) {
      return 'Content is too long';
    }
    if (status === 'error') {
      return 'Could not create todo';
    }

    return null;
  };

  return (
    <ModalLayout onClose={handleClose} labelledBy="title" as="form" onSubmit={handleSubmit}>
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          {action === 'create' && 'Add todo'}
          {action === 'edit' && 'Edit todo'}
        </Typography>
      </ModalHeader>
      <ModalBody>
        <TextInput
          placeholder="What do you need to do?"
          label="Name"
          name="text"
          hint="Max 140 characters"
          error={getError()}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </ModalBody>
      <ModalFooter
        startActions={
          <Button onClick={handleClose} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={
          <Button type="submit" loading={status === 'loading'}>
            {status === 'loading' ? 'Saving...' : 'Save'}
          </Button>
        }
      />
    </ModalLayout>
  );
}

export default TaskModal;
