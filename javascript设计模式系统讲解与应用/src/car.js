class Car {
  constructor(name, number) {
    this.number = number
    this.name = name
  }
}

class Kuaiche extends Car {
  constructor(name, number) {
    super(name, number)
    this.price = 1
  }
}

class Zhuanche extends Car {
  constructor(name, number) {
    super(name, number)
    this.price = 2
  }
}

// 行程
class Trip {
  constructor(car) {
    this.car = car
  }
  start() {
    console.log(`行程开始, 车牌号为: ${this.car.number}, 车名为${this.car.name}`)
  }
  end() {
    console.log(`行程结束, 价格为${this.car.price * 5}`)
  }
}

let kuaiche  = new Kuaiche('小车', '#ccc')
let zhuanche = new Zhuanche('专车', '#fff')

let trip = new Trip(kuaiche)
trip.start()
trip.end()