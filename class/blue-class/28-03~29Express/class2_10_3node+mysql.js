const mysql = require('mysql');


//createConnection连接多个数据库，会造成卡顿 所以我们使用连接池，createPool

let db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	port: 3306,
	password: '',
	database: '20181018'
})

//增
db.query("INSERT INTO user(ID, name, gender, chinese, math, english) VALUES 0, 'dai111', '女', 90, 88, 2;", function(err, data){
	if(err){
		console.log('错误', err);
	}else{
		console.log(data);
	}
});

//删 WHERE后面跟条件 <,= 都可以用
db.query("DELETE FROM user WHERE ID=6", (err, data)=>{
	if(err){
		console.log('错误', err);
	}else{
		console.log(data);
	}
})

//改
db.query("UPDATE user SET name='haha' WHERE ID=7", (err, data)=>{
	if(err){
		console.log('错误', err);
	}else{
		console.log(data);
	}
})

//查
db.query("SELECT english, math From user WHERE ID=1", (err, data)=>{
	if(err){
		console.log('错误', err);
	}else{
		console.log(data);
	}
})