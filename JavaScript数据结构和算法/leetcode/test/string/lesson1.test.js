import lesson1 from '../../code/string/lesson1'

test('lesson1: abc def', () => {
  expect(lesson1('ab\'c def')).toBe('c\'ba fed')
})
