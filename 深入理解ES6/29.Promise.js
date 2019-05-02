
let promise =  Promise.resolve(1) // 直接调用成功的方法

promise.then(function(value) {
  console.log(value)
})

let err = Promise.reject(222) // 直接调用失败的方法

err.catch(function(err) {
  console.log(err)
})