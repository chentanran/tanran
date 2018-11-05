const express = require("express");
const bodyparser = require("body-parser");
const mysql = require("mysql");
const moment = require("moment");

const conn = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "root",
    database : "node"
})

const app = express();
//注册中间件
app.use(bodyparser.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.set("views", "./view");
//静态资源托管
app.use("/node_modules", express.static("./node_modules"));
//首页
app.get("/", (req,res) => {
    res.render("index.ejs", {name:"张三", age:18});
})
//登录页
app.get("/login", (req,res) => {
    res.render("user/login.ejs", {});
})
//注册
app.get("/register", (req,res) => {
    res.render("user/register.ejs", {});
})
//注册信息获取
app.post("/register", (req, res) => {
    let body = req.body;
    // 验证前端发送来的数据是否合法
    if(!body.username.trim() || !body.password.trim() || !body.nickname.trim()){
        res.send({status:500, msg:"账户或密码输入错误"})
    }
    //验证用户名是否和数据库中有重复
    const select = "select count(*) as count from blogs where username=?";
    conn.query(select,body.username, (err,data) => {
        if(err) res.send({status: 501, msg:"数据库链接错误"});
        if(data[0].count !== 0) res.send({status:502,msg:"账户名不能重复"});
        //添加到数据库
        body.ctime = moment().format('YYYY-MM-DD h:mm:ss');
       
        const insert = "insert into blogs set ? ";
        conn.query(insert,body,(err,data) => {
            if(err) res.send({status:501,msg:"数据添加失败"})
            if(data.affectedRows !== 1) res.send({status:502, msg:"数据添加失败"})
            console.log(data);
            res.send({status:200,msg:"数据添加成功"})
        })
    })

    // res.send({status:200,msg:"成功",data:body});
})

app.listen(80, () => {
    console.log("http://127.0.0.1")
})