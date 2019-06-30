export default (arr) => {
  let looseChange = []
  while (arr.length) {
    let money = arr.shift()
    if (money === 5) {
      looseChange.push(money)
    } else {
      let change = money - 5
      for (let i = 0; i < looseChange.length; i++) {
        if (change >= looseChange[i]) {
          change -= looseChange[i]
          looseChange.splice(i, 1)
          i--
        }
      }
      if (change !== 0) {
        return false
      } else {
        looseChange.push(money)
      }
    }
  }
  return true
}
