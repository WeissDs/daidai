## components 中创建组件

<template>
  <remote-js :src="src"></remote-js>
</template>
<script>
export default {
  name: 'OuterIp',
  data() {
    return {
      src: ''
    }
  },
  components: {
    'remote-js': {
      render(createElement) {
        return createElement('script', {
          attrs: { type: 'text/javascript', src: this.src || 'http://pv.sohu.com/cityjson?ie=utf-8' }
        })
      },
      props: {
        src: { type: String, required: true }
      }
    }
  }
}
</script>


## 使用方法

##### 在需要获取公网ip的页面 导入组件后 使用 returnCitySN['cip'] 获取（注意：该方案为异步获取参数有延迟，可写按钮点击后获取）

