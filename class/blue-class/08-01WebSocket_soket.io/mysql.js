const mysql = require('mysql');



// 连接服务器 host(主机) port(这里我做了修改，默认是3306，没有修改可以不写此参数)  user() password(没有修改默认为空字符串) database(连接到哪个数据库)
// let db = mysql.createConnection({host:'localhost', port:3307, user:'root',password:'', database:'websocket-chat'})

// 因为只有一个数据库连接会导致拥塞，所以我们要使用 连接池 createPool去创建连接
let db = mysql.createPool({host:'localhost', port:3307, user:'root',password:'', database:'websocket-chat'})


db.query('SELECT * FROM user_table', (err,data)=>{
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
})