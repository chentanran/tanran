let target = {
  name: 'xiaoming'
}

let proxy = new Proxy(target, {
  set(trapTarget, key, value, receiver) {
    // 忽略不希望受到影响的属性
    if(!trapTarget.hasOwnProperty(key)) {
      if(isNaN(value)) { // 添加新属性时, 当value值不是数字, 就抛出一个错误 
        throw new Error('请填写数字');
      }
    }

    return Reflect.set(trapTarget, key, value, receiver)
  }
})

proxy.name = 'proxy'

console.log(proxy)
console.log(target)

proxy.count = 1
console.log(proxy)
console.log(target)

proxy.autoName = 'aaa' 
console.log(proxy)
console.log(target)