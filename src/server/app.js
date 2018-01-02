const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send("Hello World")
})

app.post('/foo', (req, res) => {
  let {name} = req.body
  let text = 'welcome to darkside'
  if(name === 'master yoda') {
    text = 'use the force'
  }
  res.status(200).send(text)
})

module.exports = app