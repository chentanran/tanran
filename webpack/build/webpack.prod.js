const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production', // 模式选择 默认为-production 区别 : 是否进行打包压缩混淆
  plugins: [
    // 定义环境变量
    new webpack.DefinePlugin({
      IS_DEV: 'false'
    })
  ],
  // js 和 css 代码压缩
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
})
