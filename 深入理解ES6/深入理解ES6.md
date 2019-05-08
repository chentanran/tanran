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

## proxy
+ 代理(proxy)是一种可以拦截并改变底层JavaScript引擎操作的包装器, 在新语言中通过它暴露内部运作的对象, 从而可以让开发者创建内建的对象.

### set
+ trap Target 用于接收属性(代理的目标)的对象
+ key 要写入的属性值(字符串或Symbol类型)
+ value 被写入属性的值
+ receiver 操作发生的对象(通常是代理)

### get
+ trap Target 被读取属性的源对象(代理的目标)
+ key 要读取的属性值(字符串或Symbol)
+ receiver 操作发生的对象(通常是代理)

### has
+ trap Target 读取属性的对象(代理的目标)
+ key 要检查的属性值(字符串或Symbol)

### deleteProperty
+ trap Target 要删除属性的对象(代理的目标)
+ key 要删除的属性键(字符串或Symbol)

### 原型代理 getPrototypeOf 和 setPrototypeOf
+ trap Target 接受原型设置的对象(代理的目标)
+ proto 作为原型使用的对象
```javascript
  getPrototypeOf必须返回对象或null, 只要返回值必将导致运行错误
  setPrototypeOf如果操作失败则返回的一定是 false
```

### 对象可扩展性陷阱
+ Reflect.isExtensible 判断是否是可扩展的对象
+ Reflect.preventExtensions 设置对象为不可扩展对象
+ 接收唯一的参数: trapTarget对象

### 属性描述符陷阱 defineProperty 和 getOwnPropertyDescriptor
+ trapTarget 要定义属性的对象(代理的目标)
+ key 属性的键
+ descriptor 属性的描述符对象

### ownKeys 
+ 通过 Reflect.ownKeys() 返回数组中包含所有自有属性的键名

### 函数代理中的 apply 和 construct
#### Reflect.apply 接收以下参数
+ 1. trap Target 被执行的函数(代理的目标)
+ 2. thisArg 函数被调用时内部this的值
+ 3. argumentsList 传递给函数的参数数组

#### reflect.construct 接收以下参数
+ 1. trap Target 被执行的函数(代理的目标)
+ 2. argumentsList 传递给函数的参数数组

## WEB 浏览器中使用模块

### script 标签上的修饰符
+ type="module" 可以让 js 模块按顺序一个一个的加载
+ async属性 : 在模块执行前, 模块中所有的导入资源都必须下载下来

## import 
+ 使用 import 导入时, 导入的路径必须以 /, ./, ../ 开头

## 安全的整数
+ Number.isInteger() 确保一个值是否是整数类型
+ Number.isSafeInteger() 确保一个值是不超过最大整数和最小整数的值
+ Number.MAX_SAFE_INTEGER 整数范围的上限
+ Number.MIN_SAFE_INTEGER 整数范围的下限