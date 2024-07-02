const path = require('path');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(jpg|png)$/,
      use: {
        loader: 'url-loader',
        options: {
          // 图片小于 8k 的，转换成 base64 然后写入打包的 js 文件里
          limit: 1024 * 8,
        }
      }
    }]
  },
  mode: 'none'
};