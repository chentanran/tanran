let p1 = new Promise(function(resolve, reject) {
  resolve(1)
})

let p2 = Promise.reject(2)

let p3 = Promise.resolve(3)

let p4 = Promise.race([p1, p2, p3])

p4.then(function(value) {
  console.log(value) // 返回调用的第一个promise
}).catch(function(value) {
  console.log(value)
})

// p4.catch(function(value) {
//   console.log(value)
// })