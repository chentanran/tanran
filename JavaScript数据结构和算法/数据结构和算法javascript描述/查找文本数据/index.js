const fs = require("fs")

fs.readFile("./1.txt", "utf-8", function(error, data) {
  if (error) return console.log("读取文件失败,内容是" + error.message);
  console.log("读取文件成功,内容是" + data);
})