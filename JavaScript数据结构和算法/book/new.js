function Check(name) {
  this.name = name
}

function add (num) {
  this.name += num
  console.log(this.name) 
}

const check = new Check(1)
check.add(2)