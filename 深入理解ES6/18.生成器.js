// function *createIterator(items) {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let ite = createIterator()

// console.log(ite.next().value)
// console.log(ite.next().value)
// console.log(ite.next().value)
// console.log(ite.next().value)
// console.log(ite.next().value)

function *createIterator(items) {
  for(let i = 0; i < items.length; i++) {
    yield items[i];
  }
}

let ite = createIterator([1,3,5,6,7,8,9,0,13,13,14])

console.log(ite.next().value)
console.log(ite.next().value)
console.log(ite.next().value)
console.log(ite.next().value)
console.log(ite.next().value)
console.log(ite.next().value)
console.log(ite.next().value)
console.log(ite.next().value)