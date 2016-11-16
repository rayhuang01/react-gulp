var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '/', 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js'
  },
  module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }]
    },
  devServer: {
    contentBase: path.join(__dirname, 'example')
  }
}