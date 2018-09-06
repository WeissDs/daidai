//测试前端代码路径 data/ajax.html

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
let users = {};

let server = http.createServer((req, res)=>{
	console.log(req.url);
	if(req.url!=='/favicon.ico'){
		// res.setHeader('Access-Control-Allow-Origin', '*');
		let { pathname, query: getData }=url.parse(req.url, true);
		let str = '';
		
		req.on('data',(data)=>{
			str+=data;
		})
		req.on('end', ()=>{ 
			let postData = querystring.parse(str);
			// console.log(getData, postData);
 			
 			let { user, pass }=postData;
 			let { user: guser, pass: gpass }=getData;
			switch(pathname){
				case '/reg':

					if(!user){
						res.write('{"err": 1, "msg": "user master be write"}');
					}else if(!pass){
						res.write('{"err": 1, "msg": "pass master be write"}');
					}else if(!/^[a-zA-Z]\w{5,17}$/.test(pass)){
						res.write('{"err": 1, "msg": "密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线"}');
					}else if(users[user]){
						res.write('{"err": 1, "msg": "此用户名已被占用"}');
					}else{
						res.write('{"err": 0, "msg": "OK"}');
						users[user]=pass;
						console.log(users);
					}
					res.end();
					break;
				case '/login':
					

					if(!guser){
						res.write('{"err": 1, "msg": "user master be write"}');
					}else if(!gpass){
						res.write('{"err": 1, "msg": "pass master be write"}');
					}else if(!users[guser]){
						res.write('{"err": 1, "msg": "没有这个用户"}');
					}else if(users[guser]!=gpass){
						res.write('{"err": 1, "msg": "用户名或密码错误"}');
					}else if(users[guser]==gpass){
						res.write('{"err": 0, "msg": "OK login"}');
					}else{
						res.write('{"err": 1, "msg": "no"}');
					}
					res.end();
					break;
				default:
					fs.readFile(`data${pathname}`,(err, data)=>{
						if(err){
							res.writeHeader(404);
							res.write('Not Found');
						}else{
							res.write(data);
						}
						res.end();
					})
			}

		})

		// console.log(getData, postData);   此条程序被先于req.on('end')执行了,postData为空,所以后续操作写在req.on('end')内
	}
	
})
server.listen(8050);