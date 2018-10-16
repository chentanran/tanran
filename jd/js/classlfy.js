// 侧边栏划上滑下
(function(){
	// var nav = document.querySelector(".cl_nav");
	
	// var ul = nav.children[0];
	// var navHeight = nav.offsetHeight;
	// var ulHeight = ul.offsetHeight;
	// var distance = navHeight - ulHeight;

	// var touchY,moveY,differenceY,recordY=0;
	// //手指触发
	// nav.addEventListener("touchstart",function(e){
	// 	touchY = e.targetTouches[0].clientY;
		
	// })
	// //手指移动
	// nav.addEventListener("touchmove",function(e){
	// 	moveY = e.targetTouches[0].clientY;

	// 	if(parseInt(ul.style.top) > 100 || parseInt(ul.style.top) < distance + -100){
	// 		return;
	// 	}

	// 	differenceY = moveY - touchY;

	// 	ul.style.transition = "none";
	// 	ul.style.top = differenceY + recordY + "px";
	// })
	// //手指离开
	// nav.addEventListener("touchend",function(){
	// 	// console.log(parseInt(ul.style.top))
	// 	if(parseInt(ul.style.top) > 0){
	// 		recordY = 0;
	// 		ul.style.transition = "top .5s";
	// 		ul.style.top = recordY + "px";
	// 	}else if(parseInt(ul.style.top) < (distance)){
	// 		// console.log(parseInt(ul.style.top));
	// 		recordY = distance;
	// 		ul.style.transition = "top .5s";
	// 		ul.style.top = recordY + "px";
	// 	}else{
	// 		recordY += differenceY;
	// 	// console.log(recordY);
	// 	}

		

	// })

})();
//侧边栏划上划下
(function(){
	//创建一个点击事件 原生tap点击
	var touch = {
	tap: function(ele,callback){
	if(!ele || typeof ele !== "object"){
		return;
	}
	var touchX,touchY,endX,endY,time1,time2;
	ele.addEventListener("touchstart",function(e){
		touchX = e.targetTouches[0].clientX;
		touchY = e.targetTouches[0].clientY;
		 time1 = Date.now();
	})
	ele.addEventListener("touchend",function(e){
		//判断有几个手指
		if(e.changedTouches[0].target.length > 1){
			return;
		}
		endX = e.changedTouches[0].clientX;
		endY = e.changedTouches[0].clientY;
		 time2 = Date.now();
		 //判断间隔时间
		if(Math.abs(time2 - time1) > 200){
			// console.log("time");
			return;
		}
		//判断移动距离
		if(Math.abs(endX - touchX) < 5 && Math.abs(endY - touchY) < 5){
			callback && callback(e);
		}
	})
  }
	}


	var nav = document.querySelector(".cl_nav");
	var ul = nav.children[0];
	var lis = ul.children;
	var liHeight = ul.children[0].offsetHeight;
	// console.log(lis);
	//获取最大拉伸高度
	var max = nav.offsetHeight - ul.offsetHeight;


	var touchY,moveY,differenceY,addY=0;
	ul.addEventListener("touchstart",function(e){
		touchY = e.targetTouches[0].clientY;
	})
	ul.addEventListener("touchmove",function(e){
		moveY = e.targetTouches[0].clientY;

		differenceY = moveY - touchY;
		//移动距离大于设定的最大值就结束函数
		if(differenceY + addY > 100 || differenceY + addY < (max -100)){
			return;
		}
		ul.style.transition = "none";
		ul.style.top = differenceY +addY+ "px";
	})
	ul.addEventListener("touchend",function(){
		if((differenceY + addY) > 0){
			addY = 0;
			ul.style.transition = "top .5s";
			ul.style.top = 0+ "px";
		}else if((differenceY + addY) < max){
			addY = max;
			ul.style.transition = "top .5s";
			ul.style.top = max+ "px";
		}else{
			addY += differenceY;
		}

		
	})

	touch.tap(ul,function(e){
			//排他
			for(var i = 0; i < lis.length; i++){
				lis[i].classList.remove("active");
				lis[i].index = i;
			}
			e.target.parentNode.classList.add("active");

			var etar = -(e.target.parentNode.index * liHeight);

			if(etar < max){
				etar = max;
			}

			addY = etar;
			ul.style.transition = "top .5s";
			ul.style.top = etar + "px";

		})

	// 插件的使用
// 	if ('addEventListener' in document) {
// 	document.addEventListener('DOMContentLoaded', function() {
// 		FastClick.attach(document.body);
// 	}, false);
// }
// 	ul.addEventListener("click",function(e){
// 		// 排他
// 			for(var i = 0; i < lis.length; i++){
// 				lis[i].classList.remove("active");
// 				lis[i].index = i;
// 			}
// 			e.target.parentNode.classList.add("active");

// 			var etar = -(e.target.parentNode.index * liHeight);

// 			if(etar < max){
// 				etar = max;
// 			}

// 			addY = etar;
// 			ul.style.transition = "top .5s";
// 			ul.style.top = etar + "px";
// 	})
// var nav = document.querySelector(".cl_nav");
// var ul = nav.children[0];
// touch.tap(ul,function(){
// 	console.log(111);
// });
})();


	var list = document.querySelector(".cl_current_right_clothes_list");
	var myscroll;
	myscroll = new IScroll(list,{
			mouseWheel: true,
			scrollbars: true
    }
	);
	// function loaded(){
		
	// }
	// window.addEventListener("DOMContentLoaded",loaded,false);


