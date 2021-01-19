## VUE cli3 项目创建时报错

####  报错内容 npm install --loglevel error

	解决： 在c盘 用户 找到 .vuerc

	修改useTaobaoRegistry为 "useTaobaoRegistry": true;


## Vue props传值直接将对象写在标签内 v-if显示组件时组件触发了watch？ 组件<maps>内打印watch的oldVal 和 newVal 的值相同（把传值对象写在data里就好了 不知道为什么）

```html
	<div v-if="active == 1" style="height:100%;width:100%">
	  <maps :data="{a:1,b:2}" :area="dwjc"></maps>
	</div>
	<div v-else style="height:100%;width:100%">
	  <ybp :data="ybpData"></ybp>
	</div>
```
