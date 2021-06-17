## 事件订阅、事件发布

#### VUE自定义EventBus写法 Demo

```javascript

	// 1.定义一个统一事件管理器 '@/js/eventBus.js'

	import Vue from 'vue'

	let Bus = new Vue()
	let install = (Vue)=>{
		Vue.prototype.Bus = Bus
	}

	export default { install }


	// 2.引用EventBus

	import Vue from 'vue'
	import Bus from '@/js/eventBus.js'

	Vue.use(Bus)

	// 3.在组件种监听事件

	export default {
		data(){
			return {}
		},
		methods:{
			changeSomething(tmpObj){
				console.log('我被通知去修改something, 参数：tmpObj');
			}
		},
		// 创建组件后监听事件
		mounted(){
			this.Bus.$on('changeSomething', this.changeSomething)
		},
		// 组件销毁的时候 删除监听的事件(好像在beforedestroy 和 destroyed中解除事件绑定dou)
		beforeDestroy(){
			this.Bus.$off('changeSomething', this.changeSomething)
		}
	}


	// 4.业务逻辑中触发事件

	export default {
		methods:{
			onChange(){
				this.$emit('changeSomething', tmpObj);
			}
		}
	}



```

