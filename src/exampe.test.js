const {add, addObj} = require('./example')

it('should add 2 number', () => {
  expect(add(2, 4)).toEqual(6)
})

test('object assignment', () => {
  const data1 = {one: 1};
  const data2 = {two: 2}
  expect(addObj(data1, data2)).toEqual({one: 1, two: 2});
});
