
class obj {
  constructor() {
  }

  get html() {
    console.log(this.name)
  }

  set html(name) {
    this.name = name
  }
}

let objs = new obj()

objs.html('123');
console.log(objs.html())