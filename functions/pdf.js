const querystring = require('querystring')
const puppeteer = require('puppeteer')
const launchChrome = require('@serverless-chrome/lambda');

exports.handler = async function(event, context, callback) {
  try {
    const req = querystring.parse(event.body)
    const chrome = await launchChrome()
    const browser = await puppeteer.connect({ 
        browserWSEndpoint: (await CDP.Version()).webSocketDebuggerUrl 
    });
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
      req.lastname
    )
    await page.$eval(
      '#firstname',
      (el, val) => {
        el.textContent = val
      },
      req.firstname
    )
    await page.$eval(
      '#email',
      (el, val) => {
        el.textContent = val
      },
      req.email
    )
    const buff = await page.pdf({ format: 'A4' })
    await browser.close()

    callback(null, {
      statusCode: 200,
      headers: {
        'Content-type': 'application/pdf',
        'Content-Length': buff.byteLength,
        'Content-Disposition': 'attachment; filename="resume.pdf"'
      },
      body: buff
    })
  } catch (err) {
    console.error(err);
    return callback(null, JSON.stringify({ result: 'NG' }));
  } finally {
    if (chrome){
      await chrome.kill()
    }
  }
}
