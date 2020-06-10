var x;
initialize();
console.log(x + x); // 在赋值前使用了变量“x”。ts(2454)
function initialize() {
    x = 10;
}
