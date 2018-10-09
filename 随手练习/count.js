function Count(){

}

Count.prototype = {
	//数字反向
	reverse: function(item){
		var num=parseInt(item);
		var numReverse=0;
		while(num>0)
		{
		    var lastDigit=num%10;
		    numReverse=(numReverse*10)+lastDigit;
		    num=parseInt(num/10);
		}
		return numReverse;
	}

	//最大公约数
	gcd: function(num1,num2){

	}
}