
//node.js中的Buffer 对象
let a = new Buffer('abc');
let b = new Buffer('def33ghi33jkl');

//将Buffer对象连接起来的方法
let c = Buffer.concat([a,b]);

console.log(a,b);
console.log(c);

/*
对Buffer进行

1.查找		indexOf()
2.截取		slice()
3.切分		没有split方法 需要自己写

*/

//查找
console.log(b.indexOf('33'));
console.log(b.indexOf(new Buffer('33')));
//截取
console.log(b.slice(3,-3));