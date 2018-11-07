const express = require('express');

//express使用router不需要下载
let server = express();
server.listen(8050, '0.0.0.0');

//创建/user目录的路由
let router_user = express.Router();
//创建/user/vip目录的路由
let router_user_vip = express.Router();

//创建/user目录的路由
server.use('/router', router_user);
//创建/user/vip目录的路由
router_user.use('/vip', router_user_vip);



router_user.get('', (req, res)=>{
	res.send('用户根目录');
	res.end();
})
router_user_vip.get('/', (req, res)=>{
	res.send('我是vip');
	res.end();
})


//module.exports = router_user;   路由分文件导出的写法（将use写在此页面，只有主页面有server，分页面记得引入express）

