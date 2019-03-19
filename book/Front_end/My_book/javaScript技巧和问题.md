#JS技巧

---


###url相关

######获取和赋值url

```javascript
	window.location.href
	window.location.href = 'http://www.baidu.com/'
```

######获取url问号后的字符串

```javascript
	var url = location.search();
```

######获取get数据方法

```javascript
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
```

###url跳转方法整理

####原生js：

######location.href跳转方法
```javascript
    window.location.href = 'http://www.baidu.com'   //在当前页打开
```
######open跳转方法
```javascript
    window.open('http://www.baidu.com')   //默认在新页面打开（可更改属性）
```

######未完待续....

###点击事件

######禁止按钮点击

```javascript
document.getElementById('btn').disabled='true';
```


###获取定位


######此方法需要验证，和扩展

```javascript
	navigator.geolocation.getCurrentPosition(); 
```
<br>


###获取浏览器版本信息（能以此判断浏览器和设备类型）

######返回客户机发送的 user-agent 头部值
```javascript
	window.Navigator.userAgent();
```



###cloneNode方法

######cloneNode() 方法可创建指定的节点的精确拷贝， 拷贝所有属性和值。

######该方法将复制并返回调用它的节点的副本。如果传递给它的参数是true，它还将递归复制当前节点的所有子孙节点。否则，它只复制当前节点。

```javascript
	cloneNode(true)......克隆所有后代
	cloneNode(false).....克隆当前元素
	oDiv.appendChild(oBannerLi[0].cloneNode(true));
```

###Dom变动事件监听

    DOMSubtreeModified      Dom结构发生变化
    DOMNodeInserted         被作为子节点插入另一个节点时触发
    DOMNodeRemoved          移除节点时触发

###多设备同步更新使用的技术

######用现成的: browser-sync
######自己写: web-socket

<br/>
<br/>

#JS问题

---


#####window.navigator.geolocation.getCurrentPosition，在IOS10系统中无法定位问题:

[网络资料](9https://blog.csdn.net/for12/article/details/52803787)


#####跨域问题的解决方法
[网络资料](https://blog.csdn.net/lambert310/article/details/51683775)




<br/>
<br/>



#js案例

---

###网页小图标写法

	<link rel="favicon" href="/images/fav.png">

###隐藏的元素点击后设置transition动画效果失效的解决方法

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

###js的FileReader对象

[FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/FileReader)

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

###js的事件绑定

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


###从微信公众号栏目（H5页面）退回到微信公众号

也就是关闭微信的内置浏览器

    function weixinClosePage() {
    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', weixin_ClosePage, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', weixin_ClosePage);
            document.attachEvent('onWeixinJSBridgeReady', weixin_ClosePage);
        }
    } else {
        weixin_ClosePage();
    }
    }
    function weixin_ClosePage() {
    WeixinJSBridge.call('closeWindow');
    }

