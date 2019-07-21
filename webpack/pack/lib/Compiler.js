const path = require('path')
const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
const ejs = require('ejs')
class Compiler {
  constructor(config) {
    this.config = config
    this.entry = config.entry
    this.root = process.cwd() // 获取指令执行的路径
    this.modules = {} // 存放模块
    this.rules = config.module.rules
  }
  start() {
    this.depAnalyse(path.resolve(this.root, this.entry))
    this.emitFile() // 输出文件
  }
  depAnalyse(modulePath) {
    let source = this.getSource(modulePath)

    // 解析lodal
    let outputLoader = (use, obj) => {
      let loaderPath = path.join(this.root, use)
      let loader = require(loaderPath)
      source = loader.call(obj, source)
    }
    // console.log(this.rules)
    for (let i = this.rules.length - 1; i >= 0; i--) {
      let { test, use } = this.rules[i]
      if (test.test(modulePath)) {
        console.log(use)
        if (typeof use === 'string') {
          outputLoader(use)
        } else if (Array.isArray(use)) {
          for (let j = use.length - 1; j >= 0; j--) {
            outputLoader(use[j])
          }
        } else if (use instanceof Object) {
          outputLoader(use, null)
        }
      }
    }
    
    let ast = parser.parse(source)
    // 存储文件路径数组
    let deps = []

    traverse(ast, {
      CallExpression(p) {
        // 将require 替换为 __webpack_require__
        if (p.node.callee.name === 'require') {
          p.node.callee.name = '__webpack_require__'
          //
          p.node.arguments[0].value = ('./' + path.join('src', p.node.arguments[0].value)).replace(/\\+/g, '/')
          // console.log(p.node.arguments[0].value)
          deps.push(p.node.arguments[0].value)
        }
      }
    })
    let sourceCode = generator(ast).code
    // console.log(sourceCode)
    let depModulePath = './' + (path.relative(this.root, modulePath)).replace(/\\+/g, '/')
    this.modules[depModulePath] = sourceCode
    
    deps.forEach(dep => {
      // console.log(dep)
      this.depAnalyse(path.resolve(this.root, dep))
    })
  }
  getSource(path) {
    return fs.readFileSync(path, 'utf-8')
  }
  emitFile() {
    let template = this.getSource(path.join(__dirname, '../template/index.ejs'))
    let result = ejs.render(template, {
      entry: this.entry,
      modules: this.modules
    })
    let outpath = path.join(this.config.output.path, this.config.output.filename)
    fs.writeFileSync(outpath, result)
    // console.log(result)
  }
}

module.exports = Compiler
