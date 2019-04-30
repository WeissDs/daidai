const http = require('http');
const url = require('url');
const fs = require('fs');
const zlib = require('zlib');
const querystring = require('querystring');

const login = require('./router/user');
const reg = require('./router/commodity');
const router = require('./router');


http.createServer((req, res)=>{
	
	if(req.url!=='/favicon.ico'){
		let {pathname, query} = url.parse(req.url, true);
		req.query = query;
		console.log(url.parse(req.url, true));

		let arr = [];
		req.on('data', (data)=>{
			arr.push(data);
		})
		req.on('end', ()=>{
			req.post = querystring.parse(arr.toString());

			if(router.emit(pathname, req, res)==false){
				res.setHeader('content-Encoding', 'gzip');
				let rs = fs.createReadStream(`www${pathname}`);
				let gz = zlib.createGzip();

				rs.pipe(gz).pipe(res);
				rs.on('error', ()=>{
					res.writeHeader(404);
					res.write('Not Found!');
					res.end();
				})

			}else{


			}
			
		})
	}

}).listen(8050);