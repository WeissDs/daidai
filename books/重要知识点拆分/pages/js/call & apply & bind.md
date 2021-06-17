
##a.call(b, 参数)

#####例1. b使用a的方法（相当于a的this指向了b）

    function a(){
        this.dai = 12
        this.xi = 0
        this.yu = 34
    }
    function b(){
        this.age=1
        // b的this指向了a？？将函数a的方法绑到b的this上
        a.call(this)
    }
    let bb = new b();
    
    let result = bb.dai
    console.log(result) ------12

#####例2. call apply bind

    var age = '19'
    var myObj = {
        name:'小赖',
        myAge:this.age,
        sayName:function(){
            console.log(this.name + '今年' + this.age)
        }
    }
    myObj.sayName(); // 小赖今年 undefined

    var hero = {
        name:'艾希',
        age:'100'
    }
    myObj.sayName.call(hero); //艾希今年100
    myObj.sayName.apply(hero); //艾希今年100
    myObj.sayName.bind(hero)(); //艾希今年100

##const $ = document.querySelectorAll.bind(document)

#####document使用$方法（将this绑定在document）

#####类数组转数组

    arr = Array.prototype.slice.call($('.pane-node'),0);

    为什么可以用call方法转换？


##个人理解

#####例1中在写面向对象时，a.call(this) 我理解为：将a的this替换为b对象的this 在b中执行一次  运行结果是：b被实例化后 a的属性被给到了b


#####例子

```
    <body>
        <div id="box">
            <a href="#" id="s1">12</a>
            <a href="#" id="s2">14</a>
            <a href="#" id="s3">28</a>
        </div>
        <script>
            // var $ = document.querySelectorAll.bind(document)
            // console.log($('#s1'))
            var $ = document.querySelectorAll;
            console.log($.bind(document)('#s1'))
            console.log($.call(document, '#s1'))

            // call apply 在对象继承的用法
            function oo(){
                function a(){
                    this.dai = 12
                    this.xi = 0
                    this.yu = 34
                }
                function b(){
                    this.age=1
                    // b的this指向了a？？
                    a.call(this)
                }
                let aa = new a();
                let bb = new b();
                
                // let result = bb.dai
                let result = bb.age
                console.log(result)
            }
            oo();
                
            // 两个对象共享属性
            let a = {
                dai: 12,
                xi: 0,
                yu: 34,
            }

            let b = {
                age: 1
            }

            a.age=b;
            a.age.age=4
            console.log(a)
            console.log(b)

        </script>
    </body>

```