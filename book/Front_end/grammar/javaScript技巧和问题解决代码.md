##浏览器相关

####获取和赋值url

	window.location
	window.location = 'http://www.baidu.com/'


####获取url问号后的字符串

1.方法

	var url = location.search();

2.网上的一个获取方法

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
	
3.自己项目的获取方法

	var url = location.search();
	var oTxt = url.split("=")[1];




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




##jquery相关

####jquery初始化写法

	（function($){….}）（jQuery）


我们先看第一个括号里边的内容：function($){….}，这不就是一个匿名的函数吗？但是它的形参比较奇怪，是$,这里主要是为了不与其它的库冲突。

这样我们就比较容易理解第一个括号内的内容就是定义了一个匿名函数，我们在调用函数的时候，都是函数名后边加上括号以及实参，但是由于操作符的优先级我们定义的匿名函数也需要用（）括起来。

现在我想大家已经很清楚这句话是什么意思了吧。第一个括号表示定义了一个匿名函数，然后第二个函数表示为该函数传递的参数，整个结合起来意思就是，定义了一个匿名函数，然后又调用该函数，该函数的实参为jQuery。

相当于：function fun($){…};fun(jQuery);

这种方法多用于存放开发的插件，执行其中的代码时，Dom对象并不一定加载完毕。于此相反的是$(function(){})，这种方法在使用时页面的Dom对象已经加载完毕了。事实上该方法的全写是：$(document).ready(function(){});