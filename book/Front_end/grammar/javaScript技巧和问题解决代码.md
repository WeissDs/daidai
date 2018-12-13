##浏览器相关

####获取和赋值url

	window.location
	window.location = 'http://www.baidu.com/'


####获取url问号后的字符串

1.方法

	var url = location.search();

2.获取方法

	function GetRequest() {  
	   var url = location.search; //获取url中"?"符后的字串  
	   var theRequest = new Object();  
	   if (url.indexOf("?") != -1) {  
	      var str = url.substr(1);  
	      strs = str.split("&");  
	      for(var i = 0; i < strs.length; i ++) {  
	         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
	      }  
	   }  
	   return theRequest;  
	}  
	




##js案例

####网页小图标写法

	<link rel="favicon" href="/images/fav.png">

####隐藏的元素点击后设置transition动画效果失效的解决方法

	let oBtn = document.getElementsByTagName('input')[0];
	let oDiv = document.getElementsByTagName('div')[0];

	oBtn.onclick=function(){
		oDiv.style.display = "block";
		
		setTimeout(function(){
			oDiv.className="none show";
		},0);
	}

今天在工作中无意发现，当元素本身为display：none 时，若此时我们想通过js先将其变为display:block 并且随后再触发其他想要的transition过渡效果，需要在 js改变其为display:block 后setTimeout再去设置其他过渡动画，否则该过渡动画不会触发。 

原理： setTimeout被触发时，浏览器的定时触发器线程会将事件添加到待处理列队的末尾，保证在div设置block之后再添加className:show???????

####js的FileReader对象

	https://developer.mozilla.org/en-US/docs/Web/API/FileReader/FileReader

	function printFile(file) {
	  var reader = new FileReader();
	  reader.onload = function(evt) {
	    console.log(evt.target.result);
	  };
	  reader.readAsText(file);
	}

	//检测浏览器对FileReader的支持
	if(window.FileReader) {
	     var fr = new FileReader();
	     // add your code here
	 }
	 else {
	     alert("Not supported by your browser!");
	 }

	 //FileReader 的实例拥有 4 个方法，其中 3 个用以读取文件，另一个用来中断读取
	 abort					none					中断读取		
	 readAsBinaryString		file					将文件读取为二进制码
	 readAsDataURL			file					将文件读取为 DataURL
	 readAsText				file, [encoding] 		将文件读取为文本

####js的事件绑定

	内联事件（被嗤之以鼻的写法）
	obj.onclick  (和内联事件一样，多个事件会被复写，不能绑定多个事件)
	obj.addEventListener(ev, fn, bool)	(ie8+)
	obj.attachEvent('on'+ev, fn, bool)	(ie8_)


```script	
	function addEvent(element, ev, fn){
	  // if else 结构可用三元运算符 ? : 来精简
	  // 这里之所以要这样写，是便于读者理解
	  if (element.attachEvent) // IE 8 及更低版本浏览器
	   return element.attachEvent('on'+ev, fn);
	  else // IE 8 及以上，或其它浏览器
	   return element.addEventListener(ev, fn, false);
	}
```


####Mui框架的新跳转方式？

####a标签的onclick="return confirm('xxx')"  ; A instanceof B