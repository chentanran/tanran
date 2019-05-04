let target = {
  value: '123',
  name: 'xiaoming'
}

let proxy = new Proxy(target, {
  has(trapTarget, key) {
    if(key === 'value') {
      return false
    } else {
      return Reflect.has(trapTarget, key)
    }
  }
})

console.log('value' in proxy) // 已有 返回false
console.log('name' in proxy) // 已有 返回true
console.log('age' in proxy) // 未有 返回false