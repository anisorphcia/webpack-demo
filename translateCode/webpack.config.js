const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  module: {
    //  处理 es6
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // 开启缓存
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  // 开启 source map
  devtool: 'source-map',
  mode: 'none'
};