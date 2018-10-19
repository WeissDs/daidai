const express = require('express');

let server = express();
server.listen(8050);

//接口写法(next参数可以用来执行下一条get语句)

server.get('/', (req, res, next)=>{
	res.write('1');
	next();
})
server.get('/', (req, res, next)=>{
	res.write('2');
	res.end();
})

//静态文件
server.use(express.static('www/'));

