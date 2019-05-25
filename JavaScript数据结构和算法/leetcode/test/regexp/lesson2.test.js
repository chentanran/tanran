import regMatch from '../../code/regexp/lesson2'

test('regMatch', () => {
  expect(regMatch('abccddee', 'abc*d*e*')).toBe(true)
})

test('regMatch2', () => {
  expect(regMatch('abcdefg', '.*')).toBe(true)
})
