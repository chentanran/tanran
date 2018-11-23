
// var arr = "1,3,5";

// className = className.replace(oldValue, '').replace(/\s$/, '');

// arr.push(4).push(6)

//  var array = arr.replace(1,4).replace(1,6)

// console.log(array)

// var arr = [1,3,5,6,7];

// function add(arr, ...newdata){
//     console.log([...arr, ...newdata])
// }

// add(arr, 2,3,4,5,6)

// var  arr = [1,3,3,4,6,6,7,7]

// arr.forEach(function(a,b,s){
//     console.log(a,b,s)
//     console.log(this)
// },arr)

// var arr = [1,3,23,4,4,5,53];

// var b =arr.reduce((a,c)=>{
//     return a * c
// })

// console.log(b)

var arr = [1,3,23,4,4,5,53];

arr = [...new Set(arr)]

console.log(arr)