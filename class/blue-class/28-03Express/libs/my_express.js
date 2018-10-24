const http = require('http');
const assert = require('assert');
const url = require('url');
const querystring = require('querystring');

module.exports = function(){
	//声明一个变量 执行队列
	let queue = [];
	//这里server可以随意取名，和29_03那边的调用名没有什么关系
	let server = http.createServer((req, res)=>{
		if(req.url!='/favicon.ico'){
			console.log('监听成功');
			// console.log(queue);
			let {pathname, query} = url.parse(req.url, true);
			req.query=query;

			//添加获取post请求数据的req.body
			let str = '';
			req.on('data', data=>{
				str+=data;
			})
			req.on('end', ()=>{
				req.body = querystring.parse(str);
				// console.log(req.body);

				//express的事件执行和next机制
				_run(0);
				function _run(n){
					//post的方法还需要修改一下，直接url访问接口也可以获取到数据
						for(let i=n;i<queue.length;i++){
							if(queue[i].method=='use' && queue[i].path == '*'){
								queue[i].fn(req, res, ()=>{
									i++;
									_run(i);
								});
								break;
							}else if(queue[i].method=='get' && pathname == queue[i].path){
								queue[i].fn(req, res, ()=>{
									i++;
									_run(i);
								});
								break;
							}else if(queue[i].method=='post' && pathname == queue[i].path){
								queue[i].fn(req, res, ()=>{
									i++;
									_run(i);
								});
								break;
							}
						}
				}
				
				// function _run(n){
				// 		for(let i=n;i<queue.length;i++){
				// 			if(queue[i].path == '*' || pathname == queue[i].path){
				// 				queue[i].fn(req, res, ()=>{
				// 					i++;
				// 					_run(i);
				// 				});
				// 				break;
				// 			}
				// 		}
				// }
			})
		}
		
	})
	
	server.get = function(){
		let argLength = arguments.length;
		let arg = arguments;
		let met = 'get';
		pathAndFunction(met, arg, argLength);
	}
	server.post = function(){
		let argLength = arguments.length;
		let arg = arguments;
		let met = 'post';
		pathAndFunction(met, arg, argLength);
	}
	server.use = function(){
		let argLength = arguments.length;
		let arg = arguments;
		let met = 'use';
		pathAndFunction(met, arg, argLength);
	}

	function pathAndFunction(met, arg, argLength){
		// console.log(arg, argLength);
		// assert(argLength==2||argLength==3, 'argument error!');

		let path,fn
		let method = met;
		if(argLength==2){
			path = arg[0];
			fn = arg[1];
		}else if(argLength==1){
			path = '*';
			fn = arg[0];
		}

		queue.push({method, path, fn});
	}

	// server.get = function(){
	// 	assert(arguments.length == 1||arguments.length == 2, 'argument error!');

	// 	let path, fn;

	// 	if(arguments.length==1){
	// 		path='*';
	// 		fn=arguments[0];
	// 	}else if(arguments.length==2){
	// 		path=arguments[0];
	// 		fn=arguments[1];
	// 	}

	// 	queue.push({path, fn});
	// }

	return server;
}