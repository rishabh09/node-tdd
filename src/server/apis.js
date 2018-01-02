const express = require('express')
const router = express.Router()

router.get('/v1', (req, res) => {
  res.json({
    "foo": "bar"
  })
})

module.exports = router
