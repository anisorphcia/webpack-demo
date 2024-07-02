const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  // 开启 source map
  devtool: 'source-map',
  mode: 'none'
};