
let obj = new class{
  constructor(name) {
    this.name = name
  }

  sayhi() {
    return this.name
  }
}('小王')

// let objs = obj()
console.log(obj.sayhi())