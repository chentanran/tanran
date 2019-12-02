class A {
  constructor() {
    this.x = 1;
  }
  static print() {
    console.log(this.x); 
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  static m() {
    super.print(); // 静态方法中, this指向当前的子类, 而不是子类的实例
  }
}

B.x = 3;
B.m() // 3