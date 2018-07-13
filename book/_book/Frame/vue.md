#VUE笔记

##VUE基础介绍
---

1. 前台渲染：数据量小，用户体验好，安全性较后台渲染要差
2. MVC：

    M model
    
    V view
    
    C controller
    
   MVP
   
   MVVM

##VUE基础语法 
---

1. 标签的内容写法 vue表达式  `两个花括号`

2. 标签属性的写法  `v-bind:属性名=""` || `:属性名=""`

3. 事件属性的写法  `v-on:click(事件名去掉on)` || `@click`

4. 单向绑定：数据->视图 数据变了视图会变，视图变了数据不变

   双向绑定:数据和视图之间同步 任何一方改变则另一方一起改变
  `v-model=""` 给value
5. vue里有一个虚拟标识（v-for中使用） 不用虚拟标识性能会降低

6. 修饰符 用于对属性的修饰

7. v-cloak 

   可以避免标签中的代码因为网络缓慢的原因露出

基本格式

    let vm=new Vue({
        el: ,
        data: ,
        method: ,
        computed: ,
        watch: ,
    })

v- 统称为vue的指令

    v-bind:------:              (渲染属性)
    v-on:------@                (事件)
    v-model                     (双向绑定)
    v-for                       (循环)
    v-html                      (原样输出)
    v-if                        (插入DOM节点/删除DOM节点)
    v-show                      (出现/隐藏)
    v-cloak                     (掩饰:)


##VUE vue-router


<br/>
<br/>

##VUE指令

---

####VUE下载

    npm install -g vue-cli
    
####VUE查看版本

    vue -V
    
####VUE模板类型查看

    vue list
    
####VUE模板下载 初始化

    vue init webpack myproject
    
####VUE运行

    npm run dev
    
