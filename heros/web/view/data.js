$(function () {
    var heros = {};
    // 获取全部英雄数据
    $.ajax({
        url: "http://127.0.0.1:5001/getallheros",
        type: "get",
        success: function (result) {
            console.log(result)
            heros = result.data;
            if (result.status == 200) {
                let html = template("heros", { data: result.data })
                $("#tbody").html(html);
            }

        }
    })
    //点击添加按钮
    $("#btn").on("click", function () {
        $('.ui.modal')
            .modal('show');
             //添加英雄
    $("#confirm").on("click",function(){
        var heroName = $("[name='heroname']").val().trim();
        let heroGender = $("[name='herogender']").val().trim();

        // console.log(heroGender !== "男")
        if(!heroName){
            alert("输入英雄名为空");
            return;
        }
        if(!heroGender || (heroGender !== "男" && heroGender !== "女")){
            alert("输入英雄性别错误");
            return;
        }

        for(let i = 0; i < heros.length; i++){
            if(heroName == heros[i].name){
                alert("不能添加相同的英熊")
                return;
            }
        }

        $.ajax({
            url: "http://127.0.0.1:5001/addhero",
            type: "post",
            data: {
                name: heroName,
                gender: heroGender
            },
            success: function(res){
               
                if(res.status == 200){
                    alert("添加英雄成功");
                    location.reload();
                }else{
                    alert("添加英雄失败");
                }
            }
        })
    })
    })

    // 删除英雄
    $("#tbody").on("click","#deletes",function(){
        let id = $(this).data("id");

        $.ajax({
            url: "http://127.0.0.1:5001/deletehero/"+id,
            type: "get",
            success: function(res){
                alert("删除英雄成功");
                location.reload();
            }
        })
    })

    //编辑英雄
    var gethero; //保存查询到的英雄数据
    $("#tbody").on("click","#compile",function(){
        
        $('.ui.modal')
        .modal('show');

        $(".header").html("编辑英雄");

        let id = $(this).data("id"); //获取id
        // console.log(id);
        //获取单个英雄数据
        $.ajax({
            url: "http://127.0.0.1:5001/gethero/" + id,
            type: "get",
            async: false,
            success: function(res){
                // console.log(res.data[0])
                gethero = res.data[0];
            }
        })
        //给表单添加数据
        let heroName = $("[name='heroname']").val(gethero.name)[0];
        let heroGender = $("[name='herogender']").val(gethero.gender)[0];
        //添加确定按钮
        $("#confirm").on("click",function(){
            let name = $(heroName).val();
            let gender = $(heroGender).val();
            
            $.ajax({
                url: "http://127.0.0.1:5001/updatehero/" + id,
                type: "post",
                data: {
                    name: name,
                    gender: gender
                },
                success: function(res){
                    if(res.status == 200){
                        alert("修改成功")
                        location.reload();
                    }else{
                        alert("修改失败")
                    }
                }
            })
        })
      
    })
})