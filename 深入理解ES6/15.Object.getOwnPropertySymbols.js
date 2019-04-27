let i = Symbol.for('id')

let obj = {
  [i]: '娃哈哈',
  name: 123
}

console.log(obj)

let symbols = Object.getOwnPropertySymbols(obj) // 只能获取到当前id

console.log(symbols.length)

console.log(symbols)