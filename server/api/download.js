const { Router } = require('express')
const router = Router()

router.use(function timeLog(req, res, next) {
  next()
})

router.post('/pdf', function(req, res) {
  // res.download()
  res.send('pdf')
})

module.exports = router
