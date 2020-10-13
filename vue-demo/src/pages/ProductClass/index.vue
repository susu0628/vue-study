<template>
  <div class="product_wrapper" ref="wrapper">
    <div class="product_content">
       <!-- 下拉刷新头部状态 -->
      <div class="pulldown-wrapper">
        <div v-if="beforePullDown" class="beforePullDown">下拉刷新</div>
        <div v-else-if="isPullingDown">加载中...</div>
        <div v-else-if="finshPullingDown" class="beforePullDown">加载完成</div>
      </div>
      <div class="product_list">
        <Product v-for="(item, idx) in productList" :key="idx" :item="item" />
      </div>
      <!-- 上拉加载提示 -->
      <div class="pullup_wrapper" v-if="hasLoadAll">----已经加载完成啦----</div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { Toast } from 'vant'
import BScroll from 'better-scroll'
import Product from '../../components/product'
let timer = null // 需全局设置，否则每个防抖都有一个timer，并不会清除上一个timer，从而导致防抖不生效
export default {
  name: 'ProductClass',
  data: () => {
    return {
      page: 1,
      pageSize: 20,
      hasLoadAll: false, // 是否已经加载完毕
      beforePullDown: true, // 下拉刷新之前
      isPullingDown: false, // 下拉释放
      finshPullingDown: false // 下拉加载完成
    }
  },
  components: {
    Product
  },
  mounted () {
    this.loadData(1).then(() => {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollbar: true,
          pullDownRefresh: { // 配置下拉刷新的功能
            threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
            stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
          },
          pullUpLoad: { // 配置上拉加载的功能
            threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
          }
        })
        // 下拉刷新触发的事件
        this.scroll.on('pullingDown', () => {
          // 注意防抖，防止短时间内连续触发
          this.debouncePullingDown(this.loadData, 1500)(1, true)
          this.beforePullDown = false
          this.isPullingDown = true
          // 在刷新数据完成之后，调用 finishPullDown 方法，回弹到顶部, 否则只能执行一次
          this.scroll.finishPullDown()
          this.scroll.refresh()
        })
        // 上拉加载触发的事件
        this.scroll.on('pullingUp', () => {
          this.page += 1
          this.hasLoadAll = this.productList.length < this.pageSize * (this.page - 1) // 当加载的数据少于pageSize的时候，说明加载已经完成了
          if (!this.hasLoadAll) {
            this.loadData(this.page, false).then(() => {
              this.scroll.finishPullUp()
            })
          }
          // 如果子元素或者父元素 DOM 结构发生改变的时候，必须重新调用 scroll.refresh() 方法重新计算来确保滚动效果的正常。
          this.scroll.refresh()
        })
      })
    })
  },
  computed: {
    ...mapGetters('ProductClass', ['productList'])
  },
  methods: {
    ...mapActions('ProductClass', ['getProductList']),
    loadData (page, isPullingDown) {
      return new Promise(async (resolve, reject) => {
        const { id } = this.$route.params
        const { pageSize } = this
        await this.getProductList({id, page, pageSize, isPullingDown})
        if (isPullingDown) {
          this.isPullingDown = false
          this.finshPullingDown = true
          Toast.success('刷新成功')
          setTimeout(() => {
            this.finshPullingDown = false
            this.beforePullDown = true
          }, 500)
        }
        resolve()
      })
    },
    debouncePullingDown (func, delay) {
      return function (...args) {
        clearTimeout(timer) // 每次触发，都清除定时器
        timer = setTimeout(() => {
          func(...args)
        }, delay)
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .product_wrapper {
    height: 100vh;
    overflow: hidden;
    .pulldown-wrapper {
      text-align: center;
      font-size: 0.18rem;
      color: #a6a6a6;
      .beforePullDown {
        margin-top: -0.3rem;
      }
    }
    .product_list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0.24rem;
    }
    .pullup_wrapper {
      text-align: center;
      color: #a6a6a6;
      font-size: 0.18rem;
    }
  }
</style>
