"use strict";
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 0] = "Dog";
    Animal[Animal["Cat"] = 1] = "Cat";
})(Animal || (Animal = {}));
a = Direction1.Up; // ok
a = Animal.Dog; // 不能将类型“Animal.Dog”分配给类型“Direction”
