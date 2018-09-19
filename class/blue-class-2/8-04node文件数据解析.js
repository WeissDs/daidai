//用testNode/nodeFile.html测试

const http = require('http');
const fs = require('fs');
const split = require('./8-03node.Buffer.split');

http.createServer((req, res)=>{
	if(req.url!=='/favicon.cio'){
		let arr=[];
		req.on('data', (data)=>{
			arr.push(data);
		})
		req.on('end', ()=>{
			

			switch(req.url){
				case '/upload':

					let boundary = req.headers['content-type'].split('=')[1];

					let postData = Buffer.concat(arr);
					let arr1 = postData.split(boundary).slice(1,-1);
					let arr2 = arr1.map(item=>item.slice(2,-4));



					// console.log(arr2);
					// console.log(req.headers);


					// let fileIndex = null;
					let keyValue = {};
					arr2.forEach(item=>{
						let n=item.indexOf('\r\n\r\n');

						let disposition = item.slice(0,n);
						let content = item.slice(n+4);
						disposition = disposition.toString();

						if(disposition.indexOf('\r\n')!=-1){
							let [line1, line2] = disposition.split('\r\n');
							let [, name, fileName] = line1.split('; ');
							let type = line2.split(': ')[1];

							fileName = fileName.split('=')[1].slice(1,-1);
							name = name.split('=')[1].slice(1,-1);
							
							console.log(name,fileName,type);
							fs.writeFile(`testNode/${fileName}`,content,(err)=>{
								if(err){
									console.log('error', err);
								}else{
									console.log('success');
								}
							})
						}else{
							let key = disposition.split('; ')[1].split('=')[1];
							key = key.substring(1,key.length-1);
							content = content.toString();
							keyValue[key]=content;
						}
					});


					console.log(keyValue);
					res.end();
					break;
				default:
					fs.readFile( `testNode/${req.url}`,(err, file)=>{
						if(err){
							res.writeHeader(404);
							res.write('Not Found!');
						}else{
							res.write(file);
						}
						res.end();
					})
			}
		})
	}
	

}).listen(8050);