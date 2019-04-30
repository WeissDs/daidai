const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

let server = http.createServer((req, res)=>{
	fs.readFile(`${req.url}`, (err, data)=>{
		if(err){
			res.writeHeader(404);
			res.write('Not Found');
		}else{
			res.write(data);
		}
		res.end();
	})
	
	//接受get数据
	console.log(req.url);
	console.log(url.parse(req.url, true));
	let { pathname,query }=url.parse(req.url, true);
	console.log( pathname, query);

	//接收post数据
	let str = '';
	req.on('data', data=>{
		str+=data;
	})
	req.on('end', ()=>{
		let post=querystring.parse(str);

		console.log(str, post);
	})
})

server.listen(8050);