## js隐式转换有哪些？

1. 算术运算

###### '+':分为 ① 字符串连接符（它不属于算术运算符，因为容易混淆所以我放在了一起 符号两边的其他数据类型 调用String() 方法） ② 算数运算符 （符号两边的其他数据类型 调用Number() 方法）

###### '-','\*','/','%' （符号两边的其他数据类型 调用Number() 方法）

2. 关系运算  （数据类型转换成number之后再比较关系）

###### 当符号两端都为字符串的情况下，是隐式转换为字符串对应的unicode编码来进行比较

```javascript

	console.log('2' > 10)   //false
	console.log('2' > '10')   //true  ('2'.charCodeAt()=50  '10'.charCodeAt()=49)

```

3. if()









## 复杂数据类型  隐式转换时会先转成String，然后再转成Number运算

###### （数组、对象）=> 调用valueOf()方法获取原始值 => 然后调用toString()方法转为字符串 => Number()转为数字

###### boolean 直接Number()转为数字

```javascript

	console.log([1,8] == '1,8')   //true
	console.log([1,8].valueOf())  //[1,8]
	console.log([1,8].toString())  // '1,8'
	//最后将'1,8'转为unicode进行比较

```

<img src="images/yszh1.jpg" alt="">








##1.6-坑四：逻辑非隐式转换与关系运算符隐式转换搞混淆

###### 前方高能，请注意~

###### 空数组的toString()方法会得到空字符串，而空对象的toString()方法会得到字符串`[object Object]` （注意第一个小写o，第二个大写O哟）

###### 常见面试题


<img src="images/yszh2.jpg" alt="">





## 原理分析

<img src="images/yszh3.jpg" alt="">
<img src="images/yszh4.jpg" alt="">
<img src="images/yszh5.jpg" alt="">
<img src="images/yszh6.jpg" alt="">
<img src="images/yszh7.jpg" alt="">



