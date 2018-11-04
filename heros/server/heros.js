const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended: false}));

const cors = require('cors');
app.use(cors());

const router = require("./router.js")
app.use(router);

app.listen(5001,()=>{
    console.log("http://127.0.0.1:5001")
})