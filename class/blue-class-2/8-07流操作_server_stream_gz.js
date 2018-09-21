//正确的读取文件写入浏览器的姿势  （以数据流的方式读取和写入文件 并且进行压缩后再传）
//压缩后传递数据能节省大约70%的带宽
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

http.createServer((req, res)=>{
	if(req.url!=='/favicon.ico')
	//将数据压缩后成为二进制数据传输，浏览器接收后无法解析，所以服务器要在响应头中加入Content-Encoding: gzip
	res.setHeader('Content-Encoding', 'gzip');
	let rs1 = fs.createReadStream(`/testNode${req.url}`);
	let gz = zlib.createGzip();

	//之所以可以直接将rs流向res 是因为http的req,res也是流对象, 所有的流对象都有on方法
	// rs1.pipe(res);
	rs1.pipe(gz).pipe(res);

	rs1.on('error', err=>{
		console.log('读取失败');
		res.writeHeader(404);
		res.write('Not Found!');
		res.end();
	})
}).listen(8050);