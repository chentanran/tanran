function foo(n){
  n.push(2);

  console.log(n);
};

var a = [1,3,4,6];

foo(a.slice()) // 浅拷贝 函数中的值不会影响 a 数组的值

console.log(a)

// 直接传递过去 会影响 a 的值
foo(a)

console.log(a)