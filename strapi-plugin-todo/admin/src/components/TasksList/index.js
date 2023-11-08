import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Flex, Checkbox, IconButton, Typography } from '@strapi/design-system';
import { Trash, Pencil } from '@strapi/icons';
import axiosInstance from '../../utils/axiosInstance';
import TaskModal from '../TaskModal';

const Wrapper = styled(Flex)`
  min-height: 2rem;
  > :last-child {
    display: none;
  }
  &:hover {
    > :last-child {
      display: flex;
    }
  }
`;

function TasksList({ tasks, status, refetchTasks, isCreatingEntry }) {
  const [taskBeingEdited, setTaskBeingEdited] = useState(null);

  const toggleTask = async (taskId, isChecked) => {
    await axiosInstance.put(`/todo/tasks/${taskId}`, {
      isDone: isChecked,
    });
    await refetchTasks();
  };

  const openEditModal = async (taskId) => {
    setTaskBeingEdited(taskId);
  };

  const deleteTask = async (taskId) => {
    await axiosInstance.delete(`/todo/tasks/${taskId}`);
    await refetchTasks();
  };
  if (isCreatingEntry) {
    return (
      <Box paddingTop={6} color="neutral600" textAlign="center">
        <Typography variant="omega">
          Save your entry to start managing todos.
        </Typography>
      </Box>
    );
  }
  if (status === 'loading') {
    return (
      <Box paddingTop={6} color="neutral600" textAlign="center">
        Fetching todos...
      </Box>
    );
  }
  if (status === 'error') {
    return (
      <Box paddingTop={6} color="danger600" textAlign="center">
        Could not fetch tasks.
      </Box>
    );
  }
  if (tasks == null || tasks.length === 0) {
    return (
      <Box paddingTop={6} color="neutral600" textAlign="center">
        No todo yet.
      </Box>
    );
  }


  return (
    <>
      {taskBeingEdited && (
        <TaskModal
          action="edit"
          handleClose={() => setTaskBeingEdited(null)}
          refetchTasks={refetchTasks}
          task={tasks.find((task) => task.id === taskBeingEdited)}
        />
      )}

      {tasks.map((task) => (
        <Wrapper justifyContent="space-between" key={task.id}>
          <Checkbox
            value={task.isDone}
            onValueChange={(isChecked) => toggleTask(task.id, isChecked)}
          >
            <span
              style={{
                textDecoration: task.isDone ? 'line-through' : 'none',
                display: 'inline-block',
                transform: 'translateY(-1px)',
              }}
            >
              {task.name}
            </span>
          </Checkbox>
          <Flex flexDirection="row" justifyContent="flex-end">
            <IconButton
              icon={<Pencil />}
              noBorder
              label="Edit"
              onClick={() => openEditModal(task.id)}
            />
            <IconButton
              icon={<Trash />}
              noBorder
              label="Delete"
              onClick={() => deleteTask(task.id)}
            />
          </Flex>
        </Wrapper>
      ))}
    </>
  );
}

export default TasksList;
