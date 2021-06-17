const http = require('http');
const fs = require('fs');
const io = require('socket.io');

let server = http.createServer((req,res)=>{
	// res.header('Access-Control-Allow-Origin', '*');
	if(req.url == '/favicon.ico') return
	let rs = fs.createReadStream('./'+req.url);
	rs.pipe(res);

	rs.on('error', err=>{
		res.write('Not Found');
		res.end();
	})
});
server.listen(3000);

let wsServer = io(server);
wsServer.on('connection', function(sock){
	// 接受数据
	sock.on('a', function(...arg){
		console.log(arg);
	})
	
	// 发送数据
	setInterval(function(){
		sock.emit('b', Math.random());
	},2000)
})