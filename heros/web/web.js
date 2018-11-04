
const express = require("express");

const app = express();

app.use(express.static("./view"));
app.use("/node_modules", express.static("./node_modules"))
app.use("/semantic", express.static("./semantic"));

app.get("/",(req,res) => {
	res.send("服务器启动成功");
})

app.listen(3001, () => {
	console.log("http://127.0.0.1:3001");
})