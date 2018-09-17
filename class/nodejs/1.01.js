/*
node -v 查看版本
npm     node的包管理工具

shift+鼠标反键 在文件所在位置 打开命令窗口

node 文件name   文件的运行方式



*/

//在控制台输出
console.log('Server running at http://192.168.5.131:6001');

//载入HTTP模块
var http = require('http');

//创建服务器
http.createServer(function(request, response){
	response.writeHead(200, {'content-type':'text/plain'});
	response.end('daidai');
}).listen(6001);

