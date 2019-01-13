# 前端一些实用扩展知识

## 自动化测试

### 基础代码

```javascript
module.exports = {
  add(...arg) {
    return arg.reduce((one, two) => {
      return one + two;
    });
  },
  sub(...arg) {
    return arg.reduce((one, two) => {
      return one - two;
    })
  }
}
```

### 第一种, 使用node中的assert

* strictEqual, equal 进行单元测试
```javascript
const { add, sub } = require("../src/main.js");
const assert = require("assert");

assert.strictEqual(add(1,1), 23, "结果不符合");

assert.equal(add(1,1), 23, "信息失败");
```

### 第二种, 使用 chai.js 进行单元测试

* 第一步 安装chaijs 
```
npm i chai -D
```
* 第二步
```javascript
const { add, sub } = require("../src/main.js");

// char.js测试
const { should, expect, assert } = require('chai');

// should 要先执行以下
// should();
// add(2,3).should.be.equal(5);

// 或者直接用 expect
expect(add(2,3)).to.equal(6);
```

## 第三种 使用mocha

### 第一步 安装mocha
```
npm run mocha -D
```

### 第二步 在package.json下面的scripts文件中配置
```
"mocha" : "mocha test/mocha.js"
```

### 第三步 用mocha进行单元测试
```javascript
const { add, sub } = require("../src/main.js");

const assert = require("assert");

describe("#math", () => {
  describe("#add()", function() {
    it("add(2,3) equal 6", function() {
      assert.equal(add(2,3), 6);
    });

    // 只测试这一个
    it.only("add(2,3) equal 5", function() {
      assert.equal(add(2,3), 5);
    });

    // 过滤掉这个测试
    it.skip("add(2,-3) equal -1", function() {
      assert.equal(add(2,-3), -1);
    });
    it("add(2,-3) equal -1", function() {
      assert.equal(add(2,-3), -2);
    });
  })
  
  describe("#sub()", function() {
    it("sub(2,3) equal -1", function() {
      assert.equal(sub(2,3), -1)
    })
  })
})
```

## 覆盖率测试

### 第一步 先安装 istanbul
```
npm install istanbul -D
```

### 第二步 在package.json的scripts中添加
```
"cover": "istanbul cover [mocha路径] --reporter 目标文件名"
```

### 第三步 进行覆盖率测试
```javascript
const { add, sub, cover } = require("../src/main.js");

const assert = require("assert");

describe("#math", () => {
  describe("#add()", function() {
    it("add(2,3) equal 6", function() {
      assert.equal(add(2,3), 6);
    });

  //   // 只测试这一个
  //   it.only("add(2,3) equal 5", function() {
  //     assert.equal(add(2,3), 5);
  //   });

  //   // 过滤掉这个测试
  //   it.skip("add(2,-3) equal -1", function() {
  //     assert.equal(add(2,-3), -1);
  //   });
  //   it("add(2,-3) equal -1", function() {
  //     assert.equal(add(2,-3), -2);
  //   });
  })
  
  describe("#sub()", function() {
    it("sub(2,3) equal -1", function() {
      assert.equal(sub(2,3), -1)
    })
  })

  // 覆盖率测试
  describe("#cover", function() {
    it("cover(2,3) equal 1", function() {
      assert.equal(cover(2,3), 1);
    });

    it("cover(3,3) equal 1", function() {
      assert.equal(cover(3,3), 1);
    });

    it("cover(4,3) equal 1", function() {
      assert.equal(cover(4,3), 1);
    });
  })
})
```
## 性能测试 benchmark

### 第一步 安装npm包
```javascript
npm i --save benchmark
```

### 第二步 导入 benchmark 进行测试
[benchmarkg官方网址](https://benchmarkjs.com/)
