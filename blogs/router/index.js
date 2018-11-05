const express = require("express");
const router = express.Router();


//首页
router.get("/", (req,res) => {
    res.render("index.ejs", {name:"张三", age:18});
})

module.exports = router;