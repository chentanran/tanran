//轮播图
(function(){
   //var banner = document.querySelector(".banner");
   // var ul = banner.children[0];
   // var list = ul.children;
   // var ol = banner.children[1];
   // var imgwidth = banner.offsetWidth;
   //
   // //console.log(banner,ul,list,ol);
   // var index = 0;
   // for(var i = 0; i < list.length; i++){
   //     var li = document.createElement("li");
   //     ol.appendChild(li);
   //     ol.children[i].setAttribute("index",i);
   //     li.onmouseenter = function(){
   //         for(var i = 0; i < list.length; i++){
   //             ol.children[i].style.backgroundColor = "";
   //         }
   //         this.style.backgroundColor = "white";
   //         index = this.getAttribute("index")
   //         animate(ul,-index * imgwidth);
   //     };
   //
   // }
   // ol.children[0].style.backgroundColor = "white";
   // //��������
   // function animate(element, target){
   //     clearInterval(element.timeId);
   //     element.timeId = setInterval(function(){
   //         var current = element.offsetLeft;
   //         var index = 10;
   //         index = current - target < 0 ? index : -index;
   //         current += index;
   //
   //         if(Math.abs(current - target) > Math.abs(index)){
   //             element.style.left = current + "px";
   //         }else{
   //             clearInterval(element.timeId);
   //             element.style.left = target + "px";
   //         }
   //     })
   // }
})();

//轮播图
(function(){
   // var banner = document.querySelector(".banner");
   // var ul = banner.children[0];
   // var li = ul.children;
   // var first = document.querySelector("li:first-child");
   // var last = document.querySelector("li:last-child");
   // ul.appendChild(first.cloneNode(true));
   // ul.insertBefore(last.cloneNode(true),ul.children[0]);
   //
   //
   // var lis = ul.children;
   //
   // var bannerWidth = banner.offsetWidth;
   // //获取ul和li 的 宽度
   // ul.style.width = (lis.length) * bannerWidth + "px";
   // for(var i = 0; i < lis.length; i++){
   //     lis[i].style.width = bannerWidth + "px";
   // }
   // ul.style.left = -bannerWidth + "px";
   // var index = 1;
   //
   // //ol动态生成元素
   // var ol = banner.children[1];
   // for(var i = 0; i < li.length; i++){
   //     var olli = document.createElement("li");
   //     ol.appendChild(olli);
   // }
   // ol.children[0].style.backgroundColor = "white";
   // //监听窗口大小
   // window.onresize = function(){
   //      bannerWidth = banner.offsetWidth;
   //
   //     ul.style.width = (lis.length) * bannerWidth + "px";
   //     for(var i = 0; i < lis.length; i++){
   //         lis[i].style.width = bannerWidth + "px";
   //     }
   //     ul.style.left = -index * bannerWidth + "px";
   // };
   // //自动轮播
   // function time(){
   //         index++;
   //         ul.style.transition = "left 1s";
   //         ul.style.left = -index * bannerWidth + "px";
   //
   //         setTimeout(function(){
   //             if(index == lis.length-1){
   //                 index = 1;
   //                 ul.style.transition = "none";
   //                 //ul.style.transition = "left .5s";
   //                 ul.style.left = -index * bannerWidth + "px";
   //             }
   //         },1000);
   //         //小圆圈跟着一起动
   //         for(var i = 0; i <  ol.children.length; i++){
   //             ol.children[i].style.backgroundColor = "";
   //         }
   //         //console.log(index);
   //         if(index == 9){
   //             ol.children[0].style.backgroundColor = "white";
   //         }else{
   //             ol.children[index-1].style.backgroundColor = "white";
   //         }
   // }
   //var timeId = setInterval(time,2000);
   // //滑动屏幕
   // var touchX,moveX,differenceX;  //移动距离值
   // var target = 0;
   // //按压开始
   // banner.addEventListener("touchstart",function(e){
   //     clearInterval(timeId);
   //     //console.log(e);
   //     touchX = e.targetTouches[0].clientX;
   // });
   //
   // //移动
   // banner.addEventListener("touchmove",function(e){
   //         // console.log(-(lis.length-1)*bannerWidth)
   //         moveX = e.targetTouches[0].clientX;
   //
   //         differenceX = moveX - touchX;
   //         target = -index * bannerWidth + differenceX;
   //         // console.log(target);
   //          ul.style.transition = "none";
   //         if(target > 0 || target < -(lis.length-1)*bannerWidth){
   //             return;
   //         }
   //
   //         ul.style.left = -index * bannerWidth + differenceX + "px";
   //
   //     e.preventDefault();
   //
   // });
   // //按压抬起
   // banner.addEventListener("touchend",function(){
   //     console.log(target);
   //     if(target > 0){
   //         index = lis.length-2;
   //         ul.style.transition = "none";
   //         ul.style.left = -(lis.length-1)*bannerWidth + "px";
   //         timeId = setInterval(time, 2000);
   //         return;
   //     }else if(target < -(lis.length-1)*bannerWidth){
   //         ul.style.transition = "none";
   //         index = 0;
   //         ul.style.left = -index * bannerWidth + "px";
   //        timeId = setInterval(time, 2000);
   //         return;
   //     }
   //     //滑动图片
   //     if(Math.abs(differenceX) > 100){
   //         if(differenceX >  0){
   //             index--;
   //             ul.style.transition = "left .5s";
   //             ul.style.left = -index * bannerWidth + "px";
   //         }else{
   //             index++;
   //             ul.style.transition = "left .5s";
   //             ul.style.left = -index * bannerWidth + "px";
   //         }
   //     }else if (Math.abs(differenceX) > 0){
   //         ul.style.transition = "left .5s";
   //         ul.style.left = -index * bannerWidth + "px";
   //     }
   //     differenceX = 0;
   //     touchX = 0;
   //     moveX = 0;
   //
   //      timeId = setInterval(time, 2000);
   //
   // });
   // //过渡效果执行完毕触发此事件
   // banner.addEventListener("webkitTransitionEnd",function(){
   //
   //    //判断图片是不是最后一张或第一张
   //     if(index == ul.children.length - 1){
   //         index = 1;
   //         ul.style.transition = "none";
   //         ul.style.left = -index * bannerWidth + "px";
   //     }else if(index == 0){
   //         index = ul.children.length - 2;
   //         ul.style.transition = "none";
   //         ul.style.left = -index * bannerWidth + "px";
   //     }
   //     differenceX = 0;
   //     touchX = 0;
   //     moveX = 0;
   //     //当滑动屏幕时,小圆圈跟着一起动
   //     for(var i = 0; i <  ol.children.length; i++){
   //         ol.children[i].style.backgroundColor = "";
   //     }
   //     ol.children[index-1].style.backgroundColor = "white";
   //
   //
    })

//})();
//轮播图 zepto
$(function(){
    var banner = $(".banner");
     var ul = banner.find("ul:first-of-type");
     var li = ul.find("li");
     var bannerWidth = $(banner).width();
     var first = ul.find("li:first-of-type");
     var last = ul.find("li:last-of-type");
     //克隆
     ul.append(first.clone("true"));
     last.clone("true").insertBefore($(li).eq(0));
     //给ul和li从新计算长度
     var lis = ul.find("li");
     var length = lis.length;
     $(ul).width(length * bannerWidth);
     //$(lis).width(bannerWidth);
     lis.each(function(index,value){
        $(lis[index]).width(bannerWidth);
     });
     ul.css("left",-bannerWidth);
     //创建olli
     var ol = banner.find("ol:first-of-type");
     // console.log(ol)
     for(var i = 0; i < li.length; i++){
       ol.append("<li></li>");
     }
     ol.find("li:first-of-type").css("background","white");
     //让ul自动轮播


    function animation(){

        ul.animate({left: -index * bannerWidth}, 500, 'ease-out',function(){
            if(index == lis.length - 1){
                index = 1;
            }else if(index == 0){
                index = list.length - 2;
            }
            //ul.css("left",-index * bannerWidth);
            ol.find("li").eq(index-1).css("background","white").siblings("li").css("background","");
            if(flag){
                timeId = setInterval(function(){
                    index++;
                    animation();
                    flag = false;
                },2000);
            }

        })
    }
    var index = 1;
    var flag = true;
     var timeId = setInterval(function(){
         index++;
         ////console.log(ul);
         ////animate(properties, [duration, [easing, [function(){ ... }]]])
         //
            flag = false;
            animation();
     },2000);

      $(ul).on("swipeLeft",function(){
        clearInterval(timeId);
        index++;
          flag = true;
        animation();
      });
      $(ul).on("swipeRight",function(){
        clearInterval(timeId);
          //console.log(timeId);
         index--;
          flag = true;
          animation();
       })

});
//轮播图4
$(function(){
  //var bannerWidth = $(".banner").width();
  //var ul = $(".banner").find("ul").eq(0);
  //
  //var first = ul.find("li").eq(0);
  //var last = ul.find("li:last-of-type")
  // ul.append(ul.find("li:first-of-type").clone("true"));
  //  last.clone("true").insertBefore(first);
  //
  //  ul.width(ul.find("li") * bannerWidth);
  //  ul.find("li").width(bannerWidth);
  //
  //  ul.css("left",-bannerWidth);
  //
  //  var count = ul.find("li").length;
  //
  //  var index = 1;
  //  var flag = true;
  //  function move(){
  //    ul.animate({"left":-index * bannerWidth},500,function(){
  //        if(index == count - 1){
  //          index = 1;
  //        }else if(index == 0){
  //          index = count - 2;
  //        }
  //        ul.css("left",-index*bannerWidth);
  //        if (flag) {
  //          setInterval(timeId,1000);
  //        }
  //  })
  //  }
  //
  //
  //  var timeId = setInterval(function(){
  //    index++;
  //    flag = false;
  //      move();
  //
  //  },1000);
  //
  //  $(ul).on("swipeLeft",function(e){
  //      clearInterval(timeId);
  //      index++;
  //      flag = true;
  //      move();
  //      e.preventDefault();
  //  });
  //  $(ul).on("swipeRight",function(){
  //      clearInterval(timeId);
  //      flag = true;
  //      index--;
  //      move();
  //      e.preventDefault();
  //  });
  //

});
   
//顶部滑块
(function(){
    var top = document.querySelector(".top");
    var bHeight = document.querySelector(".banner").offsetHeight;

    window.onscroll = function(){
        var scroll = window.scrollY;
       var opacity = scroll / bHeight;
       if(opacity <= 1){
           top.style.backgroundColor = "rgba(255,0,0,"+opacity+")";
       }
    }
})();

//倒计时
(function(){
    var time = document.querySelector(".time");
    var targetTime = 5000;
    setTimeout(times,0);
    var timeId = setInterval(times,1000);

    function times(){
        targetTime--;
        if(targetTime == 0){
            clearInterval(timeId);
            return;
        }
        var hour = Math.floor(targetTime / 3600);
        var minute = Math.floor(targetTime / 60 % 60);
        var second = Math.floor(targetTime % 60);
        //console.log(hour +"..."+minute+"..."+second);
        time.children[0].innerText = Math.floor(hour / 10);
        time.children[1].innerText = Math.floor(hour % 10);
        time.children[3].innerText = Math.floor(minute / 10);
        time.children[4].innerText = Math.floor(minute % 10);
        time.children[6].innerText = Math.floor(second / 10);
        time.children[7].innerText = Math.floor(second % 10);
    }
})();