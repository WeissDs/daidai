// 获取url中"?"符后的字串
  getUrlParams(urlStr) {
    let url = urlStr || location.href;
    let params = {};
    if (url.indexOf("?") != -1) {
      let str = url.substr(url.indexOf("?") + 1);
      let strs = str.split("&");
      for (let i = 0; i < strs.length; i++) {
        params[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
      }
    }
    return params;
  }


// 提取元素样式
  function getStyle(obj,name){
      if(obj.currentStyle)
      {
          return obj.currentStyle[name];
      }
      else
      {
          return getComputedStyle(obj,false)[name];
      }
  }


// 根据className选择元素（ 注意：getElementsByClassName 不支持ie8 及ie8以下版本 ） 
function getByClass(oParent,sClass){
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