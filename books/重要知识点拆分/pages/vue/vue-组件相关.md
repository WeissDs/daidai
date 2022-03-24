##组件写法

####写组件给出替换key的参数设置方法

```javascript
props: {
	data: Array,
	prop: {
		type: Object,
		default: ()=>{
			return {
				name: 'name',
				ajlbMc: 'ajlbMc'
			}
		}
	}
}

computed: {
    comData() {
      let result = {
        name: this.datas[this.prop.name] || this.datas.name,
        ajlbMc: this.datas[this.prop.ajlbMc] || this.datas.ajlbMc,
      };
      return result;
    }
},
```

##组件监听数据改变 统一事件处理（专业名词好像叫事件派发和接收）

######例如改变时间所有页面重新请求数据

1. 使用bus



```javascript

// 在src中创建 bus.js
	import Vue from "vue"

	export default new Vue({})

// 在main.js中将bus 添加到vue原型上
	import Bus form "@/bus"

	Vue.prototype.$bus = Bus

// 事件派发

	this.$bus.$emit("name", "args");

// 接收事件

	this.$bus.$on("name",function(){
		...
	})

```

2. 使用vuex（猜想可以这样做，不知道更好的写法,例如监听多个值变化的写法等等）


```javascript

// 监听state值变化

	computed:{
		stateData(){
			return this.$store.state.data
		}
	},
	watch:{
		stateData(){
			...
		}
	}
```


##组件通信

1. 路由传参 query 和 params
2. bus传参
3. vuex传参
4. 父组件调用子组件的方法:
```javascript
	// child为子组件ref="name", fn为子组件方法
	this.$refs.child.fn(this.msg)
```

######能做到刷新页面数据不丢失的只有query传参  其他都需要配合sessionStorage来做本地储存和还原

