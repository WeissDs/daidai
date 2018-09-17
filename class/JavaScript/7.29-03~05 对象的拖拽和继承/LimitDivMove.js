function LimitDivMove(div)
{
    DivMove.call(this,div);
}
for(var i in DivMove.prototype)
{
    LimitDivMove.prototype[i]=DivMove.prototype[i];
}

LimitDivMove.prototype.fnMove=function(ev)  //重写
{
    var oEvent=ev||event;
    var l=oEvent.clientX-this.disX;
    var t=oEvent.clientY-this.disY;

    if(l<0)
    {
        l=0;
    }
    else if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth)
    {
        l=document.documentElement.clientWidth-this.oDiv.offsetWidth;
    }
    else
    {
        this.oDiv.style.left=l+'px';
    }
    if(t<0)
    {
        t=0;
    }
    else if(t>document.documentElement.clientHeight-this.oDiv.offsetHeight)
    {
        t=document.documentElement.clientHeight-this.oDiv.offsetHeight;
    }
    {
        this.oDiv.style.top=t+'px';
    }
};