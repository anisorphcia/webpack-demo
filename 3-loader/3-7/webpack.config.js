const path = require('path');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, 'dist'),  // 生成在 dist 文件夹之中
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(jpg|png)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1024 * 8,
          name: '[name]-[contenthash:8].[ext]', // name 文件名 ext 扩展名 contenthash 限制8位hash值
          publicPath: './dist/'

        }
      }
    }]
  },
  mode: 'none'
};