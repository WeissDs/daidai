const http = require('http');
const assert = require('assert');
const url = require('url');

module.exports = function(){
	//声明一个变量 执行队列
	let queue = [];
	//这里server可以随意取名，和29_03那边的调用名没有什么关系
	let server = http.createServer((req, res)=>{
		console.log('监听成功');
		console.log(queue);
		let {pathname, query} = url.parse(req.url);
		for(let i=0;i<queue.length;i++){
			if(pathname == queue[i]){
				console.log(queue[i+1]);
				break;
			}
		}
		
	})

	
	server.get = function(){
		let argLength = arguments.length;
		let arg = arguments;
		gp(arg, argLength);
	}
	server.post = function(){
		let argLength = arguments.length;
		let arg = arguments;
		gp(arg, argLength);
	}

	function gp(arg, argLength){
		// console.log(arg, argLength);
		assert(argLength==1||argLength==2, 'argument error!');

		let path,fn
		if(argLength==2){
			path = arg[0];
			fn = arg[1];
		}else if(argLength==1){
			path = '*';
			fn = arg[0];
		}

		queue.push(path, fn);
	}

	return server;
}