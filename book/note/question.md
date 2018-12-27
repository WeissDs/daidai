######研究腾讯的负载均衡？ 突发请求？node的cluster单机进行负载？（架构师）
######设计模式？

#####jquery不支持ES6语法？？？

####Mui框架的新跳转方式？

####a标签的onclick="return confirm('xxx')"  ; A instanceof B

####encodeURIComponent延展



##$(form).serialize()
##mui的点击事件 mui("#upForm").on("tap", ".setting-commit", function() {})
##
    var formData = new FormData();
    //注意：此处第3个参数最好传入一个带后缀名的文件名，否则很有可能被后台认为不是有效的图片文件
    formData.append("file", blob, file.name);
    // 上传文件

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
9. react 里css的伪类选择器：nth-child()用不了？
10. Vue的生命周期


    beforeCreate（创建前）
    在数据观测和初始化事件还未开始

    created（创建后） 完成数据观测，属性和方法的运算，初始化事件，$el属性还没有显示出来bef

    oreMount（载入前） 在挂载开始之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上。

    mounted（载入后） 在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html页面中。此过程中进行ajax交互。

    beforeUpdate（更新前） 在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。

    updated（更新后） 在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。

    beforeDestroy（销毁前） 在实例销毁之前调用。实例仍然完全可用。

    destroyed（销毁后） 在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。

    “并挂载到实例上”是什么意思啊？