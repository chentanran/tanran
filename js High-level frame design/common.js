	//获取标签名
	var getTag = function(tag,result){
		result = result || [];
		result.push.apply(result,document.getElementsByTagName(tag));
		return result;
	}
	//获取类名
	var getClass = function(className,result){
		result = result || [];
		if (document.getElementsByClassName) {
			result.push.apply(result,document.getElementsByClassName(className));
		}else{
			var tempArr = getTag("*");
			each(tempArr,function(i,v){
				if((" "+v.className+" ").indexOf(" "+className+" ") != -1){
					result.push(v);
				}
			})
		}
		return result;
		
	}
	// 获取id名
	var getId = function(id,result){
		result = result || [];
		result.push(document.getElementById(id));
		return result;
	}
	// 获取任意元素
	var get = function(tag,result){
		result = result || [];
		var quickScreen = /^(?:\.([\w-]+)|#([\w-]+)|([\w+]+)|([\*]))$/;
		var m = quickScreen.exec(tag);

		if(m[1]){
			result = getClass(m[1],result);
			return result;
		}else if(m[2]){
			result = getId(m[2],result);
			return result;
		}else if(m[3]){
			result = getTag(m[3],result);
			return result;
		}else if(m[4]){
			result = getTag(m[4],result);
			return result;
		}
	}
	//each循环
	var each = function(arr,fn){
		for(var i = 0; i < arr.length; i++){
			if(fn.call(arr[i],i,arr[i]) == false){
				break;
			}
		}
	}
