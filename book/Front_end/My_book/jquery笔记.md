##Jquery笔记

[jquery别人的方法整理1](https://www.cnblogs.com/akou/p/4461557.html)

[jquery别人的方法整理2](https://www.cnblogs.com/akou/p/4477706.html)




##Jquery问题

#####写select全选遇到的问题

jq选择id的问题+jq用id选择select选框作为全选按钮时的问题

```javascript
    let ocheckAll = $('#check_all');   //全选按钮ocheckAll
    // let ocheckAll1 = $('#check_all')[0];
    let acheck = $('.id-check');    //需要被全选的按钮acheck们

      ocheckAll.click(function(){
        if(ocheckAll[0].checked){
          for(let i=0; i<acheck.length; i++){
            acheck[i].checked = true;
          }
        }else{
          for(let i=0; i<acheck.length; i++){
            acheck[i].checked = false;
          }
        }
      })

    //如果将ocheckAll换成 ocheckAll1 = $('#check_all')[0]这样选择  下面的if(ocheckAll.checked) 会直接执行，点击判断无效

```