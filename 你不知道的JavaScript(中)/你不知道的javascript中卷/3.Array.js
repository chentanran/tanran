
var arr = [1, '2', [3]];

delete arr[1]

console.log(arr.length)
console.log(arr[2])
console.log(arr)

function getArr() {
  // let arr = Array.prototype.slice.call(arguments)
  let arr = Array.from(arguments);

  console.log(arr)
}

// getArr(arr);
getArr(1,2,3,4,6,7,8,8,9);