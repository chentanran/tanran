const CArray = require('./index')

let numElements = 10
let carray = new CArray(numElements)
carray.setData()

console.log(carray.toString())

// carray.bubbleSort()
// carray.selectionSort()
// carray.shellsort()
// carray.shellsort1()
// carray.mergeSort()
carray.qSort(carray.dataStore)
console.log(carray.toString())