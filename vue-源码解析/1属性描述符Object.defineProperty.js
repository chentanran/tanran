//https://github.com/DMQ/mvvm  
// 剖析vue实现原理


let obj = {
    "firstname": "a",
    "lastname" : "b"
}
/*
属性描述符:
    1.数据描述符
        configurable: 是否可以重新定义
        enumerable: 是否可以枚举  (能否通过 for-in循环遍历)
        value: 初始值
        writable: 是否可以修改属性值
    2.访问描述符
        get: 回调函数,根据其他相关属性动态计算得到当前属性值
        set: 回调函数, 监视当前属性值的变化, 更新其他相关的属性值
*/
    Object.defineProperty(obj, "fullname", {
        get (){
            return this.firstname + "-" + this.lastname;
        },

        set (value){
            const name = value.split("-");
            this.firstname = name[0];
            this.lastname = name[1];
        }
    })
    console.log(obj.fullname);
    obj.firstname = "c";
    obj.lastname = "d";
    console.log(obj.fullname);