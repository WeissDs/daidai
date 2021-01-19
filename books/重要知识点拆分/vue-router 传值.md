## meta传值

```javascript
{
	path: '/index',
	meta: {} or '',
	component: ()=>import('.')
}

//接收(父级路由也可以接收到)
this.$route.meta

```

## query传值

```javascript

// query传值使用path
this.$router.push({
	path: '/index',
	query:{
		...datas,
	}
})

// 接收  !!!刷新页面数据还在
this.$route.query
```


## params传值

```javascript

// params传值使用name
this.$router.push({
	path: '/index',
	name:'index',
	params:{
		...datas,
	}
})

// 接收  !!!刷新页面数据没有了
this.$route.params
```