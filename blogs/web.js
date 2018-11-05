const express = require("express");
const bodyparser = require("body-parser");

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

    res.send({status:200,msg:"成功",data:body});
})

app.listen(3002, () => {
    console.log("http://127.0.0.1:3002")
})