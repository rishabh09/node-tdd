const {add, addObj, sqr} = require('./example')

it('should add 2 number', () => {
  expect(add(2, 4)).toEqual(6)
})

it('object assignment', () => {
  const data1 = {one: 1};
  const data2 = {two: 2}
  expect(addObj(data1, data2)).toEqual({one: 1, two: 2});
});

it('should handle callback', done => {
  sqr(3, (res) => {
    expect(res).toBe(9)
    done()
  })
})