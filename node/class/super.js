class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    super.print(); // this先指向本身, 后指向父类
  }
}

let b = new B();
b.m() // 2

// super 只能点到原型中的方法 不能点到属性和实例
// 通过 super 赋值时, super 指向的就是 this
