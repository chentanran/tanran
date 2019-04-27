var obj = {
  a: 1,
  c: 2,
  b: 3,
  0: 1,
  3: 2,
  2: 3
}

console.log(Object.getOwnPropertyNames(obj)) // 先数字后字符串 数字从小到大, 字符串按顺序排