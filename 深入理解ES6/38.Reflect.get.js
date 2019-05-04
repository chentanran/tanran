let proxy = new Proxy({}, {
  get(trapTarget, key, receiver) {
    if( !(key in receiver) ) {
      throw new TypeError('属性' + key + '不存在')
    }

    return Reflect.get(trapTarget, key, receiver)
  }
})

proxy.name = '123'
console.log(proxy.name)

console.log(proxy.age)