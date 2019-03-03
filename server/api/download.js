const { Router } = require('express')
const puppeteer = require('puppeteer')
const router = Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded())

router.post('/pdf', function (req, res) {
  ; (async () => {
    console.log(req.body)
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.setRequestInterception(true)
    page.on('request', request => {
      const headers = Object.assign({}, request.headers(), {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'method': 'POST',
      })
      request.continue({ headers })
    })
    await page.goto('http://localhost:3000/print/resume', {
      waitUntil: 'networkidle2'
    })
    await page.screenshot({ path: 'image-spa-top.png', fullPage: true });
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
