const express = require('express');
//consolidate 模板引擎库
const consolidate = require('consolidate');
//引入ejs
const ejs = require('ejs');
const mysql = require('mysql');
const fs = require('fs');

let db = mysql.createPool({ host:'localhost', user:'root', port: 3306, password: '', database: '20181018' })

let server = express();
server.listen(8050);

server.use(express.static('www/'));

/*
ejs是一种模板引擎 如果选择一种类似于 EJS这种模板引擎渲染前端页面的时候，
经常服务端在响应 http 请求的时候调用 res.render({options}) 去向模板中
渲染数据。

Node可以静态化吗?
静态化就是在服务器第一次渲染后保存（保存在 文件、redis、数据库..）渲染好的文件，
第二次请求时直接发送不再重复渲染，减轻服务器的负担

Node静态化怎么实现?
用fs.stat 获取文件信息

*/


//用fs.stat 获取文件信息

fs.stat('./template/1.ejs', (err, stat)=>{
	if(err){
		console.log('文件不存在');
	}else{
		console.log(stat);
	}
})

/*
Stats {
  dev: 4072742641,
  mode: 33206, ----------------------------------- 权限
  nlink: 1, ----------------------------------- 有几个人连接它
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 17732923532771430,
  size: 790, ----------------------------------- 文件大小
  blocks: undefined,
  atimeMs: 1540974163551.717,
  mtimeMs: 1541058038312.9185,
  ctimeMs: 1541058038312.9185,
  birthtimeMs: 1540974163551.717,
  atime: 2018-10-31T08:22:43.552Z, ----------------------------------- access time 最后一次访问的时间   
  mtime: 2018-11-01T07:40:38.313Z, ----------------------------------- 最后一次修改的时间
  ctime: 2018-11-01T07:40:38.313Z, ----------------------------------- 创建 时间
  birthtime: 2018-10-31T08:22:43.552Z 
  }




*/


//选择一种模板引擎
server.set('html', consolidate.ejs);
//指定模板文件的扩展名
server.set('view engine', 'ejs');
//指定模板文件的路径
server.set('views', './template');

server.get('/aaa', (req, res)=>{
	// res.render('1', {arr: [12,5,8,10]});
	//用fs.stat做静态化
	//判断render_cache/1.ejs是否存在 (这种写法只要文件存在就会读取静态文件，如果数据更改不会随之改动，还需要加入时间判断)！！！！！！！！
	//视频说每隔十分钟刷新一次？或者给静态文件一个过期时间？？？？？？？
	fs.stat('./render_cache/1.ejs', (err, stat1)=>{
		if(err){
			console.log('走了非静态资源');
			renderAndWrite();
		}else{
			//这里为什么不用server.use(express.static('./render_cache/1'))??
			//这样写只能判断1.ejs改变，如果数据库有更新是没有办法自动刷新的！！！！！！！
			fs.stat('./template/1.ejs', (err, stat2)=>{
				if(stat2.mtime.getTime()>=stat1.mtime.getTime()){
					renderAndWrite();
				}else{
					let rs = fs.createReadStream('./render_cache/1.ejs');
					rs.pipe(res);
					console.log('走了静态资源');

					rs.on('error', err=>{
						renderAndWrite();
					})
				}
			})
			
		}
	})



	function renderAndWrite(){
		db.query('SELECT * FROM user',(err, data)=>{
			if(err){
				console.log('读取数据错误', err);
				res.sendStatus(500);
				res.end();
			}else{
				// res.render('1', {arr1: data})
				ejs.renderFile('./template/1.ejs', {arr1: data, foot: '<h1>我来组成尾</h1>'}, (err, result)=>{
					if(err){
						console.log('渲染错误');
					}else{
						//ejs原生渲染写法
						fs.writeFile('./render_cache/1.ejs', result, err=>{
							console.log('静态页面保存成功');
						})
						res.send(result);
						res.end();
					}
				})
				
				// console.log(data);
			}
		})
	}
	


	//如果不做静态化 就只需要下面这种写法就够了
	// db.query('SELECT * FROM user', (err, data)=>{
// 		if(err){
// 			res.sendStatus(500);
// 			res.end();
// 		}else{
// 			res.render('./template/1.ejs', {arr1:data, foot: '<h1>我来组成尾部</h1>'})
// 		}
// 	})
})

