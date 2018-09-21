const zlib = require('zlib');
const fs = require('fs');

let rs = fs.createReadStream('js/jquery-3.2.1.min.js');
let ws = fs.createWriteStream('js/jquery-3.2.1.min.js.rar');

let gz = zlib.createGzip();

rs.pipe(gz).pipe(ws);

rs.on('error', err=>{
	console.log('没有此文件');
})
ws.on('finish', ()=>{
	console.log('完成');
})