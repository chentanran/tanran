class father {
  constructor() {
    this.name = '张三'
  }
}

class son extends father {
  constructor(name) {
    super(name)
    this.age = '18'
  }
}

let son1 = new son()

// console.log(son1)

for(let i in son1) {
  if(Object.hasOwnProperty(i)) {
    console.log(i)
    // return
  } else {
    console.log(i + '---')
  }
  // console.log(i)
}