class SingleObject {
  constructor() {}
  login () {
    console.log('登录了')
  }
}

SingleObject.getSingleObject = (function() {
  let instance
  return (function() {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  })
})()

let a = SingleObject.getSingleObject()
a.login()
let b = SingleObject.getSingleObject()
b.login()
console.log('a === b', a === b)