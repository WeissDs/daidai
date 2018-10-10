function Count(){

}

Count.prototype = {
	//数字反向
	reverse: function(item){
		if(parseFloat(item)){
			var num=parseInt(item);
			var numReverse=0;
			while(num>0)
			{
			    var lastDigit=num%10;
			    numReverse=(numReverse*10)+lastDigit;
			    num=parseInt(num/10);
			}
			return numReverse;
		}else{
			return false;
		}
		
	},

	//最大公约数
	gcd: function(num1,num2){
		if(parseFloat(num1) && parseFloat(num2)){
			var temp=null;
			// var u=oTxt1.value;
			// var v=oTxt2.value;
			while(num2!=0)
			{
			    temp=num1%num2;
			    num1=num2;
			    num2=temp;
			}
			// var a="最大公约数是"+num1;
			return num1;
		}else{
			return false;
		}
		
	}
}