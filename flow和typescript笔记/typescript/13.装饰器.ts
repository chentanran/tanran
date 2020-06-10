@logClass
class Persons { 

  @logProperty
  public name: string;

  constructor(name : string) { 
    this.name = name;
  }

  @logMethod
  public greet(@logParameter message : string) : string { 
    return `${this.name} say: ${message}`;
  }
}

// 打印构造函数
function logClass(target: typeof Persons) {
    console.log(target)
}

// 打印属性名
function logProperty(target: any, propertyKey: string) {
    console.log(propertyKey);   
}

// 打印方法名
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(propertyKey);   
}

// 打印参数位置
function logParameter(target: Object, propertyKey: string, index: number) {
    console.log(index);
}