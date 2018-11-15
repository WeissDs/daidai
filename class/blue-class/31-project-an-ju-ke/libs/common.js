const crypto = require('crypto');

module.exports = {
	//md5: function(str){} 可以简写为
	md5(str){
		let md5 = crypto.createHash('md5');
		md5.update(str);

		return md5.digest('hex');

	},
}