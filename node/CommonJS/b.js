exports.done = false

const a = require('./a')

console.log('bbbbbbbbbbbbb', a.done)

exports.done = true

console.log('bbbbbbbbbbb借宿了')