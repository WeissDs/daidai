const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=>{
	if(req.url!=='favicon.ico'){
		console.log(req.url)

			//尝试自己拿到字符串中需要的key，value
			let str='';

			req.on('data', data=>{
				str+=data;
			})
			// console.log('ddddd\r\ncccccccc');     在node中\r\n和\n都会换行
			req.on('end',()=>{

				switch(req.url){
					case '/upload':
						console.log(req.headers['content-type']);

						// ------WebKitFormBoundaryvbFgYevd9a9uBHE7
						// Content-Disposition: form-data; name="f1"; filename=""
						// Content-Type: application/octet-stream


						// ------WebKitFormBoundaryvbFgYevd9a9uBHE7
						// Content-Disposition: form-data; name="user1"

						// 带
						// ------WebKitFormBoundaryvbFgYevd9a9uBHE7
						// Content-Disposition: form-data; name="pass1"

						// 2
						// ------WebKitFormBoundaryvbFgYevd9a9uBHE7--


						// console.log(req.headers['content-type'].split('='));    //为什么这里不能写req.headers.content-type  报错type未定义？？

						//为什么课程里要先用‘； ’split一次再用‘=’split一次？？
						let boundary = '--'+req.headers['content-type'].split('=')[1];
						console.log(boundary);

						let arr=str.split(boundary).slice(1,-1);    //二进制Buffer对象中目前没有split方法需要手写
						let newarr = [];
						for(let i=0;i<arr.length;i++){
							// console.log(arr);
							// console.log('111'+arr[i].slice(2,-2));
							newarr.push(arr[i].slice(2,-2));
						}
						
						console.log('newarr: '+newarr);

						res.end();
						break;
					default:
						fs.readFile(`./${req.url}`, (err, data)=>{
							if(err){
								res.writeHeader(404);
								res.write('Not Found');
							}else{
								res.write(data);
							}
							res.end();
						})
				}

			})
			
		
	}
	

})

server.listen(8050);