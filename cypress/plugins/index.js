const { resolve } = require('path');
const { startDevServer } = require('@cypress/vite-dev-server');
//const WindiCSS = require('vite-plugin-windicss').default;
 

/** @type {Cypress.PluginConfig} */
module.exports = (on, config) => {
  on('dev-server:start', async (options) => startDevServer({
    options,
    viteConfig: {
      plugins: [
      ],
      resolve: {
        alias: {
          'src/': `${resolve(__dirname, '../../src')}/`,
          '@': resolve(__dirname, '../../src'),
          
          
         // $css: path.resolve(__dirname, '../../src/public/style/combine.js'),
          
          
          
        },
      },
    },
  }));

  return config;
};
