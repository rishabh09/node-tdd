const add = (x, y) => x + y

const addObj = (x, y) => Object.assign({}, x, y)

const sqr = (x, cb) => {
  setTimeout(() => { cb(x * x) }, 1000)
  }
const divide = (x, y) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(x/y) }, 1000)
  })
}

module.exports = {
  add, addObj, sqr, divide
}