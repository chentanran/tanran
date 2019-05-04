let proxy = new Proxy({}, {
  defineProperty(trapTarget, key, descriptor) {
    
    //给 Object.defineProperty 添加限制
    if(typeof key === 'symbol') {
      return false
    }

    return Reflect.defineProperty(trapTarget, key, descriptor)
  },

  getOwnPropertyDescriptor(trapTarget, key) {
    return Reflect.getOwnPropertyDescriptor(trapTarget, key)
  }
})

let symbolName = Symbol('name')
// let name = 'name'

// 如果值为 Symbol 类型 就会抛出错误
Object.defineProperty(proxy, symbolName, {
  value: 'xiaohua'
})

console.log(Object.getOwnPropertyDescriptor(proxy, 'name'))