const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

let server = http.createServer((req, res)=>{
	if(req.url!=='/favicon.ico'){
		let { pathname, query: getData }=url.parse(req.url, true);
		let str = '';
		req.on('data',(data)=>{
			str+=data;
		})
		req.on('end', ()=>{
			let postData = querystring.parse(str);
			console.log(getData, postData);

			switch(pathname){
				case '/reg':
					break;
				case '/login':
					break;
				default:
					fs.readFile(`data${pathname}`,(err, data)=>{
						if(err){
							res.writeHeader(404);
							res.write('Not Found');
						}else{
							res.write(data);
						}
					})
			}
		})

		// console.log(getData, postData);   此条程序被先于req.on('end')执行了,postData为空,所以后续操作写在req.on('end')内
	}
	res.end();
})
server.listen(8050);