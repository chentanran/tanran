var receiver = {},
    supplier = {
      get name() {
        return 'file.js'
      }
    };

Object.assign(receiver, supplier)

console.log(receiver.name)

var descriptor = Object.getOwnPropertyDescriptor(receiver, "name")

console.log(descriptor.value)
console.log(descriptor.name)