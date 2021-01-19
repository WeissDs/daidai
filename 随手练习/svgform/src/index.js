window.onload=function(){
	const $ = document.querySelectorAll.bind(document);
	let btns = $('.btn');
	let nodes = $('.pane-node');
	let outBox = $('#outBox')[0];
	let oGbtn = $('#newGBtn')[0];
	
	function newG(){
	}	
	oGbtn.onmousedown = function(e){
		oEvent = e||event;
		let oG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		// oG.style.transform = 'translate(200px, 600px)'
		// moveNewG(oGbtn,oG);


		// 设置绝对定位没有作用(改为newGBtn为绝对定位，否则元素起始位置不对)
		// oG.style.position='absolute'
		// oG.style.top=0
		// oG.style.left=0

		oG.style.transform = `translate(${getPos(oEvent).x}px,${getPos(oEvent).y}px)`
		oG.setAttribute('class', 'pane-node');
		oG.innerHTML = '<foreignObject width="200" height="50"><div class="box">拖动<div class="btn"><span class="top"></span><span class="right"></span><span class="bottom"></span><span class="left"></span></div></div></foreignObject>'
		outBox.appendChild(oG);

		let a = document.onmousemove=function(e){
			oEvent = e||event;
			oG.style.transform = `translate(${getPos(oEvent).x}px,${getPos(oEvent).y}px)`
			
		}
		document.onmouseup=function(){
			// document.onmousemove = null;
			document.remove
			
		}
		

	}

	// function moveNewG(clickDOM, g){
	// 			dom.style.transform = `translate(${getPos.x}px,${getPos.y}px)`
	// }

	function showBar(){
		outBox.onclick=function(e){
			oEvent = e || event;
			// canselBubble(oEvent);
			if(e.target.tagName == 'g'){
				alert(1)
			}
			
		}
		// nodes = $('.pane-node');
		// console.log(nodes)
		// for(let i=0;i<nodes.length;i++){
		// 	nodes[i].onclick=function(e){
		// 		if(e&&e.stopPropagation){
		// 			e.stopPropagation();
		// 		}else{
		// 			window.event.cancelBubble=true;
		// 		}
				
		// 		let oBtn = $('.btn')
		// 		if(Array.from(oBtn[i].classList).indexOf('focus')===-1){
		// 			oBtn[i].classList.add('focus');
		// 		}else{
		// 			oBtn[i].classList.remove('focus');
		// 		}
				
		// 	}
		// }
		// window.onclick=function(){
		// 	let a = Array.prototype.slice.call(btns,0);
		// 	a.forEach(item=>{
		// 		item.classList.remove('focus')
		// 	})
		// }
	}
	

	function getPos(ev){
	    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	    var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
	    return {x:ev.clientX+scrollLeft,y:ev.clientY+scrollTop}
	}

	function canselBubble(event){
		if(event && event.stopPropagation){
			event.stopPropagation();
		}else{
			window.event.canselBubble = true;
		}
	}

	
	
	let aDot = $('.btn span');
	function drawLine(){
		aDot = $('.btn span');
		Array.from(aDot).forEach(item=>{
			item.onclick=function(e){
				event = e || event
				canselBubble(event);
			}
			item.onmousedown=function(e){
				event = e || event
				canselBubble(event);

				let pt = event.target.className
				

				
				let startPos = getPos(event);
				let svgDom = document.createElementNS("http://www.w3.org/2000/svg", "path");
				$('.pane-link')[0].appendChild(svgDom);

				// svgDom.setAttributeNS(null, 'd', `M${zb.x} ${zb.y} L0 0`)
				svgDom.setAttributeNS(null, 'style', 'stroke:red;stroke-width:2;fill:#fff;');
				if(pt == 'bottom'){
					console.log(event)
					// startPos = {x:,y:}
					document.onmousemove=function(e){
						let curPos = getPos(e)
						let pos1 = ''
						if(curPos.x - startPos.x<30){
							svgDom.setAttributeNS(null, 'd', `M${startPos.x} ${startPos.y-5} L${startPos.x} ${curPos.y}`)
						}else if(curPos.x - startPos.x>30 && curPos.y - startPos.y<30){
							svgDom.setAttributeNS(null, 'd', `M${startPos.x} ${startPos.y-5} L${startPos.x} ${startPos.y+30} L${curPos.x} ${startPos.y+30}`)
						}else{
							pos1 = curPos.y;
							svgDom.setAttributeNS(null, 'd', `M${startPos.x} ${startPos.y-5} L${startPos.x} ${pos1} L${curPos.x} ${curPos.y}`)
						}
					}
					document.onclick=function(){
						$('.pane-link')[0].removeChild(svgDom);
						document.onmousemove=null;
					}
				}
				// document.onmousemove=function(e){
				// 	svgDom.setAttributeNS(null, 'd', `M${zb.x} ${zb.y} L${getPos(e).x} ${getPos(e).y}`)
				// 	document.onclick=function(){
				// 		$('.pane-link')[0].removeChild(svgDom);
				// 		document.onmousemove=null;
				// 	}
				// }


				// $('.pane-link')[0].innerHTML='<path d="M0 0 L6 6" style="fill:white;stroke:red;stroke-width:2"/>';
				// $('.pane-link').append("<line stroke='#0f61cf'  stroke-miterlimit='10' stroke-width='2' x1='50' x2='50' y1='0' y2='100'>")

			}
		})
	}

	showBar();
	drawLine();
	
	// Array.from(nodes).forEach(item=>{
	// 	item.onmousedown=function(e){
	// 		let oEvent = e || event
	// 		console.log(oEvent.currentTarget)
	// 		console.log(oEvent.currentTarget.style.transform)
	// 		// Array.from(oEvent.target.children[0].children).forEach(item=>{
	// 		// 	console.log(item.style)
	// 		// })
	// 	}
	// })
}