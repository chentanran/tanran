const conn = require("./db.js");
// const ctime = require("./public.js");
module.exports = {
    // 测试代码
    test: (req, res) => {
        res.send("接口请求成功")
    },
    // 获取全部数据
    getallheros: (req, res) => {
        let select = "select * from heros";
        conn.query(select, (err, data) => {
            if (err) return res.status(500).send({ status: 500, msg: err.message, data: null });
            res.send({ status: 200, msg: "成功", data: data });
        })
    },
    // 添加数据
    addhero: (req, res) => {
        //获取时间
        let date = new Date();
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2,0);
        let day = date.getDate().toString().padStart(2,0);
        let hour = date.getHours().toString().padStart(2,0);
        let minute = date.getMinutes().toString().padStart(2,0);
        let second = date.getSeconds().toString().padStart(2,0);
    
        let ctimes = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
        let hero = req.body;
        hero.ctime = ctimes;
        //添加sql
        let inserthero = "insert into heros set ?";
        conn.query(inserthero, hero, (err, data) => {
            if (err) return res.status(500).send({ status: 500, mes: err.message, data: null });
            res.send({ status: 200, mes: "成功", data: "null" });
        })
    },
    // 获取单个数据
    gethero: (req, res) => {
        let id = req.params.id;
        let selectId = "select * from heros where id=?"
        conn.query(selectId, id, (err, data) => {
            if (err) return res.status(500).send({ status: 500, mes: err.message, data: null });
            res.send({ status: 200, msg: "成功", data: data })
        })
    },
    // 伪删除一个数据
    deletehero: (req, res) => {
        let id = req.params.id;
        let deletes = "update heros set isdel=1 where id=?";
        conn.query(deletes, id, (err, data) => {
            if (err) return res.send({ status: 500, msg: err.message, data: null });
            res.send({ status: 200, msg: "成功" })
        })
    },
    //修改一个数据
    updatehero: (req, res) => {
        let id = req.params.id;
        let datas = req.body;
        let updatehero = "update heros set ? where id=?";
        conn.query(updatehero, [datas, id], (err, data) => {
            if (err) return res.status(500).send({ status: 500, mes: err.message, data: null });
            res.send({ status: 200, msg: "成功", data: null });
        })
    }
}

