function getValue<T extends Object, U extends keyof T> (obj: T, val: U) {
  console.log(obj[val])
}

let a1 = {
  name: '1',
  val: '2'
}

getValue(a1, 'val')