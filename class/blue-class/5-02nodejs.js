const http=require('http'); //引入http模块

/* 默认端口
 *
 * http: 80
 * ftp: 21
 * mysql: 3306
 *
 * node.js的三大特性：1.单线程 2.非阻塞IO 3.事件循环机制
 *
*/

//有浏览器请求时执行的回调函数
let server = http.createServer((require,response)=>{
	//require   请求  接收的数据（输入）
	//response  响应  发送的数据（输出）

	console.log('aaa');
	response.write('aaa');
	response.end();
});
//监听8080端口
server.listen(8080);