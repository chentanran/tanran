class State {
  constructor (color) {
    this.color = color
  }
  handle (context) {
    context.setState(this.color)
  }
}

class Context {
  constructor () {
    this.state = ''
  }
  getState () {
    return this.state
  }
  setState (state) {
    this.state = state
  }
}

let green = new State('green')
let red = new State('red')
let orange = new State('orange')

let context = new Context()

green.handle(context)
console.log(context.getState())