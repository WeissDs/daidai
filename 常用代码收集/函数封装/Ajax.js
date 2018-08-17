/**
 * Created by daixiyu on 2017/8/7.
 */

 // 原生js兼容IE6写法

function ajax(url,fnSucc,fnFaild)
{
    //创建Ajax对象XMLHttpRequest();  IE6不兼容

    if(window.XMLHttpRequest)    //加上window是为了在IE6中不会因为变量没有定义而报错
    {
        var oAjax=new XMLHttpRequest();
    }
    else
    {
        // 兼容IE6
        var oAjax=new ActiveXObject("Microsoft.XMLHTTP"); 
    }
    
    //连接服务器   W3school上用的是t='+Math.random()来取消缓存
    oAjax.open('GET',url+'?t='+new Date().getTime(),true);

    //发送请求
    oAjax.send();

    //接收返回
    oAjax.onreadystatechange=function()
    {
        if (oAjax.readyState == 4)
        {
            if (oAjax.status == 200)
            {
                fnSucc(oAjax.responseText);
            }
            else
            {
                fnFaild(oAjax.status);
            }
        }
    };
}

//原生JS
function ajax1(url, fnSucc, fnFaild)
{
    let xhr = new XMLHttpRequest();   //(xhr.readyState==0)

    xhr.open('GET', url+'?t='+new Date().getTime(), false);   //true是异步，false是同步(xhr.readyState==1)

    xhr.send();  //(xhr.readyState==2)

    xhr.onreadystatechange=function(){
        // 测试
        alert(xhr.readyState);  //通信状态：0:初始化——对象创建完毕 1:已连接 2:已发送 3:已接收-头head 4:已接收-body
        alert(xhr.status);  
        if(xhr.readyState == 4)
        {
            /*
            http状态码:
                1XX     消息
                2XX     成功
                3XX     重定向
                    301     永久重定向（一般不用）
                    302     临时重定向

                    304     从缓存拿数据

                4XX     请求错误（客户端）
                5XX     服务端错误

                其余的可自定义
            */
           
            if(xhr.status >= 200 && xhr.status<300 || xhr.status==304 )  
            {
                fnSucc(xhr.responseText);
            }else{
                fnFaild( xhr.status);
            }
        }
    }
}

// 消息头 header  （get请求的数据存放在header中，在url中传输）

//   1.容量： 32k
//   2.在url中看得见
//   3.有缓存

//   利于分享和收藏


// 消息体 body （POST请求的数据存放在body中）
//   1.容量： 1G
//   2.在url中看不见
//   3.不缓存

//   get 和 post 都不能自动断点续传