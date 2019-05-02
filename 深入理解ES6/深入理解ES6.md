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

## Object.assign() 混入(mixin)

## Object.getOwnPrototypeDescriptor() 属性描述符

## Object.getOwnPrototypeNames() 
### 自由属性枚举顺序
+ 所有数字键按升序排列
+ 所有字符串键按他们被加入对象的顺序排序
+ 所有symbol键按照它们被加入对象的顺序排序

## setPrototype()[设置原型对象] 和 getPrototype()[获取原型对象]

## Symbol

+ 可以使用typeof来检测是否为Symbol类型
+ 第一次调用 Symbol.for()方法创建这个Symbol, 第二次调用可以直接从Symbol的全局注册表中检索这个Symbol
+ 可以使用 Symbol.keyFor() 在Symbol全局注册表中检索与Symbol有关的键

### Object.getOwnPropertySymbols() 返回一个包含所有Symbol自有属性的数组

### Symbol.hasInstance 用于确定对象是否为函数的实例 等同于 instanceof

### Symbol.isConcatSpreadable 属性 为一个布尔值, 该属性为true, 则表示对象有length属性和数字键
```javascript
  let collection = {
    0: 'hello',
    1: 'world',
    length: 2,
    [Symbol.isConcatSperadable]: true
  }

  let message = ['hi'].concat(collection)
```

### Symbol.match 接收一个字符串类型的参数,如果匹配成功,则返回匹配元素的数组, 否则返回null
### Symbol.replace 接收一个字符串类型的参数和一个替换用的字符串,最终依旧返回一个字符串
### Symbol.search 接收一个字符串参数,如果匹配到内容, 则返回数字类型的索引位置, 否则返回-1
### Symbol.split 接收一个字符串参数, 根据匹配内容将字符串分解, 并返回一个包含分割后片段的数组

## 集合对象迭代器
+ ES6 中有三种集合类型: 数组, Map, Set
+ 三种类型集合都内建了三种迭代器
```javascript
  1. entries() 返回一个迭代器, 其值为多个键值对
  2. values() 返回一个迭代器, 其值为集合的值
  3. keys() 返回一个迭代器, 其值为集合中的所有键名
```

## Array

### Array.from() 将类数组对象转换为数组

### Array.find() 返回查找到的第一个值 Array.findIndex() 返回查找到的第一个下标

### Array.fill() 填充值
+ 第一个参数: 要填充的值
+ 第二个参数: 从何处开始填充
+ 第三个参数: 到何处为止
+ 注: 直接改变数组内部数据

### Array.copeWithin() 从数组中复制元素的值
+ 第一个参数: 开始粘贴索引值的位置
+ 第二个参数: 开始复制值的索引位置
+ 第三个参数: 结束复制值的位置

## Promise

### Promise.all()
+ 成功时依次调用promise, value值为一个数组
+ 失败时, 返回失败的promise, value为返回失败的值

### Promise.race()
+ 接收多个promise, 返回第一个调用的promise
