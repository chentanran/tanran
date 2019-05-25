import RepeatMatching from '../../code/regexp/lesson1'

test('RepeatMatching', () => {
  expect(RepeatMatching('abcabc')).toBe(true)
})

test('RepeatMatching2', () => {
  expect(RepeatMatching('abcabcabd')).toBe(false)
})
