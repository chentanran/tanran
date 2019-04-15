const express = require('express')
const axios = require('axios')


const app = express()
app.all('*',function(req,res,next){
 res.header('Access-Control-Allow-Origin','*');
 next();
 });
app.get('/jsonp', (req, res) => {
    console.log(req.query.cb)
    // jsonp后台返回的就是一个函数调用
    // callback('这格桑')
    var obj = JSON.stringify({
        name: '张三'
    })
    res.jsonp(obj);
    // res.send(`${req.query.cb}(${obj})`)
})
app.get('/test', (req, res) => {
//    console.log(88888888)
    
    res.send({
        s: '成功'
    })
})

app.get('/proxy', (req, res) => {
    var searchKey = '黄金'
    var url1 = `http://v.juhe.cn/dream/query?key=a3bad6b379879791d5de72c98ea9e88d&q=${encodeURIComponent(searchKey)}`
    axios(url1)
    .then(result => {
        res.send({err: 0, data: result.data.result})
    })
})

app.listen(8789, () => {
    console.log(`http://127.0.0.1:8789 启动了`);
});