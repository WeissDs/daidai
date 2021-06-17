const sea={
  use(path, fn_end){
    $.ajax({
      url: path,
      success(str){
        parseStr(str, fn_end);

        function parseStr(str, fn_end){
          function define(fn){
            let module={
              exports: {}
            };

            fn(function (){}, module.exports, module);

            fn_end(module.exports);
          }

          //第一步、require都找出来
          let tmp=str.substring(str.indexOf('{')+1, str.lastIndexOf('}'));
          // 这里用的方法和课程不同
          let arr=tmp.match(/require\([^\(\)]+\)/g).map(item=>{
            return item.substring(item.indexOf('(')+1, item.lastIndexOf(')')).slice(1,-1);
          });

		  // 写完整后去掉
          eval(str);



          //从这里开始没听懂了呵呵
          let i=0;
          let json={};
          function next(){
            $.ajax({
              url: arr[i],
              success(str){
                parseStr(str, function (mod){
                  json[arr[i]]=mod;

                  i++;
                  if(i==arr.length){
                    //第二步、执行代码
                    // str.replace('require(xxxx)', )
                    eval(str);
                  }else{
                    next();
                  }
                });
              }
            })
          }


        }
      },
      error(){
        alert('失败');
      }
    })
  }
};
