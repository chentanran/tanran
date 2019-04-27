let i = [1,2,3,4]

console.log(i instanceof Array) // true

console.log(Array[Symbol.hasInstance](i)) // true

function Obj() {}

Object.defineProperty(Obj, Symbol.hasInstance, {
  value: function(v){
    return false;
  }
})

let obj = new Obj()

console.log(obj instanceof Obj) // false

function isNumber() {}

Object.defineProperty(isNumber, Symbol.hasInstance, {
  value: function(v){
    return (v instanceof Number) && (v > 1 && v < 100)
  }
})

let number = new isNumber()

console.log(number instanceof isNumber) // false