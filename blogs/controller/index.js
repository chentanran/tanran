
module.exports = {
    handleGetIndex(req,res){
        res.render("index.ejs", {name:"张三", age:18});
    }
}