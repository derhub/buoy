/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: path.join(__dirname, './tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
