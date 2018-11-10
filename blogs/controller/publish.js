const moment = require("moment");
const conn = require("../db/index.js")
const marked = require("marked");

//跳转到文章页面
 const getArticle = (req,res)=>{
    if(req.session.isLogin){
        res.render("./publish/article.ejs",{user:req.session.user,isLogin:req.session.isLogin});
    }else{
        res.redirect("/");
    }
}
//保存文章到数据库
const postArticle = (req,res)=>{
    //验证数据是否为空
    if(!req.body.title) return res.status(402).send({status:402,msg:"标题为空"});
    //设置参数
    let body = req.body;
    body.ctime = moment().format("YYYY-MM-DD HH:mm:ss");
    // body.author_id = req.session.user.id;
    // console.log(body)
    //添加数据库
    let insert = "insert into article set ?"
    conn.query(insert,body,(err,data)=>{
        if(err) return res.status(500).send({status:500,msg:"文章提交失败,请再尝试"});
        if(data.affectedRows !== 1) return res.status(400).send({status:400,msg:"文章提交失败,请重新尝试"});
        // console.log(data);
       res.send({status:200,msg:"文章提交成功",insertId:data.insertId})
    })
    
}
//内容页
const getContent = (req,res)=>{
    console.log(req.params.id)
    if(!req.session.isLogin || req.params.id == null) return res.redirect("/");
        //根据id查询数据库
        let id = req.params.id;
        
        let select = "select * from article where id = ?";
        conn.query(select,id,(err,data)=>{
            if(err) return res.status(500,"文章内容展示失败,请稍后再试");
            // console.log(data[0].content);
            data[0].content = marked(data[0].content);
            res.render("./publish/content.ejs", {data:data[0],user:req.session.user,isLogin:req.session.isLogin});
        })
}
// 跳转到编辑页
const getEdit = (req,res) => {
    if(!req.session.isLogin) return res.redirect("/"); //登录拦截
    const id = req.params.id; //获取id
    //查询数据库
    const select = "select * from article where id=" + id;
    conn.query(select,(err,data) => {
        if(err || data.length === 0) return res.status(500).send({status:500,msg})
        res.render("./publish/edit.ejs",{data:data[0],user:req.session.user,isLogin:req.session.isLogin})
    })
}
// 文章编辑确认页
const postEdit = (req,res) => {
    if(!req.session.isLogin) return res.redirect("/"); //登录拦截

    const body = req.body;
    body.ctime = moment().format("YYYY-MM-DD HH:mm:ss");
    console.log(body)
    //编辑数据库
    const update = "update article set ? where id = ?";
    conn.query(update, [body,body.id],(err,data)=>{
        if(err || data.affectedRows !== 1) return res.status(500).send({status:500,msg:"编辑失败,请重试"});
        console.log(data);
        res.send({status:200,msg:"编辑成功"})
    }) 
}
//搜索文章功能
const postContent = (req,res) => {
    const body = req.query;
   console.log(body.title);
    //查询数据库
    const select = "select * from article where title=?";
    conn.query(select,body.title,(err,datas)=>{
        if(err) return res.send({status:400,msg:"文章没找到,请输入其他文件名"});
        console.log(datas);
        res.render("./publish/search.ejs",{data:datas,user:req.session.user,isLogin:req.session.isLogin});
    })
   
}

module.exports = {
    getArticle,
    postArticle,
    getContent,
    getEdit,
    postEdit,
    postContent
}

