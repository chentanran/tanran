const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)

const deepClone = function(obj, hash = new WeakMap()) {
  if (obj.constructor === Date) {
    return new Date(obj)
  }

  if (obj.constructor === RegExp) {
    return new RegExp(obj)
  }

  if (hash.has(obj)) {
    return hash.get(obj)
  }

  let allDesc = Object.getOwnPropertyDescriptors(obj)

  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)

  hash.set(obj, cloneObj)

  for (let key of Reflect.ownKeys(obj)) {
    cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ? deepClone(obj[key], hash) : obj[key]
  }

  return cloneObj
}

let obj = {
  num: 0,
  str: '',
  Boolean: true,
  unf: undefined,
  null: null,
  obj: { name: '123' },
  arr: [1, 2],
  func: function() { return 123 },
  date: new Date(0),
  reg: new RegExp('/123/ig'),
  [Symbol('1')]: 1
}

console.log(deepClone(obj))
console.log(JSON.parse(JSON.stringify(obj)))