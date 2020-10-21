<template>
  <div></div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Cart',
  data: () => {
    return {
    }
  },
  components: {},
  async mounted () {
    await this.getCartProduct()
    console.log(789789, this.cartList)
  },
  computed: {
    ...mapGetters('Cart', ['cartList'])
  },
  methods: {
    ...mapActions('Cart', ['getCartProduct'])
  }
}
</script>
<style lang="less" scoped>
</style>
