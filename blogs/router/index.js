const express = require("express");

const ctrl = require("../controller/index.js");
const router = express.Router();


//首页
router.get("/", ctrl.handleGetIndex);



module.exports = router;