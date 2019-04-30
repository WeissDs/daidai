let a=1;
let b=11;

console.log(a+b);

//require('http')就是引入一个http模块的意思
const http = require('http');

//request response 可随意简写  req，res等
let server = http.createServer((request, response)=>{
	//后台会执行两次这个命令，是高级浏览器会自动去请求favicon的原因导致的
	console.log(request.method);  //GET
	console.log(request.url);  // /和/favicon.ico

	response.write('aaaaaa');
	response.end()
})

server.listen(8080);



//node什么情况下配环境变量？
// 一般在开发机上很少配，在生产机上会配
//配（版本、数据库） 配置文件和环境变量都可以配