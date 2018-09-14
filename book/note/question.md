######研究腾讯的负载均衡？ 突发请求？node的cluster单机进行负载？（架构师）
######设计模式？

######问题

1. DOM操作的原理，怎么影响性能的
2. node起服务器为什么前端跨域也能收到数据
3. 浏览器解析数据的顺序，dom tree+style（这里的顺序不明确）和render tree
4. js为什么是单线程（线程和进程的定义），js是单线程为什么可以异步操作（是否是因为浏览器内核是多线程？）
5. this事件绑定(call(),bind(),apply())


    function show(){
        alert(this.getAttribute('src'))
    }
    let aImg=$('.img');
    for( let i=0;i<aImg.length;i++ ){
        //aImg[i].onclick=show();  //为什么这样写会直接执行show()?
        aImg[i].onclick=function(){
            show();
        }
    }

    有没有办法把this绑定到对应的aImg元素上？

    function show(now){
        alert(now);
    }
    let aImg=$('.img');
    for( let i=0;i<aImg.length;i++ ){
        aImg[i].onclick=function(){
            let now = this.getAttribute('src');
            show(now);
        }
    }


6. 事件冒泡 , 事件捕获， 事件委托  不同浏览器都是默认事件是事件冒泡吗？<br>

jquery的 $('#products').on('click', 'img', function(){})

7. 闭包：


    function f1(){
        var n=999;
        nAdd=function(){n+=1}
        function f2(){
            alert(n);
        }
        return f2;
    }

    var result=f1();
    result(); // 999

    nAdd();
    result(); // 1000

在什么情况下需要var result=f1();？是只要函数返回值是一个函数的情况？为什么不可以直接运行
闭包是能在外部用函数内部变量的函数？

    var fn = function() {
        for (var i = 0; i < 3; i++) {
            setTimeout(function() {
                console.log(i);
            }, 0);
            console.log(i);
        }
    };
    fn();

    for (var i = 0; i < 3; i++) {
        setTimeout((function(i) {
            return function() {
                console.log(i);
            };
        })(i), 0);
        console.log(i);
    }

为什么这也叫做闭包？

8. 阻塞IO、非阻塞IO、和同步异步有关系吗？ node.js的非阻塞IO是什么？