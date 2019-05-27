let obj = [
  {
    a: 1,
    b: 2
  },
  {
    a: 3,
    b: 4
  },
  {
    a: 5,
    b: 6
  }
]

let sum = obj.reduce((a, b) => a + b.a + b.b, 0)

console.log(sum)