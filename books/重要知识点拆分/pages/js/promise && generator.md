## promise


[知乎Promise原理](https://zhuanlan.zhihu.com/p/58428287)


#### Promise用法
```javascript

	setTimeout(function(){
		console.log(document.cookie)
	},4000)
	let o1 = new Promise(function(resolve,reject){
		$.ajax({
			url: "txt/a.json",
			type: "GET",
			dataType: "json",
			success(res){
				resolve(res)
			},
			error(err){
				console.log(err.responseText)
				reject(err.responseText)
			}
		})

	});
	let o2 = new Promise(function(resolve, reject){
		$.ajax({
			url: "txt/1.txt",
			type: "GET",
			success(res){
				resolve(JSON.parse(res))
			},
			error(err){
				reject(err)
			}
		})
	})

	Promise.all([o1, o2]).then(result=>{
		console.log(result);
	}).catch(error=>{
		console.log(error)
	})
	
	promis 封装：
	function ajax(url, type){
		return new Promise(function(resolve,reject){
			$.ajax({
				url,
				type,
				success(res){
					reslve(res)
				},
				error(err){
					reject(err)
				}
			})
		})
	}
	
	Promise.all([ajax("txt/a.json", "GET"),ajax("txt/1.txt", "GET")]).then(res=>{
		let [json, arr] = res;
		console.log(json, arr)
	}).catch(err=>{
		console.log(err)
	})
```


####Promise原生写法

```javascript

class Promise_D{
	constructor(fn){
	  const _this=this;
	  //重点
	  this.__queue=[];

	  this.__succ_res=null;
	  this.__erro_res=null;

	  this.status='';

	  // resolve
	  fn(function (...arg){
	    _this.__succ_res=arg;

	    _this.status='succ';

	    _this.__queue.forEach(json=>{
	      json.fn1(...arg);
	    });
	  }, 
	  // reject
	  function (...arg){
	    _this.__erro_res=arg;

	    _this.status='error';

	    _this.__queue.forEach(json=>{
	      json.fn2(...arg);
	    });
	  });
	}

	// fn1成功的执行函数，fn2失败的执行函数
	then(fn1, fn2){
	  // 如果异步已经完成
	  if(this.status=='succ'){
	    fn1(...this.__succ_res);
	  }else if(this.status=='error'){
	    fn2(...this.__erro_res);
	  // 如果异步还未完成，在resolve函数和reject函数被调用的时候执行
	  }else{
	    this.__queue.push({fn1, fn2});
	  }
	}
}


```


##generator

####基础用法

```javascript
	function *show(){
		alert(1);

		yield;    // 暂停

		alert(2);

	}

	let obj = show();
	obj.next();  // alert(1)
	obj.next();	 // alert(2)
```

####generator返回值

```javascript
	function *show(){
		alert(1);

		yield 12;

		alert(2);

		return 5;
	}

	let obj = show();

	leg res1 = obj.next();    	// alert(1) res1:{value:12, done:false}
	leg res2 = obj.next();		// alert(2) res2:{value:12, done:true}
```

####generator传参

```javascript
	function *show(a, b){
		alert("a");
		console.log(a,b);

		let c = yield;
		console.log(c);

		alert("b");

		return 5;
	}

	let obj = show(12,5);

	obj.next();
	obj.next(888);
```