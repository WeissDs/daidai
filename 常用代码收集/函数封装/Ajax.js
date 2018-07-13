/**
 * Created by daixiyu on 2017/8/7.
 */
function ajax(url,fnSucc,fnFaild)
{

    if(window.XMLHttpRequest)
    {
        var oAjax=new XMLHttpRequest();
    }
    else
    {
        var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
    }

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