const express = require("express");
const bodyparser = require("body-parser");
const fs = require("fs");
const path = require("path");
const session = require("express-session");


const app = express();
//session注册中间件
app.use(session({
    secret: 'keyboard cat',
    name: "tuzi",
    resave: false,
    saveUninitialized: false,
  }))
//注册中间件
app.use(bodyparser.urlencoded({extended: false}));

app.set("view engine", "ejs");
app.set("views", "./view");
//静态资源托管
app.use("/node_modules", express.static("./node_modules"));

// //首页
// const indexRouter = require("./router/index.js");
// app.use(indexRouter);
// //登录和注册界面
// const userRouter = require("./router/user.js");
// app.use(userRouter)

//循环遍历文件名
fs.readdir(path.join(__dirname,"router"),(err,files) => {
    if(err) return console.log(err.message);
    for(let i = 0; i < files.length; i++){
        let filesRouter = require("./router/" + files[i]);
        // console.log(filesRouter)
        app.use(filesRouter);
    }
})

app.listen(80, () => {
    console.log("http://127.0.0.1")
})