//开发环境 node 服务启动入口

//公用配置文件，定义一些通用的数据
const proConfig = require('../../src/share/pro-config');

//node server port
const nodeServerPort = proConfig.nodeServerPort;


//启动前检查端口是否占用，杀掉占用端口的进程
require('./free-port')(nodeServerPort);

//引入打包后的入口文件,这个入口我们在 webpack 配置中已设置好
require('../../dist/server/app');