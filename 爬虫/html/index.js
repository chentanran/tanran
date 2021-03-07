const  http = require('http')
const cheerio = require('cheerio')
const download = require('download')

const HOST = 'http://www.sznfsq.cn/'

let req = http.request(HOST, res => {
    let chunks = []
    res.on('data', chunk => {
        chunks.push(chunk)
    })

    res.on('end', () => {
        const $ = cheerio.load(Buffer.concat(chunks).toString('utf-8'))

        const arrs = Array.prototype.map.call($('#mainContent > #mainBanner > #menu > ul > li > a > img'), item => {
            return HOST + encodeURI($(item).attr('src'))
        })
 
        Promise.all(arrs.map(url => download(url, 'dist')))
    })
})

req.end()