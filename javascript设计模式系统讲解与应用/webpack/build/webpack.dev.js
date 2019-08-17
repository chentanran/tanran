const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode: 'development', // 模式选择 默认为-production 区别 : 是否进行打包压缩混淆
  // watch: true // 监视本地项目文件的变化,自动更新
  devServer: {
    open: true,
    hot: true,
    port: 9999,
    contentBase: './src', // 从哪里提供内容
    compress: true, // 压缩
    proxy: {
      "/api/*": {
        target: "http://localhost:3000",
        // pathRewrite: {"^/api" : ""}
      }
    }
  },
  plugins: [
    // 定义环境变量
    new webpack.DefinePlugin({
      IS_DEV: 'true' // 字符串里面的值会解析为js
    })
  ],
  devtool: 'cheap-module-eval-source-map' // 映射 调试 (原始源代码)
})
