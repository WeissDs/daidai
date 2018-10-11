const cluster = require('cluster');
const os = require('os');

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
	console.log('子进程');
}

// console.log('多进程');

/*
	多进程和多线程：
		多进程——重：独立储存空间   安全，性能相对较低   	PHP
		多线程——轻：同一进程只内的线程共享空间   不安全，性能高		JAVA

		JS: 单进程，非阻塞
			前端：WebWorker		实现多进程
			后端：Node.js——cluster		实现多进程

	node框架
*/
