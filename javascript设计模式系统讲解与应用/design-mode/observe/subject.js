class Subject {
  constructor () {
    this.observers = []
    this.state = 0
  }
  getState () {
    return this.state
  }
  setState (state) {
    this.state = state
    this.notifyAllObservers()
  }
  attach (observer) {
    this.observers.push(observer)
  }
  notifyAllObservers () {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
}

class Observer {
  constructor (name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  update () {
    console.log(`${this.name} update, state: ${this.subject.getState()}`)
  }
}

let s = new Subject()
let ob1 = new Observer('111', s)
let ob2 = new Observer('222', s)

s.setState(1)