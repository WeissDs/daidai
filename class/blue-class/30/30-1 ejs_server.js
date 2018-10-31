const express = require('express');
//consolidate 模板引擎库
const consolidate = require('consolidate');

let server = express();
server.listen({
  //端口
  port: 8080,

  //数据库
  mysql_host: 'localhost',
  mysql_port: 3309,
  mysql_user: 'root',
  mysql_password: '',
  mysql_dbname: 'an_ju_ke',

  //超级管理员配置
  root_username: 'blue',
  root_password: 'e10adc3949ba59abbe56e057f20f883e',
});

server.use(express.static('template/'))


//选择一种模板引擎
server.set('html', consolidate.ejs);
//指定模板文件的扩展名
server.set('view engine', 'ejs');
//指定模板文件的路径
server.set('views', './template');


server.get('/aaa', (req, res)=>{
	res.render('1', {arr: [12,5,8,10]});
})

