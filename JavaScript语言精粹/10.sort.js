let arr = [1,'qq',3,4,5,6,7,'bb','aa']

arr.sort(function(a,b) {
  if(a === b) {
    return 0
  }
  if(typeof a === typeof b) {
    return a < b ? -1 : 1
  }
  return typeof a < typeof b ? -1 : 1
})

console.log(arr)