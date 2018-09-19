let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer((req, res)=>{
	let pathname = url.parse(req.url, true).pathname;
	// let data = '';
	// req.on('data',(data)=>{
	// 	arr+=data;
	// })
	if(pathname=='/aa'){
		console.log(pathname);
		res.write('sssss');
		res.end();
	}else{
		fs.readFile( `./${req.url}`,(err, file)=>{
			if(err){
				res.writeHeader(404);
				res.write('Not Found!');
			}else{
				res.write(file);
			}
			res.end();
		})
	}
	
}).listen(8050);