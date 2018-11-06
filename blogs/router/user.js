const express = require("express");
const ctrl = require("../controller/user.js");
const router = express.Router(); //路由


//登录页
router.get("/login", ctrl.handelGetLogin);
//注册
router.get("/register", ctrl.handelGetRegister);
//注册信息获取
router.post("/register", ctrl.handelPostRegister);

//登录信息获取
router.post("/login",ctrl.handelPostLogin);

module.exports = router;


