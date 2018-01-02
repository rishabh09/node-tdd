const request = require('supertest')
const app = require('./app')

describe('Server', () => {
  it('should return `hello world`', done => {
    request(app).get('/').then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.text).toBe('Hello World')
      done()
    })
  })
})