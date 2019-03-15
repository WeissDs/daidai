import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import house from '@/pages/house'

Vue.use(Router)

export default new Router({
  // 在没有后台配合时使用 打包后页面为空
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/house/:id',
      name: 'house',
      component: house
    }
  ]
})
