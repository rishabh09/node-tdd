const request = require('supertest')
const app = require('./app')

describe('Server', () => {
  it('should return `hello world`', () => {
    request(app).get('/').expect('Hello World')
  })
})