enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

declare let a: Direction1

enum Animal {
  Dog,
  Cat
}

a = Direction1.Up // ok
a = Animal.Dog // 不能将类型“Animal.Dog”分配给类型“Direction”