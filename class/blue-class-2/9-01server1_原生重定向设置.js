const fs = require('fs');
const http = require('http');
const url = require('url');



http.createServer((req, res)=>{
	

	//fs的stat可以读取文件信息
	fs.stat('./'+req.url, (err, stat)=>{
		if(err){
			console.log('读取文件信息失败');
			res.writeHeader(404);
			res.write('Not Found!');
			res.end();
		}else{
			if(req.headers['if-modified-since']){

				//换算成毫秒/1000=>变成秒=>Math.floor向下取整
				let time_client = Math.floor(new Date(req.headers['if-modified-since']).getTime()/1000);
				let time_server = Math.floor(stat.mtime.getTime()/1000);
				if( time_client < time_server ){
					sendFileToClient();
				}else{
					res.writeHeader(304);
					res.end();
				}
			}else{
				sendFileToClient();
			}

			//stat.mtime.constructor可以查看stat.mtime对象是什么类型
			console.log(stat.mtime.toUTCString());

			function sendFileToClient(){
				res.setHeader('Last-Modified', stat.mtime.toUTCString());

				let rs = fs.createReadStream('./'+req.url);
				rs.pipe(res);

				rs.on('error', err=>{
					res.writeHeader(404);
					res.write('Not Found!');
					res.end();
				})
			}
			

		}


	});


	
	
}).listen(8050);