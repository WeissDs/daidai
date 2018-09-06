const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=>{
	if(req.url!=='favicon.ico'){
		console.log(req.url)

		// let str='';
		// req.on('data',(data)=>{
		// 	str+=data;
		// })
		// req.on('end', ()=>{
			fs.readFile(`./${req.url}`, (err, data)=>{
				if(err){
					res.writeHeader(404);
					res.write('Not Found');
				}else{
					res.write(data);
				}
				res.end();
			})
		// })
		
	}
	

})

server.listen(8050);