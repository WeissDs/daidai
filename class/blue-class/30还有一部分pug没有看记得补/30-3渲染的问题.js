/*

服务器端渲染：

	ejs——非侵入式： 往现成的HTML文件里添加（不破坏原有html）
		优点： 保持html的结构
		缺点： 麻烦

	pug——侵入书： 自己的代码
		优点： 简单
		缺点： 完全不能用html来写静态页面了

客户端渲染：





*渲染引擎适配： express自己没有做渲染引擎适配这个工作，外包给了consolidate (下载： npm install consolidate -D)
	这里的渲染引擎指的就是ejs，pug之类的东西，consolidate支持30多种渲染引擎的适配

*/