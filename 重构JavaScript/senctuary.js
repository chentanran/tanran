const { create, env } = require('sanctuary')

// const S = create({ checkTypes: true, env: env }) // 带堆栈信息的
const S = create({ checkTypes: false, env: env }) // 带堆栈信息的
S.add('hello', 3)
console.log(S)