const express = require('express');    //node框架
const mysql = require('mysql');		//数据库连接
const multer = require('multer');		//文件传输
const ejs = require('ejs');			//模板引擎 用于服务端渲染
const consolidate = require('consolidate');			//模板 nnn引擎库 支持ejs等
const cookieParser = require('cookie-parser');		//cookie中间件
const cookieSession = require('cookie-session');	//session中间件
const bodyParser = require('body-parser');		//解析post数据

const config = require('./config');



//创建一个 config.js 配置文件 （ 后缀名随意.json .a 随意 ）将以下端口等信息放到里面

/*
*
*	let server = express();
*	server.listen(8080, '0.0.0.0');
*
*	mysql.createPool({host: 'localhost:'})
*
*/


let server = express();
server.listen(config.port, '0.0.0.0');

mysql.createPool({ host: config.mysql_host, port: config.mysql_port, user: config.mysql_user, password: config.mysql_password, database: config.mysql_dbname })

server.get('', (req, res)=>{
	console.log('hello');
	res.end();
})

//中间件配置

