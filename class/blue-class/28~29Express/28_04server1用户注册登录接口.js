const express = require('express');
const mysql = require('mysql');
//用户ID不可以用自增，不安全，需要生成uuid来当用户ID
const uuid = require('uuid/v4');
//MD5加密密码
//散列算法有： 
//AES  几个G
//MD5（流行）几百G
//SHA（美军）几千G
const crypto = require('crypto');  //nodejs 的crypto模块封装了MD5 
//express的插件，用来解析post数据（消息体body里的数据）需要安装 npm i body-parser -D 为什么放在开发环境？？？
const bodyParser = require('body-parser');

let server = express();
server.listen(8050);
//中间件引入req.body
server.use(bodyParser.urlencoded({}));

let db = mysql.createPool({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: '28_03express'
})

server.use(express.static('www/'));


//判断用户名、密码是否符合规范

server.get('/reg', (req, res, next)=>{
	//express里可以不用url模块取url传输的get数据了，直接用req.query
	
	let { username, password } = req.query;
	if(!username){
		res.write('必须填写username');
		res.end();
	}else if(!password){
		res.write('必须填写password');
		res.end();
	}else if(!/^\w[a-zA-Z0-9_]{6,23}$/.test(username)){
		res.write('用户名必须为6-23位 数字，字母，下划线');
		res.end();
	}else{
		next();
	}
})

//用户名是否存在
server.get('/reg', (req, res, next)=>{
	let {username, password} = req.query;
	db.query(`SELECT username FROM user_table WHERE username='${username}'`, (err, data)=>{
		if(err){
			res.send({code: 1, msg: '数据库出错'});
		}else if(data.length > 0){
			res.send({code: 1, msg: '此用户名已被占用'});
		}else{
			next();
		}
	})
})

//生成uuid，检验uuid是否重复
server.get('/reg', (req, res, next)=>{
	_next();

	function _next(){
		let id = uuid().replace(/\-/g, '');

		db.query(`SELECT ID FROM user_table WHERE ID='${id}'`, (err, data)=>{
			if(err){
				res.send({code: 1, msg: '数据库出错'});
			}else if(data.length > 0){
				_next();
			}else{
				req._uuid = id;
				next();
				
			}
		})
	}
})

//发送用户注册信息到数据库
server.get('/reg', (req, res, next)=>{
	let {username, password} = req.query;
	let id=uuid().replace(/-/g, '');

	//md5加密写法???
	let md5 = crypto.createHash('md5');
	md5.update(password);
	password = md5.digest('hex');
	//解密????
	// var verifyPassword = crypto.createHash('md5').update(password, 'utf8').digest("hex");

	db.query(`INSERT INTO user_table VALUES ('${req._uuid}', '${username}', '${password}')`, (err, data)=>{
		if(err){
			res.send({code: 2, msg: '数据库出错'});
		}else{
			res.send({code: 0, msg: '成功'});
			// res.end();
		}
	})
})


server.post('/login', (req, res)=>{
	console.log(req.body);
})
