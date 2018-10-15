const express = require('express');

let server = express();
server.listen(8050);

//接口写法
server.get('/www', (req, res)=>{
	res.write('12222');
	res.end();
})
server.post('/aa', (req, res)=>{

})

//静态文件
server.use(express.static('./'));