<template>
  <div>
    <div class="all_products_tabs">
      <div :class="['product_tab', activeTab === item.id ? 'active_tabs' : '']" v-for="item in productClass" :key="item.id" @click="activeTab=item.id">{{item.name}}</div>
    </div>
    <div>123123123123123</div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'AllProducts',
  data: () => {
    return {
      activeTab: 1
    }
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
    // chooseTabs(id) {
    //   console.log('activeId', id)
    // }
  }
}
</script>
<style lang="less" scoped>
  .all_products_tabs {
    position: sticky;
    top: 0rem;
    display: flex;
    font-size: 0.28rem;
    height: 0.84rem;
    line-height: 0.84rem;
    padding: 0rem 0.12rem;
    box-shadow: 0 -0.02rem 0.06rem 0 rgba(0, 0, 0, 0.07);
    overflow-x: auto;
    .product_tab {
      // width: 2.5rem;
      min-width: 1.5rem;
      text-align: center;
      white-space: nowrap;
    }
    .active_tabs {
      position: relative;
    }
    .active_tabs::after {
      display: block;
      content: '';
      position: absolute;
      left: 0rem;
      bottom: 0rem;
      width: 100%;
      height: 0.04rem;
      background: #f75f47;
      color: #f75f47;
    }
  }
</style>
