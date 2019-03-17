const { Router } = require('express')
const puppeteer = require('puppeteer')
const router = Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded())

router.post('/pdf', function(req, res) {
  ;(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const domain =
      process.env.NODE_ENV === 'production'
        ? 'https://dazzling-meitner-437a0b.netlify.com'
        : 'http://localhost:3000'
    await page.goto(domain + '/print/resume', {
      waitUntil: 'networkidle2'
    })
    await page.$eval(
      '#lastname',
      (el, val) => {
        el.textContent = val
      },
      req.body.lastname
    )
    await page.$eval(
      '#firstname',
      (el, val) => {
        el.textContent = val
      },
      req.body.firstname
    )
    await page.$eval(
      '#email',
      (el, val) => {
        el.textContent = val
      },
      req.body.email
    )
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
