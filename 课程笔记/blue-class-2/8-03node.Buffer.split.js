Buffer.prototype.split=Buffer.prototype.split||function(b){
	let arr=[];

	let cur=0;
	let n=0;
	//indexOf()如果没有要找的这个字符串 返回值为-1
	while((n=this.indexOf(b,cur))!=-1){
		n = this.indexOf(b, cur);
		arr.push(this.slice(cur,n));
		cur=n+b.length;
	}

	//到最后一段的时候其实是找不到用来分割的字符串的，所以要补上
	arr.push(this.slice(cur));

	return arr;
}