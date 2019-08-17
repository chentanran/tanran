module.exports = function (api) {
  api.cache(true)

  const presets = ['@babel/env']
  const plugins = [
    '@babel/plugin-proposal-class-properties', // class
    '@babel/plugin-transform-runtime', // generator
    "syntax-export-extensions" // 动态导入
  ]
  
  return {
    presets,
    plugins
  }
}