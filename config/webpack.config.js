const webpackMerge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

// Common configuration
const commonConfig = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};

module.exports = ({ env }) => {
  const isDevEnv = env === 'development';

  const envConfig = isDevEnv ? devConfig : prodConfig;
  return webpackMerge(commonConfig, envConfig);
};
