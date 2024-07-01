### 入口 context entry

Webpack资源入口，表示它是从哪个JS文件开始打包的。Webpack要找到这个文件，是通过context和entry这两个参数。

context是一个绝对路径，是基础目录的意思。entry是一个相对路径，它与context拼接起来，就是Webpack打包的入口文件了。

### 出口 output

filename除了可以是一个文件名称，也可以是相对地址，例如'./js/bundle.js'。

最终打包输出的文件是path绝对路径与filename的拼接后的地址。

filename支持类似变量的方式生成动态文件名，例如[hash]-bundle.js，其中方括号很像占位符，hash表示特定的动态值。

除了 [hash] 还有 [name] 、[chunkhash]和[contenthash]，[name] 表示chunk的名称

[hash:8] 表示取hash值的前8位

Webpack中hash、chunkhash和contenthash主要与浏览器缓存行为有关。浏览器在初次请求服务端资源的时候，服务器给JS、CSS和图片等资源一个较长的缓存时间，我们通过给资源名称增加hash值来控制浏览器是否继续使用本地缓存。hash、chunkhash和contenthash这三者都是根据文件内容计算出的hash值，[hash]是根据全部参与打包的文件计算出来的，[chunkhash]是根据当前打包的chunk计算出来的，[contenthash]是CSS文件的。

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

## Loader

预处理器loader本质是一个函数，它接受一个资源模块，然后将其处理成Webpack核心能使用的形式。


Rules是一个数组，数组每一项是一个JS对象，该对象有两个关键属性test和use。

Test是一个正则表达式或正则表达式数组，模块文件名与正则匹配的会被use里的loader处理。

Use可以是字符串，对象或数组，表示要使用的loader。

如果使用单一loader，那么可以取字符串，例如 use: 'babel-loader'。

如果该loader额外配置参数，那么可以取对象，额外参数放在options里（有部分loader放query里），例如 use: {loader: 'babel-loader', options: {…}}。

如果使用多个loader进行链式处理，那么可以取数组，数组每一项可以是字符串或对象，字符串或对象的使用同上。

#### rules

**1.exclude & include**

如果我们有一些文件不想被正则匹配到的loader处理，那么我们可以配置exclude项，exclude的中文意思是排除。

**exclude**的值是字符串或正则表达式，字符串需要是绝对路径。

```
rules: [{
    test: /\.js$/,
    use: ['babel-loader'],
    exclude: /node_modules/,
}]
```

上面的配置表示，除了node_modules文件夹，对所有的以js为后缀名的文件模块使用babel-loader处理。

**include**表示的意思正好与exclude相反，它表示只对匹配到的文件处理。

**2.enforce**

如果我们想强制某个loader最先处理或最后处理，可以使用enforce项。

Pre表示这个loader在所有的loader之前执行，post表示这个loader在所有的loader执行后再执行。

```
rules: [{
    test: /\.js$/,
    use: ['eslint-loader'],
    enforce: 'pre',
    exclude: /node_modules/,
}]
```

这个配置表示在所有处理js文件模块loader之前执行eslint-loader，这样我们可以在js代码未被处理的时候就进行eslint代码规范校验。

**3.resource & issuer**

简而言之，issuer来加载resource，例如在 a.js 里面夹在了 b.js ，那么a.js就是 issuer，b.js 就是 resource。

```
rules: [{
   test: /\.css$/,
   use: ['style-loader', 'css-loader']
}]
rules: [{
   use: ['style-loader', 'css-loader'],
   resource: {
     test: /\.css$/
   }
}]
```

 这两种写法等效。

如果想指定只有src目录下的JS引用的CSS可以被相应的loader处理，那么可以配置issuer。

```
  rules: [{
    use: ['style-loader', 'css-loader'],
    resource: {
      test: /\.css$/,
      exclude: /node_modules/
    },
    issuer: {
      test: /\.js$/,
      include: /src/
    }
  }]
```

#### babel-loader
3-2 3-3 查看示例
使用babel-loader后，可将 es6 语法转换为 es5
选用此预设可以进行转码 @babel/preset-env
cacheDirectory: true 可以开启缓存，当代码没有变化的时候，可以使用上次的打包

对于babel配置复杂的情况，可以再根目录建立一个babel的配置文件，babel.config.js
在这个文件里面进行配置

### 文件监听
npx webpack --watch
在我们的工程代码修改时，会自动重新构建出新的打包文件

安装 webpack-dev-server
运行 npx webpack-dev-server 启动
打开 http://localhost:8080/ 进行观察

### source map
编译打包后，浏览器查看源文件

通过webpack-dev-server开启的服务，生成的source map文件直接放在内存里，所以在项目工程目录是看不到这个文件的。
使用npx webpack命令打包，这个时候就会看到磁盘工程目录新生成了bundle.js.map这个文件，这个就是source map文件