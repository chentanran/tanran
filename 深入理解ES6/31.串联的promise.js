let p1 = new Promise(function(resolve, reject) {
  resolve(22)
})

p1.then(function(value){ // 当调用第一个 peromise时, 会紧跟着创建一个promise
  console.log(value)
}).then(function(){ // 就达到了可以连续.then的效果
  console.log('333')
})