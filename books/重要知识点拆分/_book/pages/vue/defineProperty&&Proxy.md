## Object.defineProperty

#### Object.defineProperty用法demo

```javascript
	var obj = {}
	// 给obj添加a属性
	Object.defineProperty(obj, a, {
		value: 12,   		// 设置值为12 （值可为 数值，对象，函数）
		writable： true,    //默认为false 为true时属性值才能被改写
		configrable: true,	//默认为false 描述属性是否配置，以及可否删除
		get(){},			//默认为undefined  当访问该属性时，会调用此函数。 返回值为属性值
		set(newValue){},	//默认为undefined  当属性值被修改时，会调用此函数。 该方法接受一个参数（也就是被赋予的新值）
	})

```



#### vue双向数据绑定的实现(代码demo)


######Object.defineProperty

```html
	<div>
	    <div id="view">0</div>
	    <input id="txt" type="text" value="0">
	</div>
```

```javascript
	// definProperty 双向绑定demo
	let oDiv=document.getElementById('view');
    let oTxt=document.getElementById('txt
   	function bothway(obj, attr, objInput){
   		if(arguments.length!==3){
    		alert('请传入正确参数: 对象, 定义对象属性, 需要绑定的dom');
    		return;
    	}
		Object.defineProperty(obj, attr, {
			get(){
				return this._val;
			},
			set(newValue){
				if(this._val === newValue){
					return;
				}
				this._val = newValue;
				objInput.value = newValue;
				oDiv.innerHTML = newValue;
			}
		})
    }

    var data = {}
    bothway(data, 'inputValue', oTxt)

    // 改变对象的属性 input的value自动改变
    data.inputValue = 40;
    setTimeout(function(){
    	data.inputValue = 50
    },1000)

    // input改变 手动改变对象的属性值
    oTxt.addEventListener('input',function(e){
		data.inputValue = e.target.value;
		console.log('input:'+data.inputValue);
    })
    oTxt.addEventListener('keyup',function(e){
		data.inputValue = e.target.value;
		console.log('keyup:'+data.inputValue);
    })
    oTxt.addEventListener('change',function(e){
		data.inputValue = e.target.value;
		console.log('change:'+data.inputValue);
    })
```