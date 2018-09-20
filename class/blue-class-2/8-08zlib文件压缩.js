const zlib = require('zlib');
const fs = require('fs');

let rs = fs.createReadStream('6-01node.js');
let ws = fs.createWriteStream('6-01node.js.zg');

let gz = zlib.createGzip();

rs.pipe(gz).pipe(ws);

rs.on('error', err=>{
	console.log('没有此文件');
})
ws.on('finish', ()=>{
	console.log('完成');
})