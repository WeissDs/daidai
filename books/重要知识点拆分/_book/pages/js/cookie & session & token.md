##cookie

######设置和获取

```javascript
	//chrome在本地路径无法设置cookie IE可以
	// 设置
	document.cookie = 'aaa=bbb'
	// 获取
	document.cookie



	//前端设置cookie
	// 函数中的参数分别为 cookie 的名称、值以及过期天数
	function setCookie(c_name,value,expiredays){
	    var exdate=new Date();
	    exdate.setDate(exdate.getDate()+expiredays);
	    document.cookie=c_name+ "=" +escape(value)+
	    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
	}
	setCookie('name','zzyn',1); // cookie过期时间为1天。

	// 如果要设置过期时间以秒为单位
	function setCookie(c_name,value,expireseconds){
	    var exdate=new Date();
	    exdate.setTime(exdate.getTime()+expireseconds * 1000);
	    document.cookie=c_name+ "=" +escape(value)+
	    ((expireseconds==null) ? "" : ";expires="+exdate.toGMTString())
	}
	setCookie('name','zzyn',3600);  //cookie过期时间为一个小时

	//前端获取cookie
	// 函数中的参数为 要获取的cookie键的名称。
	function getCookie(c_name){
	    if (document.cookie.length>0){
	        c_start=document.cookie.indexOf(c_name + "=");
	        if (c_start!=-1){
	            c_start=c_start + c_name.length+1;
	            c_end=document.cookie.indexOf(";",c_start);
	            if (c_end==-1){ 
	                c_end=document.cookie.length;
	            }

	            return unescape(document.cookie.substring(c_start,c_end));
	        }
	     }

	    return "";
	}
	var uname= getCookie('name');
	alert(uname);
```


######自己尝试发现前端设置cookie过期时间无效
```javascript
	let parser=new DOMParser();
	let xmlDoc=parser.parseFromString(txt,"text/xml");
	let oDate = new Date();
	let a = new Date(oDate.getTime()+1000*60*60);
	// let b = a.getTime().setTime();
	console.log(oDate,a)
	// oDate.setDate(oDate.get)
	document.cookie = `aa = bbb; expires = ${a} `
```

##session

##token
