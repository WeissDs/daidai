const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=>{
	let rs = fs.createReadStream('./'+req.url);
	rs.pipe(res);

	rs.on('error', err=>{
		console.log('读取失败', err);
		res.writeHeader(404);
		res.write('Not Found');
		res.end();
	})
})

server.listen(4230, '0.0.0.0');

