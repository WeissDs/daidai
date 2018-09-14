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



					console.log(arr2);
					console.log(req.headers);

					let fileIndex = null;
					let keyValue = {};
					arr2.forEach(item=>{
						let n=item.indexOf('\r\n\r\n');
						if(item.slice(0,n).indexOf('\r\n')!=-1){
							fileIndex = new Buffer(item.slice(n+4));
						}else{
							let key = item.slice(0,n).split('; ')[1].split('=')[1];
							let value = item.slice(n+4);
							keyValue[key]=value;
						}
					});



					console.log(arr2);
					console.log(fileIndex);
					console.log(keyValue);
					// fs.writeFile(`textNode/333.png`,fileIndex);
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