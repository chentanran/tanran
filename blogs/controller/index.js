const conn = require("../db/index.js")

module.exports = {
    handleGetIndex(req,res){
        const page = parseInt(req.query.page) || 1;
        // console.log(page)
        const pageSize = 5;

       const select = `select a.id, a.title,a.content,a.ctime,b.nickname from article as a 
                        inner join blogs as b on b.id = a.author_id order by a.ctime desc
                        limit ${page}, 5;
                        select count(*) as count from article;`
        
        conn.query(select,(err,data)=>{
            if(err) return res.redirect("404.ejs")
            const count = data[1][0].count;
            const pageNum = Math.ceil(count / pageSize);
            // console.log(page);
            res.render("index.ejs", {user: req.session.user, 
                                        isLogin: req.session.isLogin,
                                        data:data[0],
                                        pageNum: pageNum,
                                        page: page
                                        });
        })
        
        
    }
}