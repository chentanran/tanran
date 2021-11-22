import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route} from 'react-router';
import App from '../../client/router/index';
import routeList from '../../client/router/route-config';

export default (ctx,next) => {
    
    //获得请求的 path
    const path = ctx.request.path;
    console.log('-------------------')
    //渲染组件为 html 字符串
    const html = renderToString(<StaticRouter location={path}>
          <App routeList={routeList}></App>
    </StaticRouter>);
    ctx.body=`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>my react ssr</title>
        </head>
        <body>
            <div id="root">
            ${html}
                <div>22222222222222222222222</div> 
            </div>
        </body>
        </html>
        </body>
        <script type="text/javascript"  src="index.js"></script>
    `;

    return next();
}