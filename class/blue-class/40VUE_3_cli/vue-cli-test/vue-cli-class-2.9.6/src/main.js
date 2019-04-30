// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
/* import App from './App' App.vue文件已删除 */
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  /* 删掉了app.vue的写法 */
  /*  components: { App },
  template: '<App/>' */
  components: {},
  template: '<router-view/>'
})
