const express = require('express');
const mysql = require('mysql');
//用户ID不可以用自增，不安全，需要生成uuid来当用户ID
const uuid = require('uuid/v4');

let server = express();
server.listen(8050);

let db = mysql.createPool({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: '28_03express'
})



//判断用户名、密码是否符合规范

server.get('/reg', (req, res, next)=>{
	//express里可以不用url模块取url传输的get数据了，直接用req.query
	
	let { username, password } = req.query;
	if(!username){
		res.write('必须填写username');
	}else if(!password){
		res.write('必须填写password');
	}else if(!/^\w[a-zA-Z0-9_]{6,23}$/.test(username)){
		res.write('用户名必须为6-23位 数字，字母，下划线');
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
	db.query(`INSERT INTO user_table VALUES ('${req._uuid}', '${username}', '${password}')`, (err, data)=>{
		if(err){
			res.send({code: 2, msg: '数据库出错'});
		}else{
			res.send({code: 0, msg: '成功'});
		}
	})
})


server.get('/login', (req, res)=>{

})
