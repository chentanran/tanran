
function arr() {
  return Array.from(arguments, value => value + 1)
}

let arrfrom = arr(1,3,4,5)

console.log(arrfrom)