function getStyle(obj,name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj,false)[name];
    }
}
function startMove(obj,speed,arr,iTarget)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function()
    {
        var cur;
        if(arr=='opacity')
        {
            cur=Math.round(parseFloat(getStyle(obj,arr))*100);
        }
        else
        {
            cur=parseInt(getStyle(obj,arr));
        }

        if(Math.abs(iTarget-cur)<Math.abs(speed))
        {
            if(arr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+iTarget+')';
                obj.style.opacity=iTarget/100;
                clearInterval(obj.timer);
            }
            else
            {
                clearInterval(obj.timer);
                obj.style[arr]=iTarget+'px';
            }
        }
        else
        {
            if(arr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+cur+speed+')';
                obj.style.opacity=(cur+speed)/100;

            }
            else{
                obj.style[arr]=cur+speed+'px';
            }
        }
    },30);
}