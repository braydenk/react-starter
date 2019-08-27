const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'sourcemap',
};
