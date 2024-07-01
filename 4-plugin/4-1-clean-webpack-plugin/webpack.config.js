var path = require('path');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js',
    filename: 'bundle2.js',
  },
  // 该插件会默认使用output.path目录作为需要清空的目录
  // 会把该目录下的所有文件目录以及文件都清除
  // 把dist之前的内容清空，然后打包重新生成了新文件
  plugins:[
    new CleanWebpackPlugin()    
  ],
  mode: 'none'
};