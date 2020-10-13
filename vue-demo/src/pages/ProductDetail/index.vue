<template>
  <div></div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProductDetail',
  data: () => {
    return {
    }
  },
  computed: {
    ...mapGetters('ProductDetail', ['discountsList', 'productDetail'])
  },
  mounted () {
    console.log(this.$route.params)
    const { id } = this.$route.params
    this.getDiscounts()
    this.getProductDetail({id}) // 获取商品详情信息
  },
  methods: {
    ...mapActions('ProductDetail', ['getDiscounts', 'getProductDetail'])
  }
}
</script>
<style lang="less" scoped>
</style>
