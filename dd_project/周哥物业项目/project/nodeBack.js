const http = require('http');
const url = require('url');
const querystring = require('querystring');

let server = http.createServer(function(req, res){
	if(req.url!=='/favicon.ico'){

		// res.setHeader('Access-Control-Allow-Origin', '*');
		let { pathname, query:getData }=url.parse(req.url, true);

		//接收GET数据和POST数据
		if(req.method=='GET'){
			console.log(req.method+':', getData);
		}else if(req.method=='POST'){
			let str = '';
			req.on('data', function(data){
				str+=data;
			})
			req.on('end', function(){
				let postData = querystring.parse(str);
				console.log(req.method+':', postData);
			})
		}
	}
	res.end();
	
});

server.listen(8020);