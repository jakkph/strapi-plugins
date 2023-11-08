'use strict';

module.exports = ({ strapi }) => {
  const getPluginStore = () => {
    return strapi.store({
      environment: '',
      type: 'plugin',
      name: 'open-ai',
    });
  };

  // Create default settings
  const createDefaultConfig = async () => {
    const pluginStore = getPluginStore();
    const value = {
      model: 'gpt-3.5-turbo-1106',
      temperature: 0.8,
      maxTokens: 1024,
      models: [
        "gpt-3.5-turbo-1106",
        "gpt-4-1106-preview"
      ],
    };
    await pluginStore.set({ key: 'settings', value });
    return pluginStore.get({ key: 'settings' });
  };
  const createConfigFromData = async (settings) => {
    const value = settings;
    const pluginStore = getPluginStore();
    await pluginStore.set({ key: 'settings', value });
    return pluginStore.get({ key: 'settings' });
  };
  const getSettings = async () => {
    const pluginStore = getPluginStore();
    let config = await pluginStore.get({ key: 'settings' });
    if (!config) {
      config = await createDefaultConfig();
    }
    return config;
  };
  const setSettings = async (data) => {
    return createConfigFromData(data);
  };
  return {
    getSettings,
    setSettings,
  };
};
