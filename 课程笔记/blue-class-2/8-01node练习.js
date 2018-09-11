const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=>{
	if(req.url!=='favicon.cio'){
		let str='';
		req.on('data', (data)=>{
			str+=data;
		})
		req.on('end', ()=>{

			switch(req.url){
				case '/upload':
					// console.log('表单提交信息打印====='+str+'=====表单提交信息打印');
					let boundary = req.headers['content-type'].split('=')[1];
					let arr1 = str.split(boundary).slice(1,-1);
					let arr2 = arr1.map(item=>item.slice(2,-4));
					let fileIndex = '';
					let keyValue = {};
					arr2.forEach(item=>{
						let n=item.indexOf('\r\n\r\n');
						console.log('======='+item.slice(0,n).indexOf('\r\n'));
						if(item.slice(0,n).indexOf('\r\n')!=-1){
							fileIndex = item.slice(n+4);
						}else{
							let key = item.slice(0,n).split('; ')[1].split('=')[1];
							let value = item.slice(n+4);
							keyValue[key]=value;
						}
						
					});


					// console.log(arr1);
					console.log(arr2);
					console.log(fileIndex);
					console.log(keyValue);
					res.end();
					break;
				default:
					fs.readFile(`testNode/${req.url}`, (err, data)=>{
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