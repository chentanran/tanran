// 停车场
class Park {
  constructor(floors) {
    this.floors = floors || []
    this.carList = {}
    this.camera = new Camera()
    this.screen = new Screen()
  }
  in(car) {
    // 通过摄像头获取信息
    const info = this.camera.shot(car)
    // 停在某个停车位
    const i = parseInt(Math.random() * 100 % 100)
    const place = this.floors[0].place[i]
    place.in()
    info.place = place
    // 记录信息
    this.carList[car.num] = info

  }
  out(car) {
    // 获取信息
    const info = this.carList[car.num]
    // 停车位清空
    const place = info.place
    place.out()
    // 显示时间
    this.screen.show(car, info.inTime)
    // 清空记录
    delete this.carList[car.num]
  }
  emptyNum() {
    return this.floors.map(floor => {
      return `${floor.index}层还有${floor.emptyPlaceNum()}个车位`
    }).join('/n')
  }
}
// 出口显示屏
class Screen {
  show(car, inTime) {
    console.log('车牌号', car.num)
    console.log('停车时间', Date.now() - inTime)
  }
}
// 摄像头
class Camera {
  shot(car) {
    return {
      num: car.num,
      inTime: Date.now()
    }
  }
}

// 车辆
class Car {
  constructor(num) {
    this.num = num
  }
}

// 层
class Floor {
  constructor(index, place) {
    this.index = index
    this.place = place || []
  }
  emptyPlaceNum () {
    let num = 0
    this.place.forEach(p => {
      if (p.empty) {
        num = num + 1
      }
    })
    return num
  }
}

// 车位
class Place {
  constructor() {
    this.empty = true
  }
  in () {
    this.empty = false
  }
  out () {
    this.empty = true
  }
}

// 测试
// 初始化停车场
const floors = []
for(let i = 0; i < 3; i++) {
  const place = []
  for (let j = 0; j < 100; j++) {
    place[j] = new Place()
  }
  floors[i] = new Floor(i + 1, place)
}

const park = new Park(floors)

// 初始化车辆
const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(300)

console.log('第一辆驶入')
console.log(park.emptyNum())
park.in(car1)
console.log('第二辆驶入')
console.log(park.emptyNum())
park.in(car2)
park.out(car2)
park.out(car1)
console.log('第三辆驶入')
console.log(park.emptyNum())
park.in(car3)
park.out(car3)
