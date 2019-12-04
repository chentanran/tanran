const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    publicPath: '/dist',
    port: 5000
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/, use: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       cacheDirectory: true,
      //       presets: [[
      //         'env', {
      //           modules: false
      //         }
      //       ]]
      //     }
      //   }
      // },
      {
        test: /\.js$/,
        use: {
          loader: 'loader',
          options: {
            // cacheable: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              // hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
}