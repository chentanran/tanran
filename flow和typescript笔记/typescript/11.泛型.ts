interface FirstInterface {
  dosomething(): string
}

interface SecondInterface {
  dosomethingElse(): number
}

interface ChildInterface extends FirstInterface, SecondInterface {

}

// class Demo<T extends ChildInterface> {
//   private demo1: T

//   user1() {
//     this.demo1.dosomething()
//     this.demo1.dosomethingElse()
//   }
// }
class Demo<T extends FirstInterface & SecondInterface> {
  private demo1!: T

  user1() {
    this.demo1.dosomething()
    this.demo1.dosomethingElse()
  }
}

function factorys<T>(type: {new(): T}): T {
  return new type()
}

interface Person {
  name: string,
  age: number
}

// const person = {} as Person

// person.name = 'xiaowang'
// person.age = 20

const person = 'xiaohuahua' as any as Person

let foo = (x: number, y: number) => {}

let bars = (x?: number, y?: number) => {}

let bas = (...args: number[]) => {}

// foo = bars = bas
// bas = bars = foo

enum Status {
  Ready,
  Waiting
}

let statuss = Status.Ready
let num = 0

statuss = num
num = statuss


