var person = {
  name: '张三'
}

let first = Object.create(person)

console.log(Object.getPrototypeOf(first) === person) // 获取原型

let dog = {
  name: '小猫'
}

// let second = Object.create()

Object.setPrototypeOf(first, dog) // 设置到原型上去

console.log(first.name)