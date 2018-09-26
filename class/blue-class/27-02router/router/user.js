// const event = require('events').EventEmitter;

// let ev = new event;

const router = require('../router');

router.on('/login', (req, res)=>{
	console.log(222);
	res.write('1111');
})