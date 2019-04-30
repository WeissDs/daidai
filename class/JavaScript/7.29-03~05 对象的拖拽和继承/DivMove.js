function DivMove(div)
{
    var _this=this;
    this.oDiv=document.getElementById(div);
    this.oDiv.onmousedown=function()
    {
        _this.fnDown();

        return false;
    };

}

DivMove.prototype.fnDown=function(ev)
{
    var _this=this;
    var oEvent=ev||event;
    this.disX=oEvent.clientX-this.oDiv.offsetLeft;
    this.disY=oEvent.clientY-this.oDiv.offsetTop;
    document.onmousemove=function()
    {
        _this.fnMove();
    };
    document.onmouseup=function()
    {
        _this.fnUp();
    }
};
DivMove.prototype.fnMove=function(ev)
{
    var oEvent=ev||event;
    this.oDiv.style.left=oEvent.clientX-this.disX+'px';
    this.oDiv.style.top=oEvent.clientY-this.disY+'px';
};
DivMove.prototype.fnUp=function()
{
    document.onmousemove=null;
    document.onmouseup=null;
};