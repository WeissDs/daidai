// 原来的面向对象写法
function Promise2(fn){
	const _this = this
	// 标记成功/失败
	this.status = "";
	// 事件队列
	this.__queue = [];
	// 成功和失败的数据
	this.__succ_res = null;
	this.__erro_res = null;

	fn(function(...arg){
		_this.status = "succ"
		_this.__succ_res = arg;
		_this.__queue.forEach(item=>{
			item.fnSucc(arg);
		})
	},function(...arg){
		_this.status = "erro"
		_this.__erro_res = arg;
		_this.__queue.forEach(item=>{
			item.fnErro(arg)
		})
	});


}

Promise2.prototype.then=function(fnSucc, fnErro){
	if(this.status == "succ"){
		fnSucc(this.__succ_res);
	}else if(this.status == "erro"){
		fnErro(this.__erro_res);
	}else{
		this.__queue.push({fnSucc,fnErro});
	}
	
}