// es5面向对象
class Promise2{
  constructor(fn){
    const _this=this;
    //重点
    this.__queue=[];

    this.__succ_res=null;
    this.__erro_res=null;

    this.status='';

    // resolve
    fn(function (...arg){
      _this.__succ_res=arg;

      _this.status='succ';

      _this.__queue.forEach(json=>{
        json.fn1(...arg);
      });
    }, 
    // reject
    function (...arg){
      _this.__erro_res=arg;

      _this.status='error';

      _this.__queue.forEach(json=>{
        json.fn2(...arg);
      });
    });
  }

  // fn1成功的执行函数，fn2失败的执行函数
  then(fn1, fn2){
    // 如果异步已经完成
    if(this.status=='succ'){
      fn1(...this.__succ_res);
    }else if(this.status=='error'){
      fn2(...this.__erro_res);
    // 如果异步还未完成，在resolve函数和reject函数被调用的时候执行
    }else{
      this.__queue.push({fn1, fn2});
    }
  }
}

Promise2.all=function (arr){
  let aResult=[];

  return new Promise2(function (resolve, reject){
    let i=0;

    next();

    function next(){
      arr[i].then(function (res){
        aResult.push(res);

        i++;
        if(i==arr.length){
          resolve(aResult);
        }else{
          next();
        }
      }, reject);
    }
  });
};