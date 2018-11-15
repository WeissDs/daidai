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
	res.render('login');
})
//提交登录请求
admin_router.post('/login', (req, res, next)=>{
	let {username,password} = req.body;
	if(username == config.root_username){
		if(common.md5(password) == config.root_password){
			console.log('热烈欢迎超级管理员！！！');
		}
	}else{
		
	}

	res.end();
})