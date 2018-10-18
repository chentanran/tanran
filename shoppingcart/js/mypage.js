
$(function(){
    var flag = false;
    $(".fixed").click(function(){
        $.fn.fullpage.moveSectionDown();
    });
    $('#fullpage').fullpage({
        navigation:true, // 设置侧边导航栏
        loopBottom:true, //当页面到底部时 ,继续向下滚动回到顶部
        //进入下一页触发

        afterLoad:function(anchorLink, index) {

            if(index == 2){
                //第二屏搜索框

                $(".search").show().animate({"right":"339px"},2000,"easeInOutBounce",function(){
                    //文字显示
                    $(".search-sofa").animate({"opacity":"1"},1500,function(){
                        $(".search").hide();
                        //搜索框显示
                        $(".search2").show().animate({"left":"650px","top":"45px","height":"25px"},2000);
                        //沙发显示
                        $(".goods").show(500).animate({"height":"218px"},2500,function(){
                            $(".fixed").fadeIn();
                        });
                        //顶部文字显示和影藏
                        $(".words-01").hide(1000);
                        $(".words-02").animate({"opacity":1},1500);
                    });

                });
            }
            //第四屏到第五屏
            if(index == 5){
                $(".sofa5").animate({"bottom":100,"opacity":1},2000,function(){
                    $(".hand5").animate({"bottom":0},2000,function(){
                        $(".mouse1-a").animate({"opacity":1},1000,function(){
                            $(".pupy5").animate({"top":100},2000);
                            $(".words5").css("display","block").addClass("words5-a");
                            $(".fixed").fadeIn();
                        });
                    })
                });

            }
            //第六屏到第七屏
            if(index == 7){
                $(".star7").animate({"width":100},2000,function(){
                    $(".good7").animate({"opacity":1},2000,function(){
                        $(".fixed").fadeIn();
                    });
                });
            }
            //第七屏到第八屏
            var k =  document.body.clientHeight;
            if(index == 8){
                $(document).mousemove(function(e){
                    var a = k - 449;
                    var x = e.pageX;
                    var y = e.pageY;
                    if(y < a){
                        y = a;
                    }
                   $(".hand8").css({"left":x+10,"top":y+10});
                })
                $(".btn8").hover(function(){
                    $(".btn8-b").toggle();
                })
                $(".click8").click(function(){
                    $.fn.fullpage.moveTo(1);
                    $("img, .move").attr("style","");
                    $(".section6").css("backgroundPositionX","20%");
                })
            }
        },
        //将要离开本页触发
        onLeave:function(index,nextIndex, direction){
            $(".fixed").fadeOut();
            //第二屏到第三屏
            if(index == 2 && nextIndex == 3 ){
                //alert(index, nextIndex);
                $(".curtain").animate({"opacity":1},500);
                $(".shirt1").animate({"top":600, "left":-160,"height":166,"width":207},1000,function(){
                    $(".img1-a").animate({"opacity":1},1000,function(){
                        $(".btn1-a").animate({"opacity":1},1000,function(){
                            $(".fixed").fadeIn();
                        });
                    })
                });
            }
            //第三屏到第四屏
            if(index == 3 && nextIndex == 4){
                $(".shirt1").hide();
                $(".t1f").animate({"opacity":1,"top":920,"left":790,"z-index":"-10"},2000,function(){
                    $(this).hide();
                    $(".words-4-a").animate({"opacity":1});
                    $(".t1f4").animate({"opacity":1});
                    $(".car").animate({"left": 1500},3000,"easeInElastic",function(){
                        $(".note").animate({"opacity":1},1000);
                        $(".note-img").animate({"opacity":1},2000,"easeInOutBack",function(){
                            $(".fixed").fadeIn();
                        });
                    });
                });
            }
            //第五屏到第六屏
            if(index == 5 && nextIndex == 6){
                $(".sofa5").animate({"bottom":"-130px","left":"520px","z-index":10,"height":50},1000,function(){
                    $(this).hide();
                });
                $(".boxs6").animate({"left":500},1000,function(){
                    $(this).animate({"top":500},1000,function(){
                        $(this).hide();
                        $(".address6").animate({"opacity":1},1000);
                        $(".sofago6").animate({"opacity":1},1000);
                        $(".section6").animate({"backgroundPositionX":"100%"},2000,function(){
                            $(".boy6").animate({"height":305,"bottom":113,"left":"400px"},1000,function(){
                                $(this).animate({"left":500},1000,function(){
                                    $(".opendoor6").animate({"opacity":1},500,function(){
                                        $(".girl6").animate({"z-index":1000,"opacity":1,"height":294},1000,function(){
                                            $(this).animate({"right":"30%"},1000);
                                            $(".message6").animate({"opacity":1},1000,function(){
                                                $(".fixed").fadeIn();
                                            });
                                        });
                                    })
                                });
                            });
                        })
                    });
                });
            }

        }
    });

});

