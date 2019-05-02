class MyPromise extends Promise {

  // 成功的返回值
  success(resolve, reject) {
    return this.then(resolve, reject)
  }

  // 失败的返回值
  failure(reject) {
    return this.catch(reject)
  }
}

let p1 = new MyPromise(function(resolve, reject) {
  // resolve(44)
  reject(33)
})

p1.success(function(value) {
  console.log(value)
}).failure(function(value) {
  console.log(value)
})