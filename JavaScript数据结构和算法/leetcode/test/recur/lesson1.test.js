import ipStr from '../../code/recur/lesson1'

test('ipStr', () => {
  expect(ipStr('12212212212')).toEqual(['12.212.212.212', '122.12.212.212', '122.122.12.212', '122.122.122.12'])
})
