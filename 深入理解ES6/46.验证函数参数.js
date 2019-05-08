function sum(...value) {
  return value.reduce((previous, current) => previous + current, 0)
}

let proxy = new Proxy(sum, {
  apply: function(trapTarget, thisArg, argumentList) {
    // 验证是否为数字类型
    argumentList.forEach(item => {
      if(typeof item !== 'number') {
        throw new TypeError('所有参数必须是数字!')
      }
    })

    return Reflect.apply(trapTarget, thisArg, argumentList)
  },

  construct: function(trapTarget, argumentList) {
    throw new TypeError('该函数不可通过new来调用')
  }
})

let obj = proxy(1,3,4,5,67,'a') // 所有参数必须是数字

console.log(obj)