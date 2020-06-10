// let x: number;
// initialize();
// console.log(x! + x); // 在赋值前使用了变量“x”。ts(2454)
// function initialize() {
//     x = 10;
// }

// function isStrings(test: any): boolean{
//   return typeof test === 'string';
// }

// function example(foo: number | string){
//   if(isStrings(foo)){
//       console.log('it is a string' + foo);
//       console.log(foo.length); // string function
//   }
// }
// example('hello world');

// interface ToString {
//   (): string
// }

// declare const somethingToString: ToString

// somethingToString()

function greeter(person: string) {
  return 'hello' + person
}