##DOM

1.DOM:

    D:document（文本）   O:object（对象）   M:model（模型）
    
    HTML在js中的对象:document
    
2.BOM:

    B:browser（浏览器）   O:object（对象）   M:model（模型）
    
    浏览器在js中的对象:window
    
##数据类型转换和NaN

1.parseInt()将字符串转化为整数数字（显式类型转换||强制类型转换）


    parseInt(12px) ============ 12
    parseInt(122.56) ========== 122
    parseInt(we) ============== NaN
    parseInt(12, 8) =========== 10(将八进制的12转化为十进制 === 10)
    
2.parseFloat()将字符串转化为小数数字（显式类型转换||强制类型转换）


    parseFloat(3.45) ========== 3.45
    parseFloat(34 )============ 34
    parseFloat(02) ============ 2
    
    
3.隐式类型转换

    '=='、 '==='、 '-'(减法)
    
4.NaN

    在js中  NaN==NaN ========== false
    isNaN() 可以判断是不是非数字NaN
    
    
##程序流程控制

1. if、switch、?:

if的两种用法

    if(){}else(){}
    
    if(){}else if(){}else if(){}else(){}
    
只用判断一个变量的值的时候可以用switch

    switch(变量)
    {
        case 值1:               （如果变量等于值1-----if）
                breack;
        case 值2:               （如果变量等于值2-----else if）
                breack;
        ......
        default:                （else）
    }
    
    
##函数

####函数传参

    1.普通传参
    function show(num){
        alert(num);
    }
    2.属性名的传参
    function change(name, value)
    {
        oDiv.style.name = value;==========X js认为name是一个属性而不是参数
        oDiv.style[name] = value;
    }
    
####操作属性的两种方法

    oDiv.style.color = red;
    oDiv['style']['color'] = red;
    =====================================================
    函数调用
    show(5);
    
    
##变量和字符串

字面量（常量）: 字符串，数字....
变量: let a
    

##Json


##异步
####Ajax

######实现方式：
XMLHttpRequset          (follow the same-origin policy)

####Fetch
Fetch API 是基于 Promise 设计的



    
    

##各种宽高

    网页可见区域宽： document.body.clientWidth;
    网页可见区域高： document.body.clientHeight;
    网页可见区域宽： document.body.offsetWidth (包括边线的宽);
    网页可见区域高： document.body.offsetHeight (包括边线的宽);
    网页正文全文宽： document.body.scrollWidth;
    网页正文全文高： document.body.scrollHeight;
    网页被卷去的高： document.body.scrollTop;
    网页被卷去的左： document.body.scrollLeft;
    网页正文部分上： window.screenTop;
    网页正文部分左： window.screenLeft;
    屏幕分辨率的高： window.screen.height;
    屏幕分辨率的宽： window.screen.width;
    屏幕可用工作区高度： window.screen.availHeight;


##常用js方法

####数组：
    concat()    连接数组
    push()      添加元素到数组末尾
    join('&')   以&连接数组的元素 返回字符串
    slice()

####字符串：
    slice()
    split()
    indexOf()




##面向对象

类，对象，实例，构造函数的理解：
所谓“类”就是对象的模板，对象就是“类”的实例。JavaScript语言没有“类”，而改用构造函数（constructor）作为对象的模板。

###new 操作符 都做了什么

#####传统面向对象的class + new的方式创建对象，在javascript中，我们将这类方式成为Pseudoclassical。

#####执行如下代码：

  var obj = new Base();  

#####new操作符具体干了什么呢?其实很简单，就干了三件事情。

    var obj  = {}; obj.__proto__ = Base.prototype; Base.call(obj);  

    第一行，我们创建了一个空对象obj
    第二行，我们将这个空对象的__proto__成员指向了Base函数对象prototype成员对象
    第三行，我们将Base函数对象的this指针替换成obj，然后再调用Base函数，于是我们就给obj对象赋值了一个id成员变量，这个成员变量的值是”base”

##闭包
######javascript特殊的变量作用域（"链式作用域"结构）： 函数外部无法读取函数内部的局部变量，js的子对象会一级一级向上找所有父对象的变量。


######闭包：闭包就是能够读取其他函数内部变量的函数


##事件冒泡、事件捕捉、事件委托

##this



##同步异步、阻塞非阻塞IO、流操作
####同步
在调用操作未完成前，调用者一直在等待这个结果，不得到结果不返回。

####异步
在调用后，调用者直接返回，不主动获取和等待调用结果。而是被调用者通过通知或者回调函数来通知调用者。

####阻塞
调用时，由于被调用者状态未就绪，导致调用线程被挂起。状态未就绪并不是指调用者运行缓慢，时间久。

####非阻塞
调用时，被调用者如果就绪则立即返回结果，如果未就绪也会返回一个错误值，告诉调用者当前的状态。调用者可根据错误值选择再次调用，还是执行异常处理。

####区别
在上面的表述中，很容易发现同步和阻塞，异步和非阻塞是一个概念（也可能我表达能力差。哈哈）。实际上，同步异步、阻塞非阻塞分别是不同维度的概念：

同步异步侧重于描述调用者进行调用之后的行为（以io读写操作为例）:
同步在调用后，会主动去获取调用结果，无论是以阻塞方式还是非阻塞轮询方式，调用者需要自己去调用send和recv读写数据。所以像select，epoll等都是同步方式。 
异步在调用后，就继续执行其它的工作，读取数据的工作由内核去操作，当数据已经就绪并拷贝到用户空间后，通过通知或者回调函数的形式通知调用者进行数据处理。像mina就是典型的异步模式。 
由此可见，同步异步的区别在于同步需要调用者读写数据，而异步不需要读写数据.

####阻塞和非阻塞侧重于描述被调用者在执行时所处于的状态：
阻塞操作是被调用者由于数据未准备好，如内核发送缓冲区满或者接收缓冲区空等原因，导致send和recv接口无法返回，此时操作系统将读写线程挂起，让出时间片。 
注意：读写操作慢，并不是上文所说的阻塞情况。 
非阻塞操作正好相反，当数据未准备好时，会立即返回给调用者一个结果，如－1，同时设置errno，调用者根据errno判断是否要重新读取数据。



##cookie, session, Token
######用cookie session token 做用户登录验证的方法和区别

####cookie——浏览器存数据，在请求服务器的时候，会被带到请求里（服务器端和浏览器端都可以操作）

    缺点：容量有限（4k）（cookie是在请求头里传输的）、不安全（用户可以随意篡改）

    在一个浏览器第一次请求一个服务器的时候会发送一个空的cookie[] , 服务器会返回一个cookie[sess_ID] 
    就是一串uuid码， 用来标识该用户，等到下次这个浏览器再访问该服务器的时候，会将这个cookie[sess_ID]
    带过去。

    风险：如果sess_ID泄露了  ———— 就叫做session劫持

    
    需要先添加cookie-parser：
    [1].设置：res.cookie(name, value, options{
        domain:
        expires: date
        maxAge: int
        path
        secure: true
        signed: true
    })
    [2].读取：res.cookies
    [3].安全（防篡改）：

####session——只存在服务器端
    优点：容量无限（服务器容量多大就能多大）、安全（用户无法看见和篡改）
    session是基于cookie的

    [1].设置： req.session['cash']=XXX
    [2].读取： req.session -= 100
    [3].安全（防篡改）：

    其中自动生成的：
    session    就是  sess_ID
    session.sig   就是  sess_ID的签名（防止篡改）