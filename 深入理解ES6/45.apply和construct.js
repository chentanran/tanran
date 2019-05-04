let target = function() {
  return 42
}

let proxy = new Proxy(target, {
  apply: function(trapTarget, thisArg, argumentList) {
    return Reflect.apply(trapTarget, thisArg, argumentList)
  },

  construct: function(trapTarget, argumentList) {
    return Reflect.construct(trapTarget, argumentList)
  }
})

console.log(typeof proxy)

console.log(proxy()) // 直接调用 得到42

let instance = new proxy() // 通过 new 调用
console.log(instance instanceof proxy)
console.log(instance instanceof target)