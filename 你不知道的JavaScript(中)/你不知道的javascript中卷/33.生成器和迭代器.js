function *something() {
  try {
    var nextVal;

    while (true) {
      if (!nextVal) {
        nextVal = 1
      } else {
        nextVal = nextVal * 2
      }
      yield nextVal
    }
  } finally {
    console.log('clear up')
  }
}

let it = something()
for(let i of it) {
  if (i > 1000) {
    it.return('hello world').value
  }
  console.log(i)
}