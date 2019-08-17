#!/usr/bin/env node
const path = require('path')
const Compiler = require('../lib/Compiler')
// 读取文件配置
let config = require(path.resolve('build/webpack.dev.js'))
// console.log(config)

let compiler = new Compiler(config)
compiler.start()