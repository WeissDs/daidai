## vue-router方式


```javascript
	// router index.js 文件配置

	import Vue from 'vue'
	import Router from 'vue-router'

	Vue.use(Router)
	
	let router = new Router({
	  mode: 'history',
	  base: process.env.BASE_URL,
	  routes: [
	    {
	      path: '/zhxf',
	      name: 'zhxf',
	      meta: {
	        title: '',
	        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
	      },
	      component: () => import('../layout/zhxf/app-frame.vue')
	    },
	  ]
	})

	router.beforeEach((to, from, next) => {
	  // 判断用户是否登陆，未登录跳转=>login
	  if (to.matched.some(record => record.meta.requireAuth)) {
	    if (loStorage.getItem("token") == "true") {
	      next();
	    }
	    else {
	      next({
	        path: '/login',
	        query: { redirect: to.fullPath }  // 将客户当前页
	      })
	    }
	  }
	  else {
	    next();
	  }
	})
	export default router;
```

##vue axios方式（在每次ajax请求时 通过请求头带过去的token  后台判断用户是否登陆）
