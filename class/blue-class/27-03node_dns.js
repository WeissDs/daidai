const dns = require('dns');

dns.lookup('www.w3school.com.cn', function(err, data){
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
})

let ip = '120.55.40.41';
dns.lookupService(ip, 80, (err, data)=>{
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
})