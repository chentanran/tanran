# 深入理解ES6

## 正则表达式 u 修饰符

```javascript
  当一个正则表达式添加了 u 修饰符, 它就从编码单元操作模式切换为字符模式

  let text = '哇'
  console.log(/^.&/.test(text))
```

## 字符串字串识别

+ includes(string, value | 开始位置) 在字符串中检测到文本 返回true, 否则为false
+ startsWith(string, value | 开始位置) 在字符串开头检测到文本, 返回true, 否则返回false
+ endsWith(string, value | 开始位置) 在字符串结束检测到文本 返回true 否则返回false

## repeat() 方法

+ 接收一个 Number 类型的参数, 表示该字符串的重复次数, 返回的是当前字符串重复一定次数后的新字符串

```javascript
  'a'.repeat(7) // aaaaaaa
```

## flags 和 source

+ flags 获取正则表达式的修饰符
+ source 获取正则表达式的文本

## new.target
+ 解决判断函数是否通过 new 关键字调用的问题

```javascript
  function Person(name) {
    if(typeof new.target === Person){
      // 通过 new 调用
    } else {
      throw new Error('没通过 new 调用')
    }
  }
```