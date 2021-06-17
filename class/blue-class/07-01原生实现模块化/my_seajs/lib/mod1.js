define(function(require, exports, module){
	exports.a = 12
	exports.b = 5

	require('./mod2.js')
	require('./mod2.js')
});