## 问题记录

---

####（vue-cli）vue run build 后空白页
######修改config文件中的 index.js 将 build 中的assetsPublicPath: '/' 修改为assetsPublicPath: './'



####（vue-cli）vue run build 后部分动态载入的本地图片不显示
#######动态加载的 img 中使用绝对路径，不使用相对路径 （原因查看webpack编译原理，之后补上）



####vue不能直接在注册的子组件的标签中加入事件
######解决方法：添加native修饰符 (.stop为取消冒泡的方法)
```javascript
@click.stop.native="showNav"
```



####点击任意地方关闭
```javascript
// 弹出层隐藏
document.addEventListener('click',function(e){
  _this.show = false
})
```



####使用高德地图时 eslint一直报错 Amap is undefined
######还未解决 直接忽略eslint吧。。 按照网上的配置webpack.base.conf.js后import Amap form 'Amap'没有用
  externals: {
    'Amap': 'Amap'
  },



####我们需要用 ‘路由后+参数’ 的方式去实现 一个页面的多个分页
######因为点击显示该分页后刷新不能回到初始页面，刷新需要停留在这个分页



####在做分页跳转时 按钮用了button 导致按钮无效 报错'Form submission canceled because the form is not connected'  醉了....



##vue打包

    vue run build  ---------  vue-cli已经配置好package.json 直接打包即可

####打包空白页问题

    在config 的 index.js 文件中，全局查找assetsPublicPath 将默认的'/'全部替换为'./'

####打包后图片全部加载失败的问题

    



####vue各个组件的css好像是共享的，重名会带来样式被重写的问题
######条件： 我在两个页面（router配置好的不同页面）中，1.vue写好了样式2.vue中没有写样式css重名。
######表现： 如果我打开过1.vue这个页面，2.vue中有样式，如果没有打开1.vue直接刷新2.vue则没有样式
######结论： vue在每个页面组件打开时加载这个组件css，后所有页面共享css


####在使用vuex的store时为什么要使用computed？（）
######store里的数据 在组件的date中注册，在数据变更后视图不会更新
######我在用this.$store.state.someDate 时 在date中绑定之后，控制的是date中的变量去操作视图了，而不是直接改变state的值去控制视图变化（如果这样做就需要用computed监听）





##性能

---

####在vue中， 尽量不要 直接对vue实例上的属性（也就是data中的数据）进行操作，因为每操作一次， vue就会渲染一次。

####按需加载 ui框架局部加载 首屏加载优化 等等。。。。

####压缩打包 webpack。。。。。

####v-show 和 v-if 比较 v-if性能更高



##方法记录

####router

1. router绑定id的方法
2. 路由的使用

####子组件修改父组件属性（使用$emit）

1. 在子组件中定义一个事件函数，暴露给父组件

  ```javascript
    methods: {
      changeMassage () {
        this.$emit('faterUse', '第二个参数干嘛用的？')
      }
    }
  ```

2. 在父组件中监听faterUse事件

    <div @faterUse="change($emit)"></div>

3. 父组件中定义change函数

    ```javascript
      methods: {
        change () {
           this.massage = '子组件把我的修改了'
        }
      }
    ```

####父传子

1. 在父组件中的子组件对象实例上 绑定需要传递的数据

    <child :anyName="this.data"></child>

2. 在子组件里注册prop

    ```javascript
      export default {
        props: ['anyName']
      }
    ```

3. 可以在子组件中操作数据了

    {{anyName}}


##VUEX

---
