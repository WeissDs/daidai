const http = require('http');
const url = require('url');

let server = http.createServer((req, res)=>{

	// res.setHeader('Access-Control-Allow-Origin', '*');
	let {pathname, query:get}=url.parse(req.url, true);
	if(pathname!='favicon.ico'){
		// console.log( pathname, get );
		console.log(req.method);

		let users={};

		if(pathname=='/login'){
			let {name, pas}=get;

			users[name]=pas;
			res.write('{"msg":"注册成功"}');
			console.log(users);
			res.end();
		}
	}
})
server.listen(8020);