# 你不知道的JavaScript中卷

## 类型的定义

+ 对语言引擎和开发人员来说, 类型是值得内部特征, 它定义了值得行为, 以区别于其他值

## es6新语法

### Number.isInteger() 整数检测

```javascript
  Number.isInteger(1)

  // pliyfill
  if (!Number.isInteger) {
    Number.isInteger = function(num) {
      return typeof num == "number" && num % 1 == 0;
    };
  }
```

### Number.isSafeInteger() 安全整数检测

```javascript
// pliyfill
  if (!Number.isSafeInteger) {
    Number.isSafeInteger = function(num) {
      return Number.isInteger( num ) && Math.abs( num ) <= Number.MAX_SAFE_INTEGER;
    }; 
  }
```

### void

+ 如果要将代码中的值(如表达式的返回值)设为undefined, 就可以使用void.

### Number.isNaN() 检测是否不是一个数字, 解决isNaN()判断字符串为true的bug

+ 很多javascript程序可能存在NaN方面的问题, 应该尽量使用Number.isNaN()这种可靠的方法

```javascript
  // polufill
  if(!Number.isNaN){
    Number.isNaN = function(n){
      return (
        typeof n = "number" && window.isNaN(n);
      )
    }
  }
  // NaN 是唯一一个不等于自身的方法
  if(!Number.isNaN){
    Number.isNaN = function(n){
      return n !== n;
    };
  }
  
```

### 区分 0 和 -0

```javascript
  function isNegZero(n) {
    n = Number(n);
    return (n === 0) && (1 / n === -Infinity)
  }
```

### Object.is() 判断两个值是否绝对相等

+ 主要处理那些特殊的相等比较

```javascript
  // polyfill
  if(!Object.is){
    Object.is = function(v1, v2){
      // 判断是否是 -0
      if(v1 === 0 && v2 === 0){
        return 1 / v1 === 1 / v2;
      }
      // 判断是否是NaN
      if(v1 !== v1){
        return v2 !== v2;
      }
      // 其他情况
      return v1 === v2;
    }
  }
```

### 值 和 引用

+ 简单值: 总是通过值赋值的方式来赋值/传递, 包括null. undefined. 字符串. 数字. 布尔和ES6中的symbol

+ 复合值: 对象和函数, 则总是通过引用复制的方式来赋值/传递

### 静态时间对象 Date.now() 获取当前日期的字符串值

```javascript
// polyfill
  if(!Date.now){
    Date.now = function(){
      return (new Date()).getTime();s
    }
  }
```

### 构造函数 Error

+ 主要是获取当前运行栈的上下文, 栈上下文信息包括函数调用栈信息和产生错误的代码行号, 以便于调试(debug). 通常和 throw 一起使用

```javascript
  function(x){
    if(!x){
      throw new Error('xxx错误');
    }
  }
```

### 强制类型转换

+ 类型转换发送在静态类型语言的编译阶段, 而强制类型转换则发生在动态类型语言的进行时

### JSON.stringify(data, replacer, space)

+ data: 参数, replacer: 可以进行筛选, space: 指定输出的缩进格式

### parseInt()

+ 从ES5开始 parseInt() 默认转换为十进制数, 除非另外指定. 如果代码需要在 ES5 之前的环境运行, 需将第二个参数设为10, 避免进制转换

### 强制类型转换

```javascript
  // 为了执行减法操作 a和b都需要被转换为数字, 它们首先被转换为字符串(通过toString()), 然后再转换为数字
  var a = [3];
  var b = [4];
  console.log(a - b); // -1
```

### || 和 &&

+ 称为 '逻辑运算符' 并不太准确, 称为 '选择器运算符' 或 '操作数选择器运算符' 更恰当些

+ 在 javascript 中 它们返回的并不是布尔值, 而是两个操作数中的一个的值

### Symbol 强制类型转换

+ 字符串: 可以显式转换,不能隐式转换
+ 数字: 显式和隐式都不行
+ 布尔: 显式我隐式都可以

### 宽松相等 == 和 严格相等 ===

+ == 允许在相等比较中进行强制类型转换, 而 === 不允许

### 实现 goto 功能

```javascript
  // 标签为foo的循环
  foo: for (var i=0; i<4; i++) {
    for (var j=0; j<4; j++) {
      // 如果j和i相等，继续外层循环
      if (j == i) {
        // 跳转到foo的下一个循环
        continue foo;
      }
      // 跳过奇数结果
      if ((j * i) % 2 == 1) {
        // 继续内层循环（没有标签的）
        continue;
      }
      console.log( i, j );
    }
  }

  // 标签为foo的循环
  foo: for (var i=0; i<4; i++) {
    for (var j=0; j<4; j++) {
      if ((i * j) >= 3) {
      console.log( "stopping!", i, j );
      break foo;
    }
    console.log( i, j );
    }
  }
```

## 异步

### 事件循环

+ 程序通常分成了很多小块, 在事件循环队列中一个接一个的执行. 和程序不直接相关的其他事件也可能会插入到队列中

### 完整运行

+ 由于Javascript的单线程特性, 函数中的代码具有原子性, 一旦一个函数开始运行, 它的所有代码都将在另一个函数运行之前完成, 这称为完整运行特性