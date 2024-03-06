//引入Index 组件
import React from "react";
//引入index 组件
import Index from "../../client/pages/index";
import { renderToString } from "react-dom/server";

export default (ctx, next) => {
  const html = renderToString(<Index />);
  ctx.body = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>my react ssr</title>
    </head>
    <body>
        <div id="root">
        ${html} <span>测试内容</span>//增加了span 标签
        </div>
    </body>
    </html>
    <script type="text/javascript"  src="index.js"></script>//这里绑定了 index.js代码，浏览器会下载后执行
    `;

  return next();
};
