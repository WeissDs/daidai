// const event = require('events').EventEmitter;

// let ev = new event;

const router = require('../router');

router.on('/login', (req, res)=>{
	console.log(req.post);
	
})

router.on('/reg', (req, res)=>{
	console.log(req.post);

})