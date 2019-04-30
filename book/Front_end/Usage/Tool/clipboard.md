
##clipboard.js写法

####项目代码

```javascript
// 写法一 写在html中 记得在js中实例化对象
<input id="payee_card" class="right-txt" value="8888 8888 8888 8888 888" readonly>
<button class="btn" data-clipboard-target="#payee_card">复制</button>
var clipboard = new ClipboardJS('.btn');   //这里需不需要匹配class .btn 我不记得了

// 写法二 动态设置
var clipboard = new ClipboardJS('.right-copy', {
	target: function(trigger) {
	 	console.log(this)
		// 这里给了一个全局变量，注意重名问题
	 	dai_copy = $(trigger).prev().val()
	 	console.log(this)
	 	$(trigger).prev().val($(trigger).prev().val().replace(/\s*/g, ""))
	 	var result = $($(trigger).prev())[0]
       	return result;
  	}
});
// 复制成功
clipboard.on('success', function(e){
	console.log(this)

	console.info('Action:', e.action);
	console.info('Text:', e.text);
	console.info('Trigger:', e.trigger);
	$(e.trigger).prev().val(dai_copy)
	$("#copy_alert").fadeIn(500);
	$("#copy_alert").fadeOut(1000);
});
// 复制失败
clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
```