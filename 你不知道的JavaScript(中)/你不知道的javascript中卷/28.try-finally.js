function foo(){
  try{
    return 40; // 后执行
  } finally{
    console.log('hello'); // 先执行
  }
  console.log('never run') // 不会执行
}

console.log(foo())