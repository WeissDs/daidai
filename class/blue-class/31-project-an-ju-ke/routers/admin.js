const express = require('express');
const config = require('../config');
const common = require('../libs/common')

let admin_router = express.Router();

module.exports = admin_router;

//进入所有的admin相关页面之前，都要校验用户身份——如果没有登录过（到登录页/admin/login）
admin_router.use((req, res, next)=>{
	if(!req.session['admin_ID'] && req.url!='/login'){
		res.redirect('/admin/login');
		res.end();
	}else{
		next();
	}
		
})


//RESTful风格 （ 按照请求方法或者路径等 来区分请求对象 ）如下：
//展现login页面
admin_router.get('/login', (req, res, next)=>{
	res.render('login', {error_msg: ''});
})
//提交登录请求
admin_router.post('/login', (req, res, next)=>{
	let {username,password} = req.body;
	if(username == config.root_username){
		if(common.md5(password) == config.root_password){
			console.log('热烈欢迎超级管理员！！！');
			req.session['admin_ID']='1';
			res.redirect('/admin/house');
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
						console.log('管理员登录成功！');
						req.session['admin_ID']=data[0].ID;
						res.redirect('/admin/house');
					}else{
						console.log('管理员登录失败');
						error('用户名或密码有误');
					}
			}
		})
	}
	function error(msg){
		error_msg = '用户名或密码有误';
		res.render('login', {error_msg: msg});
		res.end();
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