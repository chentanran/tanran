let p1 = new Promise(function(resolve, reject){
  resolve(33)
})

let p2 = new Promise(function(resolve, reject){
  reject(44)
})

p1.then(function(value) { // 调用第一个promise 返回第二个promise
  console.log(value)
  return p2
}).then(function(value) { // 通过.then 调用第二个promise
  console.log(value)
}).catch(function(err) {
  throw new Error(err)
})