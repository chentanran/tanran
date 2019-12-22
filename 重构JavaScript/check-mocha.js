const wish = require('wish')

const check = function(arr) {
  return 'wahha'
}

describe('check', ()=>{
  it('hand pairs', () => {
    var result = ['1-a','2-b','3-c','4-d','5-f']
    wish(check(result) === 'wahha')
  })
})