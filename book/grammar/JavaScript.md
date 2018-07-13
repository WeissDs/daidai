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

1. 



##Ajax

1. 

    
    

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