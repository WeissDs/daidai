<template>
  <div>
    <cmpHead/>
    <form action="http://localhost:8080/reg" method="GET">
      用户名：<input type="text">
      密码：<input type="text">
      <input type="submit">
      <router-link to="/">登录</router-link>
    </form>
    <cmpFoot/>
  </div>
</template>

<script>
import cmpHead from '@/components/cmp-head.vue'
import cmpFoot from '@/components/cmp-foot.vue'
export default {
  components: {cmpHead, cmpFoot}
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
</style>
