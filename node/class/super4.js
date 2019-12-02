const dog = {
  getName () {
    console.log('111')
  }
}

const xiaohuang = Object.create(dog)

xiaohuang.wahaha = function() {
  console.log(super.getName())
}

xiaohuang.wahaha()