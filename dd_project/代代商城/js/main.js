// 侧边栏

let oBtn=document.getElementById('btn');
let oNavBack=document.getElementById('aside-background');
let oNav=document.getElementById('aside-nav');
let out=document.getElementById('aside-out');


let navEvent=function(ev)
{
	let oEvent=ev||event;
	oEvent.cancelBubble=true;
	oNavBack.style.display='block';
	oNavBack.style.position='fixed';

	out.onclick=function(ev)
	{
		let oEvent=ev||event;
		oEvent.cancelBubble=true;
		oNavBack.style.display='none';
	}	
}
let allEvent=function()
{
	oNavBack.style.display='none';
}
let navEventAc=function(ev)
{
	let oEvent=ev||event;
	oEvent.cancelBubble=true;
	oNavBack.style.display='block';
}

document.addEventListener('click' , allEvent);
oBtn.addEventListener('click' , navEvent);
oNav.addEventListener('click' , navEventAc);


// 导航栏跟随
window.onscroll=function(){
	let mianNav=document.getElementById('main-nav');
	let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;

	if(scrollTop>=40)
	{
		mianNav.style.position='fixed';
		mianNav.style.top='0';
	}
	else
	{
		mianNav.style.position = 'static';
	}
}

//查询
let oBtnSearch=document.getElementById('clickSearch');
let oSearch=document.getElementById('search');
let timerSearch=null;

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
function startMove(obj,json,fnEnd)  //用json来传入多个需要运动的元素和值
        {
            clearInterval(obj.timer);
            obj.timer=setInterval(function(){
                var bStop=true;

                for(var attr in json) {
                    var cur;
                    if (attr == 'opacity') {
                        cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
                    }
                    else {
                        cur = parseInt(getStyle(obj, attr));
                    }

                    var speed = (json[attr] - cur) / 6;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);


                    if(speed!=0)
                    {
                        bStop=false;
                    }

                    if (attr == 'opacity') {
                            obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                            obj.style.opacity = (cur + speed) / 100;
                    }
                    else {
                            obj.style[attr] = cur + speed + 'px';
                    }
                }

                if (bStop) {
                    clearInterval(obj.timer);
                    if(fnEnd)fnEnd();

                }
            },30);
        }

oBtnSearch.onclick = function()
{
	if(oSearch.offsetWidth>=140)
	{
		
		startMove(oSearch,{width:0,opacity:0});
		setTimeout(function(){
			oSearch.style.display = 'none';
		},300);
		
	}
	else
	{
		oSearch.style.display = 'inline-block';
		startMove(oSearch,{width:140,opacity:100});
		
		
	}
	
	// oSearch.alpha=0;
	// clearInterval(timerSearch);
	// timerSearch=setInterval(function(){
	// 	var speed=10;

	// 	if(oSearch.offsetWidth>=140)
	// 	{
	// 		clearInterval(timerSearch);
	// 	}
	// 	else
	// 	{
	// 	oSearch.style.width=oSearch.offsetWidth+speed+'px';
	// 	}
	// },30);
	// searchMove();
	// searchOpacity(oSearch,1,100);

	

}



// 底部

let oUlEnd=document.getElementById('end');

function getByClass(oParent,sClass)
        {
            var aResult=[];
            var aEle=oParent.getElementsByTagName('*');

            for(var i=0;i<aEle.length;i++)
            {
                if(aEle[i].className==sClass)
                {
                    aResult.push(aEle[i]);
                }
            }
            return aResult;
        }

// 只在页面刷新时有效 所以不可用
	let browserWidth=document.documentElement.clientWidth||document.body.clientWidth;

	if(browserWidth<=768)
	{
		let oLiEnd=getByClass(oUlEnd,'end-li');
		let oImg=oUlEnd.getElementsByTagName('img');

		for(let i=0;i<oLiEnd.length;i++)
			{
				oLiEnd[i].onclick=function()
				{
					for(let f=0;f<this.children.length;f++)
					{
						oLiEnd[i].index=i;
						

						if(this.children[f].style.display=='block')
						{
							this.children[f].style.display='none';
							this.children[0].style.display='block';
							// alert(oImg[this.index]);
							oImg[this.index].style.transform='rotate(0deg)';
						}
						else
						{
							this.children[f].style.display='block';

						}

					}
					
				}
			}
	}
	else if(browserWidth>768)
	{
		let oLiEnd=getByClass(oUlEnd,'end-li');
		for(let i=0;i<oLiEnd.length;i++)
		{
			oLiEnd[i].style.display = 'block';
		}
	}

	let oEnd=document.getElementById('end');
	let oLiEndImg = getByClass(oEnd,'end-li-img');
	for(let i=0 ; i<oLiEndImg.length ; i++)
	{
		// oLiEndImg[i].addEventListener('click' , function(){
			
		// 	if(this.style.transform='rotate(0deg)')
		// 	{
		// 		this.style.transform='rotate(180deg)';
		// 	}
		// 	else if(this.style.transform='rotate(180deg)')
		// 	{
		// 		this.style.transform='rotate(0deg)';
		// 	}
				
		// 		alert(this.style.transform);
			
			
			
		// })
		oLiEndImg[i].onclick=function()
		{
			// if(this.style.transform='rotate(0deg)')
			// {
			this.style.transform='rotate(180deg)';
			// alert(this.style.transform);
			// }
			// else
			// {
			// 	this.style.transform='rotate(40deg)';
			// }
		}
	}

