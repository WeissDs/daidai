const cluster = require('cluster');
const os = require('os');   //operating system： 操作系统
const process = require('process');

// if(cluster.isMaster){
// 	cluster.fork();
// }


if(cluster.isMaster){
	console.log(os.cpus());
	for(let i=0;i<os.cpus().length;i++){
		cluster.fork();
	}
	console.log('主进程');
}else{
	console.log('子进程'+process.pid)
};
	

// console.log('多进程');

/*
	1. 多进程和多线程：
		多进程——重：独立储存空间   安全，性能相对较低   	PHP
		多线程——轻：同一进程只内的线程共享空间   不安全，性能高		JAVA

		JS: 单进程，非阻塞
			前端：WebWorker		实现多进程
			后端：Node.js——cluster		实现多进程
		
		普通程序无法创建多进程，只有系统有创建进程的权限

			1. 1 那么js是怎么创建多进程？
				通过内部分裂（fork）

	2. node框架
		Express、KOA、egg、thinkjs

		Express : 基于回调
		KOA1.X ： 基于generator 和 yield
		KOA2.X ： 过渡 yield 和 await 都可以使用
		KOA3.X ： 基于async 和 await（KOA1.x 写的项目不兼容）
*/
