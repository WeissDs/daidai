const fs = require('fs');  //file system

const assert = require('assert'); 

//文件系统
fs.readFile('1.txt', function(err, data){
	//没有错误时err=null
	if(err){
		console.log(err);
	}else{
		console.log(data.toString());
		console.log(data);
	}
})

//断言
function sum(a,b){
	assert(typeof a=='number', '第一个参数要是数字');
	assert(typeof b=='number', '第二个参数要是数字');

	return a+b;
}
// console.log(sum('d',2));
console.log(sum(1,2));
