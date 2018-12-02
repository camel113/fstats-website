const path = require('path');

module.exports = {
  entry: './_assets/scripts/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/2.0/')
  }
};