const http = require('http');
const url = require('url');
const fs = require('fs');
const os = require('os');
const cluster = require('cluster');
const process = require('process');

if(cluster.isMaster){
	for(let i=0; i<os.cpus().length; i++){
		cluster.fork();
	}
}else{
	console.log(process.pid);
	http.createServer((req, res)=>{
		let {pathname, query} = url.parse(req.url, true);

		console.log(`由#${process.pid}进程处理的`);
		
		let rs = fs.createReadStream( `./${pathname}` );    //随便在当前目录开一个html测试
		rs.pipe(res);
		rs.on('error', err=>{
			res.writeHeader(404);
			res.write('Not Found');
			res.end();
		})

		

	}).listen(1212)

}
