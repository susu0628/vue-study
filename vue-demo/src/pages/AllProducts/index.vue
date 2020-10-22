<template>
  <div class="all_products">
    <ul class="products_left">
      <li v-for="item in productClass" :key="item.id">{{item.name}}</li>
    </ul>
    <div class="products_right"></div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'AllProducts',
  data: () => {
    return {}
  },
  props: {
  },
  components: {},
  computed: {
    /**
     * 如果 productClass仅仅时保存在vuex中，当刷新该页面时，会清空数据
     * why？
     * 因为store中的数据是保存在运行内存中的，当页面刷新时，会重新加载vue实例，store里的数据就会被重新赋值
     * solution?
     * 将state里的数据保存一份到本地存储(localStorage、sessionStorage、cookie）中
     * 在这里，我们保存到sessiomStorage中
     */
    ...mapGetters('Home', ['productClass'])
  },
  mounted () {
    console.log(234234, this.productClass)
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  .all_products {
    display: flex;
    margin-top: 0.24rem;
    .products_left {
      position: fixed;
      top: 0rem;
      bottom: 1rem;
      left: 0rem;
      width: 2rem;
      border-right: 0.01rem solid #ccc;
      font-size: 0.26rem;
      li {
        width: 100%;
        text-align: center;
        background: rgba(247, 95, 71, 0.05);
        margin-bottom: 0.08rem;
        padding: 0.2rem;
      }
    }
    .products_right {
      flex: 1;
    }
  }
</style>
