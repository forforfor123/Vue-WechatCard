var path = require('path')
var utils = require('./utils')//封装了一些方法的工具
var config = require('../config')//使用 config/index.js
var vueLoaderConfig = require('./vue-loader.conf')
var lessLoaderConfig = require('./less-loader.conf')

/**
 * The target directory for all output files. Must be an absolute path (use the Node.js path module)
 */
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'//APP入口文件，编译入口文件
  },
  output: {
    path: config.build.assetsRoot,//path.resolve(__dirname, '../dist')
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath//正式环境输出的路径
  },
  resolve: {
    //自动补全的扩展名，能够使用户在引入模块时不带扩展
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',// import Vue from 'vue'
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        //use enforce: "pre" section to check source files
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.less$/,
        loader: 'less-loader',
        options: lessLoaderConfig
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[hash:7].[ext]')//文件会放在 dist/static/images/ 下
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')//文件会放在 dist/static/media/ 下
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')//文件会放在 dist/static/fonts/ 下
        }
      }
    ]
  }
}
