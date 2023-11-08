'use strict';

const fetch = require('node-fetch');
const { OpenAI } = require("openai")

module.exports = ({ strapi }) => {
  const config = new OpenAI({
    apiKey: `${strapi
      .plugin('open-ai')
      .config('API_TOKEN')}`
  })

  const openai = new OpenAI(config)


  const createCompletion = async ({ model, prompt, temperature, maxTokens }) => {
    try {
      const response = await openai.chat.completions.create({
        model,
        messages: [{ "role": "system", "content": "You are a helpful assistant." },
        { "role": "user", "content": prompt }],
        temperature,
        max_tokens: maxTokens
      });


      const content = response.choices[0].message.content
      const finishReason = response.choices[0].finish_reason

      return { content, finishReason }

    } catch (error) {
      if (error.response) {
        strapi.log.error(error.response.data.error.message);
        return { error: error.response.data.error.message };
      }
      strapi.log.error(error.message);
      return {
        error:
          "An error occurred while fetching the chat response. Please try after some time",
      };
    }
  };

  return {
    createCompletion,
  };
};
