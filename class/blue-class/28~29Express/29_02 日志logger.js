const express = require('express');
// const fs = require('fs');
const logger = require('./libs/my_logger.js')

let server = express();
server.listen(8050, '0.0.0.0');  //加上'0.0.0.0'可以使req.connection.remoteAddress获取到的ip为ipv4而不是ipv6

// server.use((req, res, next)=>{
// 	//日志内容：
// 	let arr = [];
// 	//访问者ip
// 	arr.push(req.connection.remoteAddress);
// 	//时间
// 	//或者用toGMTString()方法来转换
// 	let oDate = new Date().toUTCString();
// 	arr.push(`[${oDate}]`);
// 	//请求方式
// 	arr.push(req.method);
// 	//访问接口
// 	arr.push(req.url);

// 	fs.appendFile('logs/access.log', arr.join(' ')+'\n', err=>{
// 		if(err){
// 			console.log('access.log日志写入失败');
// 		}

// 		next();
// 	})
// })

server.use(logger);