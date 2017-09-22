//检查本地 Node 和 npm 版本和要求的是否对应
require('./check-versions')()

//引入全局 APP 配置文件，包括一些环境参数，打包目标文件夹
var config = require('../config')

//process 是 Node 中的一个全局对象，可以看作一个进程，这个 process.env 中保存着当前 shell 的环境变量
//这里是如果这个环境变量中没有 NODE_ENV 这个属性，就将它的值设为开发模式 development，相对的还有生产模式 production
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

//Node 自带的模块，用来处理相对路径和绝对路径
var path = require('path')

//Node 的 express 模块，可以搭建本地的服务器环境
var express = require('express')

//Webpack 模块
var webpack = require('webpack')

//一个用来打开网页、文件、可执行文件的模块
var opn = require('opn')

//代理服务。我们需要在 dev 环境去调用后台的 API 服务。配置 proxyTable 在 config/index.js
var proxyMiddleware = require('http-proxy-middleware')

//dev 环境的 webpack 配置
var webpackConfig = require('./webpack.dev.conf')

// 如果 Node 没有指定端口，使用 content/index.js 内配置的 8080 端口
var port = process.env.PORT || config.dev.port

// 默认不自动打开浏览器，config/index.js
var autoOpenBrowser = !!config.dev.autoOpenBrowser

// 定义 Http 代理到自定义的服务器后端
var proxyTable = config.dev.proxyTable

//使用 Node 的 Express 模块启动服务，启动 Webpack 进行编译
var app = express()
var compiler = webpack(webpackConfig)

//启动 webpack-dev-middleware，将编译后的文件暂存到内存中
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

// 启动 hot-reload，当 html-webpack-plugin 模板改变强制页面 reload
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

//将 proxyTable 的配置挂载到 express 服务上
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

//将暂存到内存中的 webpack 编译后的文件挂在到 express 服务上
app.use(devMiddleware)

//将 hot-reload 挂在到 express 服务上
app.use(hotMiddleware)

//拼接 static 文件夹的静态资源路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
//为静态资源提供响应服务
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

//等待测试完成
console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
