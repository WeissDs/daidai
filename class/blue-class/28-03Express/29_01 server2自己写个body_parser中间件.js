const express = require('express');
const querystring = require('querystring');
const myBodyParser = require('./libs/my_body_parser');

let server = express();
server.listen(8050);

server.use(express.static('www/'));

//没有用querystring的版本
// server.use((req, res, next)=>{
// 	let str = '';

// 	req.on('data', data=>{
// 		str+=data;
// 	})
// 	req.on('end', ()=>{
// 		let arr = str.split('&');
// 		let json = {};
// 		for(i=0; i<arr.length; i++){
// 			let key = arr[i].split('=')[0];
// 			let value = arr[i].split('=')[1];
// 			json[key]=value;
// 		}
// 		console.log(json);
// 		req.body = json;
// 		next();
// 	})
// })

//用querystring的版本
// server.use((req, res, next)=>{
// 	let str = '';
// 	req.on('data', data=>{
// 		str+=data;
// 	})
// 	req.on('end', ()=>{
// 		req.body = querystring.parse(str);
// 		next();
// 	})
// })


//封装的版本
server.use(myBodyParser.urlencoded);