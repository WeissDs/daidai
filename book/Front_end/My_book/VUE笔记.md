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

##VUEX
