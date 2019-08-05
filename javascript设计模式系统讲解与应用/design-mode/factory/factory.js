class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    console.log('初始化完成')
  }
  fn1() {
    console.log('方法1')
  }
  fn2() {
    console.log('方法2')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

// 测试
let creator = new Creator()
let a = creator.create('你好')
a.init()
a.fn1()
console.log(a.name)