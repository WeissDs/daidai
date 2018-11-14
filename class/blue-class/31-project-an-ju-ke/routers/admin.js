const express = require('express');

let admin_router = express.Router();

module.exports = admin_router;

admin_router.get('/', (req, res)=>{
	console.log('admin');
})