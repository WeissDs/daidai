const express = require('./libs/my_express');

let server = express();
server.listen(8050);

server.get('/reg', (req, res, next)=>{
	console.log(req.url);
	res.end();
})

server.post('/login', (req, res, next)=>{
	
})