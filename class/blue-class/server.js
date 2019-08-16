const http = require('http');
const fs = require('fs');

let server = http.createServer((req,res)=>{
	console.log(req.url)
	if(req.url == '/favicon.ico') return
	let rs = fs.createReadStream('./'+req.url);
	rs.pipe(res);

	rs.on('error', err=>{
		res.write('Not Found');
		res.end();
	})
})

server.listen(3000, '0.0.0.0');