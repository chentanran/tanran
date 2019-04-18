var a = "hell world";
var b = 10;

switch(true){
  case !!a: // 只有全等为 true 才能通过 不然永远执行不到这里来
    console.log(111);
    break;
  default:
    console.log('不全等')
}
