function EventTarget() {}

EventTarget.prototype = {
  constructor: EventTarget,
  emit: function() {
    // debugger
    console.log('www')
  },
  on: function() {
    console.log('aaa')
  }
}

let object = {
  a: '111'
}

Object.assign(object, EventTarget.prototype)

console.log(object.emit())