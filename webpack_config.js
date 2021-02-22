const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'django_project/static/js/'),
    filename: 'index.js',
  },
  module: {
      rules:[
        {
            test: /\.(scss)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','sass-loader'],
        },
      ]
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: '../css/index.css',
      })
  ]
};