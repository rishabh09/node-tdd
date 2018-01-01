const add = (x, y) => x + y

const addObj = (x, y) => Object.assign({}, x, y)

const sqr = (x, cb) => cb(x * x)

module.exports = {
  add, addObj, sqr
}