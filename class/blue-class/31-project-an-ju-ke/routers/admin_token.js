const express = require('express');
const config = require('../config');
const common = require('../libs/common')

let admin_router = express.Router();

module.exports = admin_router;

//进入所有的admin相关页面之前，都要校验用户身份——如果没有登录过（到登录页/admin/login）
admin_router.use((req, res, next)=>{

	//用token的写法
	if(!req.cookies['admin_token'] && req.path!='/login' ){
		res.redirect('/admin/login?ref='+req.path);
	}else{
		if(req.path=='/login'){
			next();
		}else{
			req.db.query(`SELECT * FROM admin_token_table WHERE ID='${req.cookies['admin_token']}'`, (err, data)=>{
				if(err){
					res.sendStatus(500);
				}else if(data.length==0){
					console.log('admin_token未找到');
					res.redirect('/admin/login?ref'+req.path);
				}else{
					//将查找到的token对应的damin_ID存到req.admin_ID中, 方便在后面做比对
					req.admin_ID = data[0]['admin_ID'];
					next();
				}
			})
		}
	}
	
})


//RESTful风格 （ 按照请求方法或者路径等 来区分请求对象 ）如下：
//展现login页面
admin_router.get('/login', (req, res, next)=>{
	res.render('login', {error_msg: '', ref: req.query.ref||''});
})

//提交登录请求
admin_router.post('/login', (req, res, next)=>{
	let {username,password} = req.body;

	//登录通过设置token的函数
	function setToken(token){
		//生成一个token 也就是数据库中的ID
		let ID = common.uuid();
		//生成结束时间为20分钟后
		let oDate = new Date();
		oDate.setMinutes(oDate.getMinutes()+20);
		let t = Math.floor(oDate.getTime()/1000);
		//将数据写入数据库的admin_token_table表
		req.db.query(`INSERT INTO admin_token_table (ID, admin_ID, expires) VALUES('${ID}', '${token}', '${t}')`, err=>{
			if(err){
				res.sendStatus(500);
			}else{
				res.cookie('admin_token', ID);
				res.redirect('/admin'+req.query['ref']);
			}
		})
	}

	//登录输入错误时的函数
	function error(msg){
		error_msg = '用户名或密码有误';
		res.render('login', {error_msg: msg});
		res.end();
	}

	//登录验证
	if(username == config.root_username){
		if(common.md5(password) == config.root_password){
			console.log('热烈欢迎超级管理员！！！');
			setToken(1);		
		}else{
			console.log('超级管理员登录失败');
			error('用户名或密码有误');
		}
	}else{
		req.db.query(`SELECT ID,username,password FROM admin_table WHERE username='${username}'`, (err, data)=>{
			if(err){
				console.log('服务器出错'); 
				error('服务器出错');
			}else if(data.length==0){
				console.log('该用户名不存在');
				error('用户名或密码有误');
			}else{
				if(data[0].password == common.md5(password)){
					console.log('欢迎管理员！');
					setToken(data[0].ID);	
				}else{
					console.log('管理员登录失败');
					error('用户名或密码有误');
				}
			}
		})
	}
	
})

//router的根目录重定向到/house
admin_router.get('/', (req, res, next)=>{
	res.redirect('/admin/house');
})

//渲染/house主页面 index.ejs
admin_router.get('/house', (req, res, next)=>{
	req.db.query('SELECT * FROM house_table', (err, data)=>{
		if(err){
			console.log('服务器错误');
			res.end();
		}else{
			res.render('index', {data})
			res.end();
		}
		
	})

})

admin_router.post('/house', (req, res, next)=>{
	console.log(req.body);
	console.log(req.admin_ID);
	console.log(req.files);
	req.body['ID'] = common.uuid();
	req.db.query(`INSERT INTO house_table (ID, admin_ID, title, sub_title) VALUES('${req.body.ID}','${req.admin_ID}','${req.body.title}','${req.body.sub_title}')`, err=>{
		if(err){
			console.log('服务器错误',err);
			res.end();
		}else{
			console.log('写入house信息成功')
		}
	})
	res.end();
})