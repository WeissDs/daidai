	/*
	8-04原生文件解析 的瑕疵：

	1. 会等到所有数据到达后再处理   :   应该收到一部分解析一部分  极大节约内存

	2. 用了fs.readFile和fs.writeFile

	http.createServer((req, res)=>{
		fs.readFile('data/index.html', (err,data)=>{
			if(err){}else{
				res.write(data);
			}
		})
	})
	readFile会把所有数据读到内存中，然后回调：
	（1） 及其占用内存
	（2） 资源利用及其不充分

	影响服务器性能的因素： 内存 磁盘



	3. 解决以上问题的方法：
	流：  读一点，发一点；读一点，解析一点；

	*/

const fs = require('fs');
const http = require('http');

//读取流
let rs = fs.createReadStream('1.php');
//写入流
let ws = fs.createWriteStream('2.php');
//读写流  压缩，加密 都是读写流


//判断读取的数据是否存在 不做判断的话文件读取不到服务器会崩。。。
rs.on('error', err=>{
	console.log('读取失败');
})

//判断写入是否完成
ws.on('finish', ()=>{
	console.log('完成');
})

rs.pipe(ws);