const express = require('express');    //node框架
const mysql = require('mysql');		//数据库连接
const multer = require('multer');		//文件传输
const ejs = require('ejs');			//模板引擎 用于服务端渲染
const consolidate = require('consolidate');			//模板引擎库 支持ejs等
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

let db = mysql.createPool({ host: config.mysql_host, port: config.mysql_port, user: config.mysql_user, password: config.mysql_password, database: config.mysql_dbname })
server.use((req, res, next)=>{
	req.db = db;
	next();
})

server.get('', (req, res)=>{
	console.log('hello');
	res.end();
})

//中间件配置

//普通POST数据
server.use(bodyParser.urlencoded({extended: false})) //不需要扩展模式
//文件POST数据
let multerObj = multer({dest: './upload'});
server.use(multerObj.any());
//cookie
server.use(cookieParser(require('./secret/cookie_key.js')));
//session
server.use(cookieSession({
	keys: require('./secret/session_key.js')
}));
//模板
server.set('html', consolidate.ejs);
server.set('view engine', 'ejs');
server.set('views', './template')

//处理请求

server.use('/admin', require('./routers/admin_token.js'));
server.use('/', require('./routers/www.js'));

//静态文件
server.use(express.static('./www'));


