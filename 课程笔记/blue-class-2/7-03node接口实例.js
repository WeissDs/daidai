const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
let users = {};

let server = http.createServer((req, res)=>{
	if(req.url!=='/favicon.ico'){
		// res.setHeader('Access-Control-Allow-Origin', '*');
		let { pathname, query: getData }=url.parse(req.url, true);
		let str = '';
		
		req.on('data',(data)=>{
			str+=data;
		})
		req.on('end', ()=>{
			let postData = querystring.parse(str);
			console.log(getData, postData);

			switch(pathname){
				case '/login':
					let { user, pass }=getData;

					if(!user){
						res.write('{"err": 1, "msg": "user master be write"}');
					}else if(!pass){
						res.write('{"err": 1, "msg": "pass master be write"}');
					}else{
						res.write('{"err": 0, "msg": "OK"}');
						users[user]=pass;
						console.log(users);
					}
					res.end();
					break;
				case '/reg':
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