var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// var uglifyjsPlugin=require('uglifyjs-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin")

const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 清空配置插件列表
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
  output: {
    publicPath: '/dist/',
    // 将入口文件命名为带 20 位 hash值的 唯一文件
    filename: `[name].[hash].js`,
    chunkFilename: `[name].chunk.js`
  },

  plugins: [

    // new MiniCssExtractPlugin({
    //   filename: `[name].[hash].css`
    // }),

    // 重命名提取后的文件
    new ExtractTextPlugin({
      filename: `[name].css`,
      allChunks: true
    }),

    // 定义当前node 为 生产环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    // 压缩js
    // new webpack.optimization({
    //   compress: {
    //     warnings: false
    //   }
    // }),

    //提取模板, 保存入口html文件
    new htmlWebpackPlugin({
      filename: '../index_prod.html',
      template: './index.html',
      inject: false
    }),

    new VueLoaderPlugin()

  ],

   //压缩js
   optimization: {
    minimizer: [
        new uglifyjsPlugin({
            uglifyOptions: {
                compress: false
            }
        })
    ]
  },
})