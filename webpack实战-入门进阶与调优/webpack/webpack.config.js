const path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: './index.js',
  output: {
    filename: '[name]@[chunkhash].js'
  },
  mode: 'development',
  devServer: {
    publicPath: '/dist',
    port: 5000
  }
}