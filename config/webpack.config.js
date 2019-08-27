const webpackMerge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

// Common configuration
const commonConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath
    filename: 'bundle.js',
  },
  resolve: {
    // Allow absolute imports
    // modules: ['node_modules', 'src'],
    // extensions: [?]
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
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};

module.exports = ({ env }) => {
  const isDevEnv = env === 'development';

  const envConfig = isDevEnv ? devConfig : prodConfig;
  return webpackMerge(commonConfig, envConfig);
};
