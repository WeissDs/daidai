const express = require('express');    //node框架
const mysql = require('mysql');		//数据库连接
const multer = require('multer');		//文件传输
const ejs = require('ejs');			//模板引擎 用于服务端渲染
const consolidate = require('consolidate');			//模板引擎库 支持ejs等
const cookieParser = require('cookie-parser');		//cookie中间件
const cookieSession = require('cookie-session');	//session中间件
const bodyParser = require('body-parser');		//解析post数据

const config = require('./config');
const common = require('./libs/common');



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
//自己加的
server.get('/favicon.ico', (req, res)=>{
	res.end();
})

//测试服务能否正常运行
// server.get('', (req, res)=>{
// 	console.log('hello');
// 	res.end();
// })

//中间件配置

//普通POST数据
server.use(bodyParser.urlencoded({extended: false})) //不需要扩展模式
//文件POST数据
// let multerObj = multer({dest: './upload'});

		// 通过 filename 属性定制(自己找到的初始化方法可以更改上传文件的文件名)
		let storage = multer.diskStorage({
		    destination: function (req, file, cb) {
		        cb(null, './upload');    // 保存的路径，备注：需要自己创建
		    },
		    filename: function (req, file, cb) {
		        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
		        cb(null, file.fieldname + '-' + common.uuid()+'.'+ file.originalname.split('.')[1]);  
		    }
		});
		let multerObj = multer({ storage: storage });
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


