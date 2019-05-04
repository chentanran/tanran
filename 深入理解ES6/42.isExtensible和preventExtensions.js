let target = {}

let proxy = new Proxy(target, {
  isExtensible(trapTarget) {
    return Reflect.isExtensible(trapTarget)
  },

  preventExtensions(trapTarget) {
    // return Reflect.preventExtensions(trapTarget)
    // 如果想让 Object.preventExtensions() 对于 proxy失效 可以在 prevetntExtensions 陷阱中返回 false
    return false // TypeError
  }
})

console.log(Object.isExtensible(target)) // 查看是否是可扩展对象
console.log(Object.isExtensible(proxy))

Object.preventExtensions(proxy) // 设置为不可扩展

console.log(Object.isExtensible(target)) // 查看是否可扩展
console.log(Object.isExtensible(proxy))