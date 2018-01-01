const {add} = require('./example')

it('should add 2 number', () => {
  expect(add(2, 4)).toEqual(6)
})