const express = require('./libs/my_express');
const logger = require('./libs/my_logger.js')

let server = express();
server.listen(8050);

server.use(logger);


server.get('/reg', (req, res, next)=>{
	console.log(req.url);
	next();
})
server.get('/reg', (req, res, next)=>{
	console.log(req.query);
	res.end();
	next();
})
server.get('/aaa', (req, res, next)=>{
	console.log('aaa');
	next();
})

server.post('/login', (req, res, next)=>{
	console.log(req.body);
	next();
})
server.post('/login', (req, res, next)=>{
	console.log(1111);
})