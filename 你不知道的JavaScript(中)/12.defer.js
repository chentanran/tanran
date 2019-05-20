
let foo = function (val) {
  return new Promise(function(resolve, reject) {
    resolve(val)
  })
} 

let p = Promise.reject('oop').defer()

foo(12).then(function(val) {
  console.log(val)

  return p
}).then(function(val){
  console.log(val)
},function(err){
  console.log(err)
})