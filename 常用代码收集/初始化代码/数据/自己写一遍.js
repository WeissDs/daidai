function ajax(options){
	options = options || {};
	options.data = options.data || {};
	options.dataType = options.dataType || {};

	var xhr = new XMLHttpRequest();

	xhr.open(options.type, options.url+`?${options.data}&t=${ new Date()}`);
	xhr.send();

	xhr.onreadystatechange=function(){
		if( xhr.readyState == 4 ){
			if( xhr.status >= 200 && xhr.status<300 ||xhr.status == 304)
			{
				options.success && options.success(xhr.responseText);
			}else{
				options.error && options.error(xhr.status);
			}
		}
	}
}