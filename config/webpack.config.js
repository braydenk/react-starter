const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Common webpack configuration
const commonConfig = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
};

function getWebpackDevConfig() {
  return {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      contentBase: './dist',
      hot: true,
    },
  };
}

function getWebpackProdConfig() {
  return {
    mode: 'production',
    devtool: 'source-map',
    plugins: [],
  };
}

module.exports = ({ env }) => {
  const isDevEnv = env === 'dev';

  const envConfig = isDevEnv ? getWebpackDevConfig() : getWebpackProdConfig();

  return webpackMerge(commonConfig, envConfig);
};
