/* 

认识数据库

1.库-文件夹，不能存数据，只能管理表
2.表-文件，  用来存数据

----

使用navicat

1. 链接到服务器
	新建一个MySQL链接
2. 双击打开连接： 下面出现的一堆灰色的东西是库？

3. 新建一个库（右键新建数据库）
	库的名字: 尽量不要用-，可以用下划线_
	字符集： utf8 -- UTF-8 Unicode
	排序规则： utf8_general_ci

4. 新建表
	字段（域）-列
	一条数据 -行

5. 数据库字段类型：
	数字：
		整数：tinyint(8位)、smallint(16)、mediumint(24)、int(32)、bigint(64)

			8位 可以表示	0~225||-128~127
			32位			-12亿~12亿
			64位			18万万亿（2的64次方）
		小数： float（单精度浮点数）、double（双精度浮点数）

			float: 小数点后8位
			double： 10的308次方（10^308）个小数位
	字符串：
		小字符串：varchar	一般最多可存255b
		大字符串：text		1G = 1073741824b

SQL

SQL语句：
	四大查询：
		增：		INSERT
		INSERT INTO 表 (字段列表) VALUES(值列表)

		删：		DELETE
		改：		UPDATE
		查：		SELECT


*/