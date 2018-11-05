const express = require("express");
const router = express.Router(); //路由




const ctrl = require("../controller/index.js");


//登录页
router.get("/login", ctrl.login);
//注册
router.get("/register", ctrl.register);
//注册信息获取
router.post("/register", ctrl.registers);

//登录信息获取
router.post("/login",ctrl.logins);

module.exports = router;


