##不使用vue-cli 直接使用的基础写法

```javascript
let vm = new Vue({
  el: '#div1',
  data: {
    a: 12, b: 5
  },
  methods: {
    fn(){},
  }
})

<div id="div1" :title="b">{{a}}</div>
```





##vue语法

###### '' 叫做 vue表达式
###### 'v-bind:属性=""' 简写 ':属性=""' 在html标签中使用
###### 'v-on:事件' 简写 '@='
###### 'v-for' 可以循环数组、对象
      循环数组时候两个参数，第一个为数组内元素，第二个为元素索引（item,index）

      循环对象时候可以有三个参数，第一个为键值，第二个为键名，第三个为索引（value,key,index）






##vue-router

####引入路由

1. 下载vue-router

  npm i vue-router

2. 初始化

  在main.js中引入（router新建文件）文件配置：
  
  main.js: 

  ```javascript
  new Vue({
    router
  })
  ```

  ```javascript
    import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter)
    const router = new VueRouter({
      // ！！！！！！！这里是routes 不是routers 注意！！！！！！
      routes: [...]
    })
  ```

3. 加入渲染

  在App.vue中加入<router-view></router-view>

####路由的三种写法

######import

```javascript
  import Home from '@/views/home'

  {
    path: '/',
    name: 'home',
    component: Home
  }
```

######import (按需加载 推荐写法)

```javascript
  {
    path: '/',
    name: 'home',
    component: ()=>import("../views/home")  // 可省略.vue
  }
```


######require+resolve (按需加载)

```javascript
  {
    path: "",
    name: "home",
    component: resolve => require(['views/home'], resolve)
  }
```

##vue组件全局注册

####install && use （原理大概是    Vue.use(a)的时候vue会自动运行a的install方法）

    在main.js中：
    import customUI from "@/components/install";
    Vue.use(customUI)

    install.js 内容：

    import ElOpen from "./ElOpen";
    import ElTreeSelect from "./ElTreeSelect";
    import ElResize from "./ElResize";
    import ElPage from "./ElPage";

    export default {
        install(Vue) {
            Vue.use(ElOpen);
            Vue.use(ElTreeSelect);
            Vue.use(ElResize);
            Vue.use(ElPage);
        }
    };

    每个组件用一个js文件导入, js文件内容：

    import TreeSelect from "./src/main";

    TreeSelect.install = function(Vue) {
      Vue.component(TreeSelect.name, TreeSelect);   // 这里好像TreeSelect.name可以写成"TreeSelect"？？
    };

    export default TreeSelect;


####webpack 配置

##### axios配置

    moudule.exports = {
      configureWebpack: {
        plugins: [
          new webpack.ProvidePlugin({
            Ajax: [path.resolve(__dirname, "src/plugins/axios"), "default"]
          })
        ]
      },
    }







## 问题记录

---

####（vue-cli）vue run build 后空白页
######修改config文件中的 index.js 将 build 中的assetsPublicPath: '/' 修改为assetsPublicPath: './'



####（vue-cli）vue run build 后部分动态载入的本地图片不显示
######动态加载的 img 中使用绝对路径，不使用相对路径 （原因查看webpack编译原理，之后补上）
<https://blog.csdn.net/mr_yanyan/article/details/78783091>(11)



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
