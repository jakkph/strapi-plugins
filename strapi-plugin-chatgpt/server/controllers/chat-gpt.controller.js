"use strict";

module.exports = ({ strapi }) => ({
  async prompt(ctx) {
    const data = await strapi
      .plugin("chatgpt")
      .service("chatGptService")
      .getResponsefromChatGpt(ctx);
    ctx.send(data);
  },

  async getConfig(ctx) {
    const config = await strapi
      .plugin("chatgpt")
      .service("chatGptService")
      .getConfig();
    ctx.send(config);
  },

  async updateConfig(ctx) {
    const config = await strapi
      .plugin("chatgpt")
      .service("chatGptService")
      .updateConfig(ctx);
    ctx.send(config);
  },
});
