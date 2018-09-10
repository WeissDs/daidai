const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=>{
	if(req.url!=='favicon.cio'){
		let str='';
		req.on('data', (data)=>{
			str+=data;
		})
		req.on('end', ()=>{

			if(req.url=='/upload'){
				// console.log('表单提交信息打印====='+str+'=====表单提交信息打印');
				let boundary = req.headers['content-type'].split('=')[1];
				let arr1 = str.split(boundary).slice(1,-1);
				let arr2 = arr1.map(item=>item.slice(2,-4));

				console.log(arr1);
				console.log(arr2);
				res.end();
			}else{
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