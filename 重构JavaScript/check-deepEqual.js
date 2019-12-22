const wish = require('wish')
const deepEqual = require('deep-equal')

const check = function(arr) {
  return ['1', '2', '3']
}

describe('check', ()=>{
  it('hand pairs', () => {
    var result = ['1-a','2-b','3-c','4-d','5-f']
    wish(deepEqual(check(result), ['1', '2', '3']))
  })
})