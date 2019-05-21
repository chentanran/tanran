export default (str) => {
  if (str.length < 1) return []
  let code = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  if (str.length < 2) return code[str].split('')
  let nums = str.split('')
  let combination = []
  nums.forEach(item => {
    combination.push(code[item])
  })

  let sum = (num) => {
    let tmp = []
    for (let i = 0, num1 = num[0]; i < num1.length; i++) {
      for (let j = 0, num2 = num[1]; j < num2.length; j++) {
        tmp.push(`${num1[i]}${num2[j]}`)
      }
    }
    num.splice(0, 2, tmp)
    if (num.length > 1) {
      sum(num)
    } else {
      return tmp
    }
    return num[0]
  }
  return sum(combination)
}
