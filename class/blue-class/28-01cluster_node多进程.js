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