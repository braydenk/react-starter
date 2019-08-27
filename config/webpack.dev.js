const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    open: 'Google Chrome',
    port: 3000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin({ port: 3000 }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Application is running at http://localhost:3000'],
      },
    }),
  ],
};
