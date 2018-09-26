const http = require('http');
const url = require('url');
const fs = require('fs');
const zlib = require('zlib');
const login = require('./router/user');
const reg = require('./router/user1');

const router = require('./router');


http.createServer((req, res)=>{
	
	if(req.url!=='/favicon.ico'){
		let {pathname, query}=url.parse(req.url, true);
		// console.log(req.url, query);

		let arr=[];
		req.on('data', (data)=>{
			arr.push(data);
		})
		req.on('end', ()=>{
			if(router.emit(req.url, req, res)==false){
				res.setHeader('content-Encoding', 'gzip');
				let rs = fs.createReadStream(`www${pathname}`);
				let gz = zlib.createGzip();

				rs.pipe(gz).pipe(res);
				re.on('error', ()=>{
					res.writeHeader(404);
					res.write('Not Found!');
					res.end();
				})

			}else{

			}
			
		})
	}

}).listen(8050);