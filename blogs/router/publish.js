const express = require("express");

const router = express.Router();//创建路由模块

//引入文件
const ctrl = require("../controller/publish.js")
//跳转到文章页面
router.get("/publish/article", ctrl.getArticle);

//保存文章到数据库
router.post("/publish/article", ctrl.postArticle);

//文章内容页
router.get("/publish/content/:id", ctrl.getContent);

//文字编辑页
router.get("/publish/edit/:id", ctrl.getEdit);

//文章编辑确认页
router.post("/publish/edit",ctrl.postEdit);

//搜索文章功能
router.get("/publish/search",ctrl.postContent);

module.exports = router;

