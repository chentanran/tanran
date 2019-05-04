let obj = {
  name: 'zhangsan',
  age: 18
}

let proxy = new Proxy(obj, {
  deleteProperty(trapTarget, key) {
    if(key === 'name') {
      return false
    } else {
      return Reflect.deleteProperty(trapTarget, key)
    }
  }
})

let abc = delete proxy.name
console.log(abc)
console.log('name' in proxy)

let edf = delete proxy.age
console.log(edf)