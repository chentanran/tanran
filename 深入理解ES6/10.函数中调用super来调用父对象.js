let person = {
  getGreeting() {
    return '娃哈哈'
  }
}

let friend = {
  getGreeting() {
    // 通过super 调用父级方法
    return super.getGreeting() + '---'
  }
}

Object.setPrototypeOf(friend, person)

let relative = Object.create(friend)

console.log(relative.getGreeting())