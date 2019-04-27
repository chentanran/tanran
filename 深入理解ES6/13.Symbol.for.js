let id = Symbol.for('id')

let obj = {
  [id]: '123'
}

console.log(obj)

let id2 = Symbol.for('id')

console.log(obj[id2])