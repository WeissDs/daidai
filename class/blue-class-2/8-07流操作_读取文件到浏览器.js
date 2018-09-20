//正确的读取文件写入浏览器的姿势  （以数据流的方式读取和写入文件）
const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
	let rs1 = fs.createReadStream(`testNode/${req.url}`);

	//之所以可以直接将rs流向res 是因为http的req,res也是流对象
	rs1.pipe(res);

	rs1.on('error', err=>{
		console.log('读取失败');
		res.writeHeader(404);
		res.write('Not Found!');
		res.end();
	})
}).listen(8050);