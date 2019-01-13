        function getStyle(obj,name)     //取非行间样式的兼容函数（限用于单位值为px）
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
        function startMove(obj,arr,iTarget)       //任意值运动函数
        {
            clearInterval(obj.timer);
            obj.timer=setInterval(function(){
                var cur;
                cur=parseInt(getStyle(obj,arr));   //将要改变的元素的那个参数带入


                var speed=(iTarget-cur)/20;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);

                if(speed==0)
                {
                    clearInterval(obj.timer);
                }
                else
                {
                    obj.style[arr]=cur+speed+'px';
                }
            },30);
        };

