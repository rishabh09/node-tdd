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

  it('should return `use the force`', done => {
    request(app).post('/foo').send({ name: 'master yoda'}).then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.text).toBe('use the force')
      done()
    })
  })

  it('should return `welcome to darkside`', done => {
    request(app).post('/foo').send({ name: 'luke skywalker'}).then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.text).toBe('welcome to darkside')
      done()
    })
  })

  it('should return 404 status code', done => {
    request(app).get('/bar').then(res => {
      expect(res.statusCode).toBe(404)
      done()
    })
  })

  it('should return json from api', done => {
    request(app).get('/api/v1').then(res => {
      const data = res.body
      expect(data).toEqual({'foo':'bar'})
      expect(res.statusCode).toBe(200)
      done()
    })
  })
})