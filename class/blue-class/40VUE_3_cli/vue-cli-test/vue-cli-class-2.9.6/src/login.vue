<template>
  <div>
    <cmpHead/>
    <form action="http://localhost:8080/" method="GET">
      用户名：<input type="text">
      密码：<input type="text">
      <input type="submit">
      <router-link to="/reg">注册</router-link>
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

</style>
