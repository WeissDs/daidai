<template>
  <div>
    <Top></Top>
    <!-- 一个页面中的分页 -->
    <div @click="btnClick('a')">1</div>
    <div @click="btnClick('b')">2</div>
    <div @click="btnClick('c')">3</div>
    <ShopList v-if="type=='a'"></ShopList>
    <div class="2" v-if="type=='b'">
     222
    </div>
    <div class="2" v-if="type=='c'">
     333
    </div>

  </div>
</template>

<script>
import Top from '@/components/cmp-top'
import ShopList from '@/components/cmp-home-shoplistItem.vue'
import router from '../router'
export default {
  components: { ShopList, Top },
  data () {
    let type = this.$route.params['type']
    return { type }
  },
  methods: {
    btnClick (id) {
      console.log(id, this.type)
      router.push(`/hotelList/${id}`)
      this.type = id
      console.log(id, this.type)
    }
  },
  async mounted () {
  }
}
</script>
