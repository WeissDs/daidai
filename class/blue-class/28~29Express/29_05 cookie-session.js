/*

cookie、session：

1. cookie——浏览器存数据，在请求服务器的时候，会被带到请求里（服务器端和浏览器端都可以操作）
	缺点：容量有限（4k）（cookie是在请求头里传输的）、不安全（用户可以随意篡改）

在一个浏览器第一次请求一个服务器的时候会发送一个空的cookie[] , 服务器会返回一个cookie[sess_ID] 
就是一串uuid码， 用来标识该用户，等到下次这个浏览器再访问该服务器的时候，会将这个cookie[sess_ID]
带过去。

	风险：如果sess_ID泄露了  ———— 就叫做session劫持

	
	需要先添加cookie-parser：
	[1].设置：res.cookie(name, value, options{
		domain:
		expires: date
		maxAge: int
		path
		secure: true
		signed: true
	})
	[2].读取：res.cookies
	[3].安全（防篡改）：

2. session——只存在服务器端
	优点：容量无限（服务器容量多大就能多大）、安全（用户无法看见和篡改）
	session是基于cookie的

	[1].设置： req.session['cash']=XXX
	[2].读取： req.session -= 100
	[3].安全（防篡改）：

	其中自动生成的：
	session    就是  sess_ID
	session.sig   就是  sess_ID的签名（防止篡改）






路由：



渲染（服务端渲染，客户端渲染）：



*/

const express = require('express');

let server = express();
server.listen(8050, '0.0.0.0');

server.use(express.static('www/'));
server.get('/favicon.ico', (req, res)=>{
	res.end();
})


//cookie 和 session-----------------------------------------------------------------------------

//原生设置cookie的方法
res.setHeader('Set-Cookie',['ID=123']);

//下载 cookie-parser 和 cookie-session  -D


//cookie-parser
const cookieParser = require('cookie-parser');

server.use(cookieParser('dfiiii')) //值可以是数组，也可以是字符串

server.get('/cookie', (req, res, next)=>{
	//读取一般的cookie   （ 可以查看session的数据信息！ ）
	console.log(req.cookies);
	//读取签名的cookie
	console.log(req.signedCookies);

	//设置一般的cookie
	res.cookie('hh', 131313);
	//设置签名的cookie
	res.cookie('dd', 'ofisoneonnennn', {signed: true});

	res.end();
})


//cookie-session
const session = require('cookie-session');
server.use(session({
	secret: 'doiwoieoj',
	name: 'session',
	// key: ['ddai123'],
	maxAge: 24*60*60*100   //24hours
}));

server.get('/session', (req, res, next)=>{
	//（ 代代的猜测：  可能是因为session的值是存在服务器端的，所以用req去设置值，而不是像cookie一样使用res。 
	//可能server.res操作就是将数据存在浏览器端）
	req.session['cash']=2000;
	console.log(req.session);

	//访问计数器
	if(req.session['count']){
		req.session['count']++;
		res.send(`这是第${req.session['count']}次访问本网站`)
	}else{
		req.session['count']=1;
	}
	
	res.end();
})