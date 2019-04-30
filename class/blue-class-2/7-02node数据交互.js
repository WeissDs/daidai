const http = require('http');
const url = require('url');
const querystring = require('querystring');
// querystring.parse();	parse这个方法是将一个字符串反序列化为一个对象。
// querystring.stringify();	stringify这个方法是将一个对象序列化成一个字符串，与querystring.parse相对。
// querystring.escape();	escape可使传入的字符串进行编码（中文=>字符）
// querystring.unescape();	unescape方法可将含有%的字符串进行解码（字符=>中文）


let server = http.createServer((req, res)=>{
	//GET
	let { pathname, query: get }=url.parse(req.url, true);
	
	//POST
	let str = '';
	req.on('data', data=>{
		str+=data;
	})
	req.on('end',()=>{
		let post = querystring.parse(str);
		console.log(pathname, get, post);
	})
})
server.listen(8050);