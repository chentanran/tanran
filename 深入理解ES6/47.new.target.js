function Number() {
  console.log(typeof new.target !== 'undefined')
}

// let a = new Number()

let b = Number()

