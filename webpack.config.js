var path = require('path')

module.exports = {
    // context 表示资源入口 entry 是从那个目录为起点的
    // 没有设置的时候 entry 直接是根目录
    context: path.resolve(__dirname, './src'),
    // 文件入口
    entry: './js/a.js',
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