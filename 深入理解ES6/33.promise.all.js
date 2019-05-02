let p1 = new Promise(function(resolve, reject) {
  resolve(11)
})

let p2 = new Promise(function(resolve, reject) {
  // resolve(22)
  reject(22)
})

let p3 = new Promise(function(resolve, reject) {
  resolve(33)
})

let p4 = Promise.all([p1, p2, p3])

p4.then(function(value){ // 成功时, 依次调用promise对象, value得到的是一个数组
  console.log(Array.isArray(value))
  // console.log(value)
  console.log(value[0])
  console.log(value[1])
  console.log(value[2])
}).catch(function(value) { // 失败时, value返回的是失败的值,
  console.log(Array.isArray(value))
  console.log(value)
})