function makeChange (origAmt, coins) {
  let remainAmt = 0
  if (origAmt % .25 < origAmt) {
    coins[3] = parseInt(origAmt / .25)
    remainAmt = origAmt % .25
    origAmt = remainAmt
  }
  if (origAmt % .1 < origAmt) {
    coins[2] = parseInt(origAmt / .1)
    remainAmt = origAmt % .1
    origAmt = remainAmt
  }
  if (origAmt % .05 < origAmt) {
    coins[1] = parseInt(origAmt / 0.5)
    remainAmt = origAmt % .05
    origAmt = remainAmt
  }
  coins[0] = parseInt(origAmt / .01)
}

function showChange (coins) {
  if (coins[3] > 0) {
    console.log(coins[3], coins[3] * .25, '25美分数量')
  }
  if (coins[2] > 0) {
    console.log(coins[2], coins[2] * .10, '10美分数量')
  }
  if (coins[1] > 0) {
    console.log(coins[1], coins[1] * .50, '5美分数量')
  }
  if (coins[0] > 0) {
    console.log(coins[0], coins[0] * .01, '1美分数量')
  }
}

let origAmt = .63
let coins = []
makeChange(origAmt, coins)
showChange(coins)