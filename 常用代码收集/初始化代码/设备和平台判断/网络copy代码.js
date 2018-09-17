//移动端判断 安卓、苹果、ipad

	//avigator是HTML中的内置对象，包含浏览器的信息；
	//userAgent是navigator的属性方法，可以返回由客户机发送服务器的头部的值，作用其实就是就是返回当前用户所使用的是什么浏览器
	//toLowerCase(）是将转换为小写。
var ua = navigator.userAgent.toLowerCase();  
if (/android|adr/gi.test(ua)) {  
      // 安卓  
         
}else if(/\(i[^;]+;( U;)? CPU.+Mac OS X/gi.test(ua)){  
      //苹果  
         
}else if(/iPad/gi.test(ua)){  
      //ipad  
   
}


//面向对象封装 判断是否是微信============自己写的
function IsWeiXin(){
	this.ua = navigator.userAgent.toLowerCase();
	this.ua1 = navigator.userAgent;
}
IsWeiXin.prototype.cons = function(fn){
	// alert(`${this.ua}==========${this.ua1}`);
	if(this.ua.match(/MicroMessenger/i)=='micromessenger'){
		fn();
	}
}

//有些软件是内置的浏览器，比如新浪微博、腾讯QQ（非QQ浏览器）和微信
//（微信在6.0.2版本的时候做了改动，微信的分享功能在新版本跟以前不一样了）为了兼容版本，要做以下操作：
//注：新浪微博为1，QQ客户端为2，微信低于6.0.2版本为3，高于6.0.2版本为4，其他为0。

if(ua.match(/weibo/i) == "weibo"){  
    console.log(1);
}else if(ua.indexOf('qq/')!= -1){  
    console.log(2);
}else if(ua.match(/MicroMessenger/i)=="micromessenger"){  
var v_weixin = ua.split('micromessenger')[1];  
    v_weixin = v_weixin.substring(1,6);  
    v_weixin = v_weixin.split(' ')[0];  
if(v_weixin.split('.').length == 2){  
    v_weixin = v_weixin + '.0';  
}  
if(v_weixin < '6.0.2'){  
    console.log(3);
}else{  
    console.log(4);  
}  
}else{  
    console.log(0); 
}


//区分各个浏览器  封装好可直接用

function whichBroser(){
	var ua = navigator.userAgent.toLowerCase();
	if(/msie/i.test(ua) && !/opera/.test(ua)){  
	    alert("IE");  
	    return ;  
	}else if(/firefox/i.test(ua)){  
	    alert("Firefox");  
	    return ;  
	}else if(/chrome/i.test(ua) && /webkit/i.test(ua) && /mozilla/i.test(ua)){  
	    alert("Chrome");  
	    return ;  
	}else if(/opera/i.test(ua)){  
	    alert("Opera");  
	    return ;  
	}else if(/iPad/i){ 
	    alert("ipad"); 
	    return ; 
	}
	else if(/webkit/i.test(ua) &&!(/chrome/i.test(ua) && /webkit/i.test(ua) && /mozilla/i.test(ua))){  
	    alert("Safari");  
	    return ;  
	}else{  
	    alert("unKnow");  
	}
}




//判断pc还是移动端  封装好可直接用
function browserRedirect() {
            var _devices= navigator.userAgent.toLowerCase();
            var bIsIpad = _devices.match(/ipad/i) == "ipad";
            var bIsIphoneOs = _devices.match(/iphone os/i) == "iphone os";
            var bIsMidp = _devices.match(/midp/i) == "midp";
            var bIsUc7 = _devices.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = _devices.match(/ucweb/i) == "ucweb";
            var bIsAndroid = _devices.match(/android/i) == "android";
            var bIsCE = _devices.match(/windows ce/i) == "windows ce";
            var bIsWM = _devices.match(/windows mobile/i) == "windows mobile";
            document.writeln("您的浏览设备为：");
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                document.writeln("phone");
                //  移动设备显示状态
            } else {
            	document.write('PC');
            　　//  pc设备显示状态
            }
        }



//匹配正则的方法 test()  和 match()