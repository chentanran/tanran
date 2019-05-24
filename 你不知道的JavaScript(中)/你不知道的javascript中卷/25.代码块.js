function foo() {
  bar: {
    console.log('hello');
    break bar; // 可以终止代码执行 实现标签跳转
    // break;
    console.log('1')
  }
  console.log('world')
}

foo()