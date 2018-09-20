function ajax(options){
	options = options || {};
	options.dataType = options.dataType || 'text';
	options.data = options.data || {};

	var xhr = new XMLHttpRequest();

	//将data传入参数设计为{}json对象，以下步骤转化为字符串
	var arr = [];
	for(var name in options.data){
		arr.push(encodeURIComponent(name)+'='+encodeURIComponent(options.data[name]));
	}
	var strData = arr.join('&');


	if(options.type=='GET')
	{
		xhr.open(options.type, options.url+'?'+strData+'&t='+new Date().getTime(),true);
		xhr.send();
	}else if(options.type=='POST')
	{
		xhr.open(options.type, options.url+'?&t='+new Date().getTime(), true);
		//content-type的三种常用类型:
		//text/plain							纯文本
		//application/x-www-form-urlencoded		&&&的方式
		//multipart/form-data					定界符分割各个数据（一般用于文件上传）
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(strData);
	}
	

	xhr.onreadystatechange=function(){
		if(xhr.readyState==4)
		{
			if(xhr.status>=200 && xhr.status<300 || xhr.status==304)
			{
				var data = xhr.responseText;
				switch(options.dataType){
					case 'json':
						if(window.JSON && JSON.parse)
						{
							data = JSON.parse(data);
						}else{
							data = eval('('+str+')')
						}
						
						break;
					case 'xml':
						data = xhr.responseXML;
						break;
				}

				options.success && options.success(data);
			}else{
				options.error && options.error(status);
			}
		}
	}
}