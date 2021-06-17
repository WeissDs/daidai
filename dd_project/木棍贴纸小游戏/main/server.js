const http = require('http');
const fs = require('fs');
const url = require('url')

let server = http.createServer((req, res)=>{
	if(req.url=='/favicon.ico') return;
	let pathName = url.parse(req.url).pathname.substr(1);
	let rs = fs.createReadStream(`./${pathName}`);
	rs.pipe(res);

	rs.on('error', err=>{
		console.log('读取失败', err);
		// res.writeHeader(404);
		res.write('Not Found');
		res.end();
	})
})

server.listen(4230, '0.0.0.0');