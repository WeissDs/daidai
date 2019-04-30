##DOM

    D:document（文本）   O:object（对象）   M:model（模型）
    
    HTML在js中的对象:document

##BOM

####BOM概念

    B:browser（浏览器）   O:object（对象）   M:model（模型）
    
    浏览器在js中的对象:window
    

####window.location对象
<table>
    <tr style="background-color: #666; color: #fff" >
        <th>属性</th>
        <th>描述</th>
    </tr>
    <tbody>
        <tr>
            <td>href</td>
            <td>当前完整的URL</td>
        </tr>
        <tr>
            <td>host</td>
            <td>当前URL的主机名和端口号</td>
        </tr>
        <tr>
            <td>hostname</td>
            <td>当前URL的主机名</td>
        </tr>
        <tr>
            <td>port</td>
            <td>当前URL的端口号</td>
        </tr>
        <tr>
            <td>pathname</td>
            <td>当前URL的路径部分</td>
        </tr>
        <tr>
            <td>hash</td>
            <td>从井号（#）开始的URL（锚）</td>
        </tr>
        <tr>
            <td>search</td>
            <td>从问号（?）开始的URL(查询部分)</td>
        </tr>
        <tr>
            <td>protocol</td>
            <td>当前URL的协议</td>
        </tr>
    </tbody>
</table>

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

####函数声明/ 函数表达式/ 自执行函数

######定义函数的两种方式： 函数声明 和 函数表达式

1. 函数声明：

    函数声明的特征是函数声明提升，在执行代码之前会先读取函数声明
    ```javascript
    function doSomething(){ ... }
    ```

2. 函数表达式：

    匿名函数为函数表达式

    ```javascript
    function (){}
    ```
    非匿名函数如果是作为赋值表达式的一部分的话，那它就是一个函数表达式

    ```javascript
    var a = function fn(){}  //这种函数表达式不稳定，在js中有可能fn会被认作函数声明
    var a = (function fn(){})  //替换为这种方法
    var b = function (){}
    ```
    ()中的函数为函数表达式，()是分组操作符，它的内部只能包含表达式

    ```javascript
    (function fn(){})
    ```

3. 自执行函数：

```javascript
    (function(){ ... })() ... 最常见写法
    (function(){ ... }())
    var fn = function(){ ... }()
    var fn = (function name(){})()
```

####函数参数

1. ECMAScript 函数不介意传递进来多少个参数，也不在乎参数的数据类型
    ######原因： ECMAScript 中的参数是用一个数组表示的，在函数体内可以通过arguments对象来访问这个参数数组
    ######注意：arguments只是类似数组（并不是Array实例）它使用了length属性来确定传递了多少个参数

2. num1和arguments[0]是相同的，改变arguments[0] num1会被重写(如下例子中num1会被改写为10)，因为arguments对象中的值会自动反映到对应的命名参数，但读取这两个值并不会访问相同的内存空间。
    ```javascript
    function doAdd(num1, num2){
        arguments[0] = 10;
        console.log(arguments[1]+num1);
    }
    ```
3. ECMAScript 函数不能像java等语言一样实现重载？？？？？？？？？？？


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


##this

####this和e.target/e.currentTarget的区别????????????

```javascript
    $('#oDiv').on('事件',function(e){
        let event = e.target||e.dataTransfer?????????????????????????
    })
```




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


####e.target/e.currentTarget

```javascript
//e.target 可以用来做事件委托
$('#box')[0].onclick=function(e){
    console.log(e.target)   //返回引发触发事件的元素 也就是点击的#box内的那个元素
    console.log(this)       //返回#box元素
}
```

####禁止元素的默认事件

    1. return false
    2. event.preventDefault



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

##js深拷贝和浅拷贝

```javascript
function arr_copy(){
    let arr1 = [2,56,24242,266];
    let arr2 = arr1;

    arr2.push(5);

    console.log('arr2 = arr1的测试结果：')
    console.log(arr1);  
    console.log(arr2);  
     
}

function arr_deep_copy(){
    let arr1 = [2,56,[34,66],24242,266];
    let arr2 = deepClone(arr1);

    arr2[2].push(5);

    console.log('深拷贝函数的测试结果：')
    console.log(arr1);
    console.log(arr2);

}

//深拷贝的函数封装
function deepClone(obj){
    let result = Array.isArray(obj)?[]:{};
    if(obj && typeof obj === 'object'){
            for(key in obj){
                 //obj.hasOwnProperty(key)是什么意思？
                 if(obj.hasOwnProperty(key)){
                    if(obj[key] && typeof obj[key] === 'object'){
                        result[key] = deepClone(obj[key]);
                    }else{
                        result[key] = obj[key];
                    }
                 }
            }
    }
    return result;
}

//js 里concat 和 slice会浅拷贝对象，但它不是深拷贝（只拷贝了一级属性）, 其余方法都不是拷贝而是引用。

function slice_shallow_copy(){
    let arr = [23, 45, 18, 29, 1, 1, 1, 2, [23, 4], 1];

    console.log('slice方法的测试结果：')
    console.log(arr.slice(3));
    console.log(arr);
    console.log(arr.pop(2));
    console.log(arr);
    console.log(arr.sort());
    console.log(arr);
}


//以下代码可以证明 arr的 slice方法是浅拷贝（自己写的）

    function a(){
        let arr1 = [1,'dfsf', [3,4,'5'],'e',6,[3,3]];
        let cc = arr1.slice(1,3)
        cc[1][1]=2
        console.log(cc);
        console.log(arr1);
    }
         

//除了递归，我们还可以借用JSON对象的parse和stringify(jquery里有extend方法)
//JSON.stringify与JSON.parse除了实现深拷贝，还能结合localStorage实现对象数组存储？？？？
function json_deep_copy(){
    let a = [0, [1, 2], 3, 4];

    let b = JSON.stringify(a);
    let c = JSON.parse(b);

    a[1].push(6);

    console.log('JSON方法的测试结果：');
    console.log(a);
    console.log(b);
    console.log(c);
}
arr_copy();
arr_deep_copy();
slice_shallow_copy();
json_deep_copy();
```

##alert

####alert——是模态对话框，阻塞所有程序（alert是无法多设备同步的）

####改写alert的方法

##笔记
```javascript
let _alert = window.alert;
window.alert = function(str){
    _alert(str)
}
//这是在干嘛？
```

```javascript
var factorial = function f(num){
  if(num<=1){
    return 1;
  }else{
    return num*f(num-1);
  }
}

var b = factorial;
factorial = null;

console.log(b(4));

var cc = '123';
function a(){
  console.log(cc);
  var cc = 1;  //这句话会导致a()函数内获取不到全局变量cc
}
a();
```