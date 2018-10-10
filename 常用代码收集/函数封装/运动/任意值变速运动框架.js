/**
 * Created by daixiyu on 2017/7/30.
 */
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
function startMove(obj,arr,iTarget)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var cur;
        if(arr=='opacity')
        {
            cur=Math.round(parseFloat(getStyle(obj,arr))*100);
        }
        else
        {
            cur=parseInt(getStyle(obj,arr));
        }

        var speed=(iTarget-cur)/6;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);

        if(speed==0)
        {
            clearInterval(obj.timer);
        }
        else
        {
            if(arr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }
            else
            {
                obj.style[arr]=cur+speed+'px';
            }
        }
    },30);
}