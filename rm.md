###入口 context entry

Webpack资源入口，表示它是从哪个JS文件开始打包的。Webpack要找到这个文件，是通过context和entry这两个参数。

context是一个绝对路径，是基础目录的意思。entry是一个相对路径，它与context拼接起来，就是Webpack打包的入口文件了。

###出口 output

filename除了可以是一个文件名称，也可以是相对地址，例如'./js/bundle.js'。

最终打包输出的文件是path绝对路径与filename的拼接后的地址。

filename支持类似变量的方式生成动态文件名，例如[hash]-bundle.js，其中方括号很像占位符，hash表示特定的动态值。

除了 [hash] 还有 [name] 、[chunkhash]和[contenthash]，[name] 表示chunk的名称

```
entry: {
	app1: './a.js',
	app2: './f.js',
},
output:{
	filename: [name].js
}
```

这样子定义为就会输出 app1.js

**output.publicPath**

publicPath表示的是资源访问路径。

**output.chunkFilename**

它表示的是打包过程中非入口文件的chunk名称，通常在使用异步模块的时候，会生成非入口文件的chunk。
