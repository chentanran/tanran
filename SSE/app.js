const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.static("public"));

let timer = null;
app.get("/events", function (req, res) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let startTime = Date.now();
  
  const sendEvent = () => {
    // 检查是否已经发送了10秒
    if (Date.now() - startTime >= 10000) {
      clearTimeout(timer); // 清除定时器
      res.write("data:{}\n\n"); // 发送一个特殊事件通知客户端关闭
      res.end(); // 关闭连接
      return;
    }

    const data = { message: "Hello World", timestamp: new Date() };
    res.write(`data:${JSON.stringify(data)}\n\n`); // 每隔2秒发送一次消息

    timer = setTimeout(sendEvent, 2000);
    
  };

  sendEvent();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
