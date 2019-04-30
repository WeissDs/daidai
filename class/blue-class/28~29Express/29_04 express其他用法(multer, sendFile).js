/*
响应方法：
res.send
res.sendFile   【可以控制发送的文件】   、server.use(express.static)    【自动获取】
res.sendStatus(code)   【发送状态码】
res.redirect	【重定向】



文件上传: 用express的multer

1.引入，配置
cosnt multer = require('multer');
let multerObj = multer({ dest: './images' })

2.加给中间件
server.use(multerObj.fields(接收特定数据)或者.any(接收任何数据).none(不接受数据)...);

3.用req.files获取
req.files


*/ 

const express = require('express');
//path.resolve可以将相对路径转换为绝对路径
const path = require('path');

let server = express();
server.listen(8050, '0.0.0.0');

//访问根目录会自动打开www中的index.html文件
server.use(express.static('www/'))

server.get('/favicon.ico', (req, res)=>{
	res.end();
})


//sendFile向浏览器发送文件【可控的】----------------------------------------------------------------
server.get('/aa', (req, res, next)=>{
	if(req.query['pass']==1357){
		// res.sendFile('E:/project/class/blue-class/28-03Express/www/index.html');
		res.sendFile(path.resolve('./www/index.html').replace(/\\/g,'/'));

		//这里不可以写res.end()  ???为什么
	}else{
		//http状态码403是Forbidden(没有权限访问的意思)
		res.sendStatus(403, '没有权限');
	}
})

server.get('/login', (req, res, next)=>{
	res.redirect('http://www.baidu.com');
})





//multer文件上传----------------------------------------------------------------------------------
const multer = require('multer');
const fs = require('fs');

//multer需要创建一个multer对象，然后配置一下
let multerObj = multer({
	//文件上传到哪去
	dest: './images/'
});
//.any就是接受任何上传文件，还有多种方法
server.use(multerObj.any());

server.post('/upload', (req, res, next)=>{

	//获取前端上传文件时，修改文件multer的文件名
	console.log(req.files);

	//这种写法会有点问题
	//老师说时因为文件的操作是异步的？？？，所以不能用for或者forEach来写？？？

	// for(let i=0; i<req.files.length; i++){
	// 	let newPath = req.files[i].path+path.extname(req.files[i].originalname);
	// 	fs.rename(req.files[i].path, newPath, err=>{
	// 		if(err){
	// 			res.sendStatus(500, 'rename error!');
	// 			console.log('重写文件名失败');
	// 			res.end();
	// 		}else{
	// 			//如果这样写的话，会出现Can't set headers after they are sent. 的错误，因为res.send('ok')被执行了多次
	// 			res.send('ok');
	// 			res.end();
	// 		}
	// 	})
	// }


	//所以换成以下写法
	let i=0;
	
	__changeIMGPath();
	function __changeIMGPath(){
		let newPath = req.files[i].path+path.extname(req.files[i].originalname);
		fs.rename(req.files[i].path, newPath, err=>{
			if(err){
				res.sendStatus(500, 'rename error!');
				console.log('重写文件名失败');
				res.end();
			}else{
				if(i>=req.files.length-1){
					res.send('ok');
					res.end();
				}else{
					i++;
					__changeIMGPath();
				}
			}
		})
	}

})

