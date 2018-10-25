/*
响应方法：
res.send
res.sendFile   【可以控制发送的文件】   、server.use(express.static)    【自动获取】
res.sendStatus(code)   【发送状态码】
res.redirect	【重定向】



文件上传: 用express的multer


cookie、session：




路由：



渲染（服务端渲染，客户端渲染）：


*/ 

const express = require('express');
//将相对路径转换为绝对路径
const path = require('path');

let server = express();
server.listen(8050);

server.use(express.static('www/'))


//sendFile向浏览器发送文件【可控的】
server.get('/aa', (req, res, next)=>{
	if(req.query['pass']==1357){
		res.sendFile('E:/project/class/blue-class/28-03Express/www/index.html');
		// res.sendFile(path.resolve('./www/index.html').replace(/\\/g,'/'));
		// console.log(path.resolve('./www/index.html').replace(/\\/g,'/'));

		//这里不可以写res.end()  ???为什么
	}else{
		//http状态码403是Forbidden(没有权限访问的意思)
		res.sendStatus(403, '没有权限');
	}
})

server.get('/login', (req, res, next)=>{
	res.redirect('http://www.baidu.com');
})


//multer文件上传
const multer = require('multer');

//multer需要创建一个multer对象，然后配置一下
let multerObj = multer({
	//文件上传到哪去
	dest: './images/'
});
//.any就是接受任何上传文件，还有多种方法
server.use(multerObj.any());

server.post('/upload', (req, res, next)=>{
	console.log(req.files);
})