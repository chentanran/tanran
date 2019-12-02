class Parent {
  static myMethod(msg) {
    console.log('static', msg);
  }

  myMethod(msg) {
    console.log('instance', msg);
  }
}

class Child extends Parent {
  static myMethod(msg) {
    super.myMethod(msg); // 静态方法中指向 父类的静态方法和属性
  }

  myMethod(msg) {
    super.myMethod(msg); // 原型方法中指向父类的原型对象
  }
}

Child.myMethod(1); // static 1

var child = new Child();
child.myMethod(2); // instance 2

