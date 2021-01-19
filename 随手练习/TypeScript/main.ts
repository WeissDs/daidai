const a: string="aaaa"
console.log(a);

let b: any[]=[{qq:'qw'},{qq:'wwww'} , {qq:'123'}]
let result = b.map(item=>{
	return item;
})
console.log(result)

class Change{
	fun1(){
		console.log(1);
	}
}

let change1 = new Change();
change1.fun1();