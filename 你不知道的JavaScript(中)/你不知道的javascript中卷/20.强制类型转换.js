function onlyOne(){
  var sum = 0;
  for(var i = 0; i < arguments.length; i++){
    // debugger
    // 跳过假值, 和处理0一样, 但避免了NaN
    if(arguments[i]) {
      sum += arguments
    }
  }

  return sum == 1
}

var a = true;
var b = false;

onlyOne(b ,a);
console.log(onlyOne(b ,a, a, a));

function onlyTwo(){
  var sum = 0;
  for(var j = 0; j < arguments.length; j++){
    // 将 arguments 转换为布尔值 然后再转换为数字 进行累加
    sum += Number(!!arguments[j]);
  }

  return sum == 2;
}

console.log(onlyTwo(a, b));
console.log(onlyTwo(a, b, a));