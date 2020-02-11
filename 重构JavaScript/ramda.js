const R = require('ramda')

const square = (thing) => thing * thing

const mapSquare = R.map(square)([2, 3, 4])

console.log(mapSquare)
// console.log(mapSquare([2, 3, 4]))

console.log(R.map(square, [2, 4, 5]))