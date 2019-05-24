var mysym = Symbol('my own symbol');

console.log(mysym);

var a = {};
a[mysym] = "foobar";

console.log(a);

console.log(Object.getOwnPropertySymbols(a)); // 获取定义的 Symbol