const { Router } = require('express')
const puppeteer = require('puppeteer')
const router = Router()

router.use(function timeLog(req, res, next) {
  next()
})

router.post('/pdf', function(req, res) {
  ;(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://news.ycombinator.com', {
      waitUntil: 'networkidle2'
    })
    const buff = await page.pdf({ format: 'A4' })
    await browser.close()

    res.type('application/pdf')
    res.set('Content-Length', buff.byteLength)
    res.set('Content-Disposition', 'attachment; filename="resume.pdf"')
    res.send(buff)
    res.status(200)
    res.end()
  })()
})

module.exports = router
