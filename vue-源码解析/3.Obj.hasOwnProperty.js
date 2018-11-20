//判断prop是否是obj自身的属性, 不能是继承来的
// obj.hasOwnProperty(prop)


let obj = {
    name : "xiaowang",
    age : 18
}

console.log(obj.hasOwnProperty("name"))
console.log(obj.hasOwnProperty("toString"))