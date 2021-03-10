const  http = require('http')
const cheerio = require('cheerio')
const download = require('download')

const HOST = 'http://www.hyweiapp.cn:5000/ma//change/getByIdKeyCa/?idKeyCa=7d4b40e70c8830c2609a660da172772'

let req = http.request(HOST, {
    
    headers: {
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJsaCIsInRlbmFudElkIjoiMyIsInVzZXJOYW1lIjoi6Iqm6I2fIiwiZXhwIjoxNjE1MjE3MzA0LCJ1c2VyQ29kZSI6ImxoIn0.wvew6yxUiAvw0mcUXFqOHpX1rw5V2zlRoDSE_5RQ2_c",
        "Connection": "keep-alive",
        "Content-Length": "54",
        "Content-Type": "application/json; charset=UTF-8",
        "Host": "www.hyweiapp.cn:5000",
        "Origin": "http://120.79.132.120:8085",
        "Referer": "http://120.79.132.120:8085/",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
    }
}, res => {
    let chunks = []
    res.on('data', chunk => {
        chunks.push(chunk)
    })

    res.on('end', () => {
        const $ = Buffer.concat(chunks).toString('utf-8')
        console.log($)
        // const arrs = Array.prototype.map.call($('#mainContent > #mainBanner > #menu > ul > li > a > img'), item => {
        //     return HOST + encodeURI($(item).attr('src'))
        // })
 
        // Promise.all(arrs.map(url => download(url, 'dist')))
    })
})

req.end()