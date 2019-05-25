function add (a, b) {
  if(a <= 0 || b <= 0) {
    console.log('参数不能小于0')
    return
  }
  console.log(a + b)
}

var obj = {
  a: 1,
  b: 2
}

// add(obj)
// add({ a: 1, b: 2 })

add(obj.a, obj.b)
add(3, 4)
add(5, 6)
add(7, 8)
add( -1, 8)