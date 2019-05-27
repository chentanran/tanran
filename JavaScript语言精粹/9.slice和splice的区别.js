let arr = [1,3,4,5,6,7,8,9]

let b = arr.slice(2,3) // 从什么开始 到 什么结束 不改变原数组 返回截取的数组
console.log(arr)
let c = arr.splice(3,5) // 从什么开始 往后截取多少位 改变原数组 返回截取的数组
console.log(arr)
console.log(b + '---' +  c)