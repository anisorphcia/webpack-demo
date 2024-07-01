var path = require('path')

module.exports = {
    // 文件入口
    entry: './a.js',
    // 打包后资源输出文件
    output: {
        // __dirname 当前文件的路径
        // path.resolve(__dirname, '') 当前文件夹根目录的绝对路径
        path: path.resolve(__dirname, ''),  // 输出路径
        filename: 'bundle.js'   // 输出的文件名
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']  //  从后往前执行
        }]
    },
    mode: 'none'    // 打包模式，production 会压缩代码
}