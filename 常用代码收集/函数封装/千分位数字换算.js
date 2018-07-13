function toThousands(num){
	num = num.toString();
	let result = '';
	let counter = num.length;

	
	for(let i=0;i<num.length;i++)
	{
		counter--;
		result = result + num.charAt(i);
		if(counter%3==0 && counter!=0){
			result = result + ',';
		}
	}
	return result;
}



//没算出来 如果不用counter
// function toThousands1(num){
// 	let result = '';
// 	num = num.toString();
// 	for(let i=num.length-1;i>=0;i--)
// 	{
// 		result = num.charAt(i) + result;
// 		if(i%3==0 && i!=num.length-1 && i!=0){
// 			result = ','+result;
// 		}
// 	}
// 	return result;
// }