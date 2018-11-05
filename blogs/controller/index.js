const conn = require("../db/index.js");//链接数据库
const moment = require("moment"); //格式化时间

module.exports = {
    //登录信息
    login : (req,res) => {
        res.render("user/login.ejs", {});
    },
    //注册信息
    register : (req,res) => {
        res.render("user/register.ejs", {});
    },
    //注册验证
    registers : (req, res) => {
        let body = req.body;
        // 验证前端发送来的数据是否合法
        if(!body.username.trim() || !body.password.trim() || !body.nickname.trim()){
            res.send({status:400, msg:"账户或密码输入错误"})
        }
        //验证用户名是否和数据库中有重复
        const select = "select count(*) as count from blogs where username=?";
        conn.query(select,body.username, (err,data) => {
            if(err) return res.send({status: 400, msg:"数据库链接错误"});
            if(data[0].count !== 0) return res.send({status:400,msg:"账户名不能重复"});
            // 获取时间
            body.ctime = moment().format('YYYY-MM-DD HH:mm:ss');
             //添加到数据库
            const insert = "insert into blogs set ? ";
            conn.query(insert,body,(err,data) => {
                if(err) return res.send({status:501,msg:"数据添加失败"});
                if(data.affectedRows !== 1) return res.send({status:502, msg:"数据添加失败"});
                res.send({status:200,msg:"数据添加成功"});
            })
        })
    
        // res.send({status:200,msg:"成功",data:body});
    },
    //登录验证
    logins :  (req,res) => {
        let body = req.body;
        //查询数据库
        const loginselect = "select * from blogs where username = ? and password = ?";
        conn.query(loginselect, [body.username, body.password], (err, data)=>{
            if(err || data.length == 0) return res.send({status:400,msg:"登录失败,请重新登录"});
            res.send({status:200,msg:"登录成功"});
        })
    }
}