
function run(taskDef) {
  let task = taskDef()

  let result = task.next()

  function step() {
    if(!result.done) {
      result = task.next(result.value)
      step()
    }
  }

  step()
}

run(function *() {
  let value = yield 1;
  console.log(value)

  value = yield value + 4
  console.log(value)
})