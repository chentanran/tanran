let theError = new Error('here in am')

// console.log(theError.stack.split('\n')[1].split('\\').pop().split(':')[0])

// console.log(/\/(\w+\.js)\:/.exec(theError.stack))
console.log(theError.stack.match(/\/(\w+\.js)\:/)[1])