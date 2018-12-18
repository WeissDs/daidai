const express = require('express');
const config = require('../config');
const common = require('../libs/common');
const fs = require('fs');

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
//增： 将新增数据添加到数据库
admin_router.post('/house', (req, res, next)=>{
	req.body['ID'] = common.uuid();
	req.body['admin_ID'] = req.admin_ID;

	req.body['sale_time'] = Math.floor(new Date(req.body['sale_time']).getTime()/1000);
	req.body['submit_time'] = Math.floor(new Date(req.body['submit_time']).getTime()/1000);

	let oImgPath = [];
	let oImgRealPaht = [];
	let oPropertyPath = [];
	let oPropertyRealPath = []
	for(i=0; i<req.files.length; i++){
		if(i==0){
			oImgPath = [];
			oImgRealPaht = [];
		}
		switch( req.files[i].fieldname ){
			case 'image_main':
				req.body.main_img_path = req.files[i].filename;
				req.body.main_img_real_path = req.files[i].path.replace(/\\/g, '\\\\');
				break;
			case 'image_banner':
				oImgPath.push(req.files[i].filename);
				oImgRealPaht.push(req.files[i].path.replace(/\\/g, '\\\\'));
				break;
			case 'property_img':
				oPropertyPath.push(req.files[i].filename);
				oPropertyRealPath.push(req.files[i].path.replace(/\\/g, '\\\\'));
				break;
		}
	}
	req.body.img_paths = oImgPath.join(',');
	req.body.img_real_paths = oImgRealPaht.join(',');
	req.body.property_img_paths = oPropertyPath.join(',');
	req.body.property_img_real_paths = oPropertyRealPath.join(',');

	console.log(req.body);
	console.log(req.files);



	let arrField = [];
	let arrValue = [];

	console.log(arrField);
	for(let name in req.body){
		arrField.push(name);
		arrValue.push(req.body[name]);   //????
	}
	console.log(arrField);
	console.log(arrValue);
	let sql = `INSERT INTO house_table (${arrField.join(',')}) VALUES ('${arrValue.join("','")}')`;

	req.db.query(sql, err=>{
		if(err){
			res.sendStatus(500);
			console.log('服务器错误', err);
		}else{
			console.log('写入house成功');
			res.redirect('/admin/house');
		}
	})

})
//删： 将所删除条目在数据库所有相关的数据删除
admin_router.get('/house/delete', (req, res, next)=>{
	console.log(req.query['id']);
	let oID = req.query['id'];
	let aID = oID.split(',');
	console.log(aID)

	let b_err = false;
	aID.forEach(item=>{
		if(!/^(\d|[a-f]){32}$/.test(item)){
			b_err = true;
		}
	})
	if(b_err){
		res.sendStatus(400);
	}else{
		let idIndex=0;
		idNext();
		function idNext(){
			if(idIndex<aID.length){
				let ID = aID[idIndex++];
				req.db.query(`SELECT * FROM house_table WHERE ID='${ID}'`, (err, data)=>{
					if(err){
						console.log('服务器错误',err);
						res.sendStatus(500);
						res.end();
					}else if(data.length==0){
						//res.sendStatus(404, 'no this data');    教程这样写发送不了文字
						res.status(500).send('no this data');
						res.end();
					}else{
					//删除本地的关联图片
						let arr = [];
						// console.log(data);

						//arr加入banner图片
						if(data[0].img_real_paths){
							data[0].img_real_paths.split(',').forEach(item=>{
								arr.push(item);
							})
						}
						//arr加入房型图
						if(data[0].property_img_real_paths){
							data[0].property_img_real_paths.split(',').forEach(item=>{
								arr.push(item);
							})
						}
						//arr加入主图(用智障的方法避免用户不传图时报错)
						data[0].main_img_real_path && arr.push(data[0].main_img_real_path);
						console.log(arr);

						// //循环方法（同时删除多个数据），向磁盘同时并发多个请求，容易卡死，性能低。
						// let complete=0;
						// 	// //用forEach()写法
						// 	// arr.forEach(item=>{fs.unlink(item, err=>{...})})
						// for(i=0; i<arr.length; i++){
						// 	fs.unlink(arr[i], err=>{
						// 		if(err){
						// 			//这里会重复报错，服务器会崩溃
						// 			res.sendStatus(500);
						// 			console.log('服务器错误', err);
						// 		}else{
						// 			complete++;
						// 			if(complete==arr.length){
						// 				req.db.query(`DELETE FROM house_table WHERE ID='${ID}'`, err=>{
						// 					if(err){
						// 						res.sendStatus(500);
						// 						console.log('服务器错误', err);
						// 					}else{
						// 						res.redirect('/admin/house');
						// 					}
						// 				})
						// 			}
						// 		}
						// 	})
						// }
						
						

						//递归方法（一条删完再删后一条数据），这种方式优于循环。
						if(arr.length>0){
								let i=0;
								next();
								function next(){
									fs.unlink(arr[i], err=>{
										if(err){
											// res.sendStatus(404, '没有'+arr[i]+'文件');   教程这样写发送不了文字
											res.status(500).send('没有找到'+arr[i]+'文件，删除数据失败');
											console.log('没有'+arr[i]+'文件');
										}else{
											i++
											//为了没有传图片的数据在删除的时候不崩溃
											if(i>=arr.length){
							//在数据库删除该数据
												req.db.query(`DELETE FROM house_table WHERE ID='${ID}'`, err=>{
													if(err){
														res.sendStatus(500);
														console.log('服务器错误，删除数据失败', err);
													}else{
														//删除单个ID写法
														// res.redirect('/admin/house');
														//删除多个ID写法
														if(idIndex<aID.length){
															idNext();
														}else{
															res.redirect('/admin/house');
														}
													}
												})
											}else{
												next();
											}
										}
									})
								}
							}else{
								req.db.query(`DELETE FROM house_table WHERE ID='${ID}'`, err=>{
									if(err){
										res.sendStatus(500);
										console.log('服务器错误，删除数据失败', err);
									}else{
										res.redirect('/admin/house');
									}
								})
							}
						
					}
				})
				idNext();

			}else{

			}
		}
	}
	



	
})