<template>
  <div class="product_page">
    <Product v-for="item in productList" :key="item.id" :item="item" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Product from '../../components/product'
export default {
  name: 'ProductClass',
  data: () => {
    return {
    }
  },
  components: {
    Product
  },
  mounted () {
    const { id } = this.$route.params
    this.getProductList(id)
  },
  computed: {
    ...mapGetters('ProductClass', ['productList'])
  },
  methods: {
    ...mapActions('ProductClass', ['getProductList'])
  }
}
</script>
<style lang="less" scoped>
  .product_page {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.24rem;
  }
</style>
