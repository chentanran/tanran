const express = require("express");

const router = express.Router();

const ctrl = require("./controller.js");

//测试
router.get("/", ctrl.test);
//获取全部数据
router.get("/getallheros", ctrl.getallheros);
// 添加数据
router.post("/addhero",ctrl.addhero);
//获取单个英雄的数据
router.get("/gethero/:id",ctrl.gethero);
// 伪删除数据
router.get("/deletehero/:id",ctrl.deletehero);
// 修改数据
router.post("/updatehero/:id",ctrl.updatehero);

module.exports = router;