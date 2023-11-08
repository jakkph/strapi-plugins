'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('chatgpt')
      .service('myService')
      .getWelcomeMessage();
  },
});
