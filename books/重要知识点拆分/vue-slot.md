## vue slot组件内监听外部是否传入slot

#### vm.$scopedSlots （ 官方解释：用来访问作用域插槽。对于包括 默认 slot 在内的每一个插槽，该对象都包含一个返回相应 VNode 的函数。）

```javascript


mounted() {

	// 通过this.$scopedSlots.[name] 是否存在，判断外部是否传入这个slot
    if (this.$scopedSlots.aa) {
      console.log(true);
    } else {
      console.log(false);
    }

	// 但是后台打印出来为空（if判断中有效 不知道为什么）
    console.log(this, this.$scopedSlots);
  }
```