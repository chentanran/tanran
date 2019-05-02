
function Rect(width, height) {
  this.width = width;
  this.height = height;
}

Rect.prototype.getArea = function(){
  return this.height + this.width
}

function Square(length) {
  Rect.call(this, length, length)
}

Square.prototype = Object.create(Rect.prototype, {
  constructor: {
    value: Square,
    enumerable: true,
    writable: true,
    configurable: true
  }
})

var square = new Square(3)

console.log(square.getArea())