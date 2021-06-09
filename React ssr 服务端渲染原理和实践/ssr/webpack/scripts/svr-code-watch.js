const webpack  = require('webpack');
const config =  require('../webpack.server.config');
const constantCode = require('./constant');
config.mode='development';//设置编译模式


//编译对象
const compiler = webpack(config);

const watching = compiler.watch({
    aggregateTimeout: 300, // 类似节流功能,聚合多个更改一起构建
    ignored: /node_modules/, //排除文件
    poll: 2000, //轮训的方式检查变更 单位：秒  ,如果监听没生效，可以试试这个选项.
}, (err, stats) => {
   
    let json = stats.toJson("minimal");
    if(json.errors){
        json.errors.forEach(item => {
            console.log(item);
        });
    }
    if (json.warnings) {
        json.warnings.forEach(item => {
            console.log(item);
        });
    }

    //定一个常量，编译完成后 通知主进程来重启node 服务，主进程通过此标志来进行判断是否重启
    console.log(constantCode.SVRCODECOMPLETED);
});

compiler.hooks.done.tap('done',function (data) {
    console.log('\n svr code done' ); //编译完成动作
});

//收到退出信号 退出自身进程
process.stdin.on('data', function (data) {
    if (data.toString() === 'exit') {
        process.exit();
    }
});