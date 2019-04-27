let firstName = Symbol('first name')

let person = {
  [firstName]: 'nicholas'
}

Object.defineProperty(person, firstName, { writable: false })

let lastName = Symbol('last name')

Object.defineProperties(person, {
  [lastName]: {
    value: '小红',
    writable: false
  }
})

console.log(person[firstName])
console.log(person[lastName])