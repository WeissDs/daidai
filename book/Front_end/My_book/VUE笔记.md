## 问题记录

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

##性能

####在vue中， 尽量不要 直接对vue实例上的属性（也就是data中的数据）进行操作，因为每操作一次， vue就会渲染一次。

####按需加载 ui框架局部加载 首屏加载优化 等等。。。。

####压缩打包 webpack。。。。。

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
