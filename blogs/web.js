const express = require("express");
const bodyparser = require("body-parser");


const app = express();
//注册中间件
app.use(bodyparser.urlencoded({extended: false}));

app.set("view engine", "ejs");
app.set("views", "./view");
//静态资源托管
app.use("/node_modules", express.static("./node_modules"));
// app.use("/router",express.static("/router"));
//首页
const indexRouter = require("./router/index.js");
app.use(indexRouter);
//登录和注册界面
const userRouter = require("./router/user.js");
app.use(userRouter)

app.listen(80, () => {
    console.log("http://127.0.0.1")
})