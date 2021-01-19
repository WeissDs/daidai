## promise


```javascript
	// promise 原理：

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