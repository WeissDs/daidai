"use strict";

var babel = require("@babel/core");

babel.transform("code", optionsObject);

window.onload = function () {
  var $$ = document.querySelectorAll.bind(document);
  btns = $$('.btn');
  nodes = $$('.pane-node');

  function showBar() {
    var _loop = function _loop(i) {
      //jquery
      // $(nodes[i]).click(function(e){
      // 	if(e && e.stopPropagation){
      // 		e.stopPropagation();
      // 	}else{
      // 		window.event.cancelBubble = true;
      // 	}
      // 	$($('.btn')[i]).toggleClass('focus');
      // })
      nodes[i].addEventListener('click', function (e) {
        if (e && e.stopPropagation) {
          e.stopPropagation();
        } else {
          window.event.cancelBubble = true;
        }

        var oBtn = $$('.btn');

        if (Array.from(oBtn[i].classList).indexOf('focus') === -1) {
          oBtn[i].classList.add('focus');
        } else {
          oBtn[i].classList.remove('focus');
        }
      });
    };

    for (var i = 0; i < nodes.length; i++) {
      _loop(i);
    }

    window.onclick = function () {
      var a = Array.prototype.slice.call(btns, 0);
      a.forEach(function (item) {
        item.classList.remove('focus');
      });
    };
  }

  showBar();
  var aDot = $$('.btn span');
  console.log(aDot);
  Array.from(aDot).forEach(function (item) {
    item.onclick = function (e) {
      if (e && e.stopPropagation) {
        e.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }
    };

    item.onmousedown = function (e) {
      if (e && e.stopPropagation) {
        e.stopPropagation();
      } else {
        window.event.cancelBubble = true;
        e = event;
      }

      var zb = getPos(e); // svgDocument = evt.target.ownerDocument;
      // var shape = svgDocument.createElementNS(svgns, "circle"); 
      // shape.setAttributeNS(null, "cx", 25); 
      // shape.setAttributeNS(null, "cy", 25);
      // shape.setAttributeNS(null, "r", 20);
      // shape.setAttributeNS(null, "fill", "green");
      // var path = document.createElementNS("http://www.w3.org/2000/svg", '')

      console.log(e.target);
      var svgDom = document.createElementNS("http://www.w3.org/2000/svg", "path");
      $$('.pane-link')[0].appendChild(svgDom); // svgDom.setAttributeNS(null, 'd', `M${zb.x} ${zb.y} L0 0`)

      svgDom.setAttributeNS(null, 'style', 'stroke:red;stroke-width:2');

      document.onmousemove = function (e) {
        svgDom.setAttributeNS(null, 'd', "M".concat(zb.x, " ").concat(zb.y, " L").concat(getPos(e).x, " ").concat(getPos(e).y));

        document.onclick = function () {
          $$('.pane-link')[0].removeChild(svgDom);
          document.onmousemove = null;
        };
      }; // $$('.pane-link')[0].innerHTML='<path d="M0 0 L6 6" style="fill:white;stroke:red;stroke-width:2"/>';
      // $('.pane-link').append("<line stroke='#0f61cf'  stroke-miterlimit='10' stroke-width='2' x1='50' x2='50' y1='0' y2='100'>")

    };
  });

  function getPos(ev) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    return {
      x: ev.clientX + scrollLeft,
      y: ev.clientY + scrollTop
    };
  }

  var fn = function fn() {
    return 1;
  };
};