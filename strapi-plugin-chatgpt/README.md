<div align="center">
<img alt="stripe payment title" width="60" src="https://higheredlab.com/wp-content/uploads/chatgpt-96.png">
</div>
<h1 align="center">Strapi ChatGPT</h1>
<p align="center">Integrate ChatGPT into your Strapi application. You get both a UI to interact with ChatGPT and an API end-points to integrate into your applications.</p>

<p align="center">
 <a href="https://www.npmjs.com/package/chatgpt">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/AsyncWeb/chatgpt?label=npm&logo=npm">
</a>
<a href="https://www.npmjs.org/package/chatgpt">
<img src="https://img.shields.io/npm/dm/chatgpt.svg" alt="Monthly download on NPM" />
</a>
<a href="https://github.com/AsyncWeb/chatgpt/actions/workflows/eslint.yml/badge.svg">
<img src="https://github.com/AsyncWeb/chatgpt/actions/workflows/eslint.yml/badge.svg" alt="EsLint" />
</a>
<br />
<br />
<br />
<img style="width: 100%; height: auto;" src="https://higheredlab.com/wp-content/uploads/chatgpt.gif" alt="chatgpt-overview" /> <br/>

<br/><br/>

</p>
<br>
<!-- # ChatGPT plugin for Strapi -->
<br/>

# ChatGPT plugin for Strapi

[OpenAI](https://openai.com/) ChatGPT is an AI chatbot auto-generative system created by Open AI for online customer care. It is a pre-trained generative chat, which makes use of (NLP) Natural Language Processing.

[Strapi](https://strapi.io/) is the leading open-source headless Content Management System. It’s 100% JavaScript, fully customizable and developer-first.

## Overview: Start using ChatGPT in your Strapi application

With this plugin, you can add ChatGPT-powered chatbots and other natural language processing functionality to your Strapi application with ease. The plugin provides a simple interface for configuring and deploying your ChatGPT models, as well as tools

Setting up the plugin is super easy and can be completed within 2 minutes.

1. Enter your OpenAI API credentials.
1. Optionally, select the model you want to use.

Thats it! You can now use ChatGPT in your Strapi application.

## ✨ Features

1. **Easy to use**: The plugin is easy to use and can be set up within 10 minutes.
1. **Customizable**: You can customize the model's parameters to suit your needs.
1. **Open Source**: The plugin is open source and can be found on [GitHub]()

## 🖐 Requirements

1. [Node.js](https://nodejs.org/en/) version 14 or higher.
1. [Strapi](https://strapi.io/) version v4.x or higher.

> The ChatGPT plugin is designed for **Strapi v4.x**. It won't work with Strapi v3.x.

<br/><br/>

## ⏳ Installation

### 1. Install the plugin

<!-- use npm for installing plugin -->

```bash
npm install chatgpt
```

### 2. Enable the plugin

<!-- enable the plugin in the admin panel -->

Goto `<strapi app root>/config/plugins.js` Add the following code snippet.

```js
module.exports = ({ env }) => ({
  // ...
  "chatgpt": {
    enabled: true,
  },
});
```

### 3. Build and start the Admin UI

Afterwards, you would need to build a fresh package that includes the ChatGPT plugin. For it, please execute the commands below:

<!-- build the admin UI -->

```bash
npm run build
npm run develop
```

The ChatGPT plugin should appear in the Plugins section of the Strapi sidebar after you run the app again.

Now you are ready to integrate ChatGPT on your Strapi website 🎉
<br/><br/>

## 🔧 Configuration

You can easily configure the ChatGPT plugin in the Strapi admin panel.

- Goto `Settings` -> `ChatGPT -> Configuration` in the sidebar.
- On the configiration page, Enter All the fields.
- Click on Save to save the configuration.

<br/><br/>

## 📖 Testing the plugin

- Click ChatGPT plugin in plugin section of the sidebar.
- Click on Integration to get sample code integration code.
- Copy the code and paste it in your terminal.

<br/>

<br/>

## 📝 License

[MIT License](LICENSE.md)

Copyright © 2022 [AsyncWeb](https://higheredlab.com/)
