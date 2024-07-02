const path = require('path');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  module: {
    // 处理 jpg 文件
    rules: [{
      test: /\.jpg$/,
      use: 'file-loader'
    }]
  },
  mode: 'none'
};