//EventEmitter 事件列队
const event = require('events').EventEmitter;

let ev = new event;
// console.log(ev);

ev.on('dai', (a,b,c)=>{
	console.log('接收到了1个事件',a,b,c);
})

ev.emit('dai', 12,3,4);


//node 的模块是单例模式

let a = require('./27-01test/a');
let b = require('./27-01test/b');
console.log(a.c==b.c);    //true


//而 js的对象不是单例模式

let d1 = new Date();
let d2 = new Date();
console.log(d1==d2);     //false