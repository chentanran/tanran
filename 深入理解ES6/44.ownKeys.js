let proxy = new Proxy({}, {
  ownKeys(trapTarget) {
    return Reflect.ownKeys(trapTarget).filter(key => {
      return typeof key !== 'string' || key[0] !== '_'
    })
  }
})

let nameSymbol = Symbol('name')

proxy.name = 'name'
proxy._name = 'age'
proxy[nameSymbol] = 'symbolName'

let names = Object.getOwnPropertyNames(proxy) // 获取对象名

let keys = Object.keys(proxy)

let symbols = Object.getOwnPropertySymbols(proxy) // 

console.log(names[0])
console.log(keys[0])
console.log(symbols[0])