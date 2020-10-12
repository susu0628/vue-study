<template>
  <div class="home">
    <div class="home_top">
      <VantSearch class="top_search" />
    </div>
    <div class="home_swipe">
      <div class="swipe_title">
        <p>首页</p>
      </div>
      <section class="swipe_time">
        <p>商城服务时间：9:00-18:00</p>
        <p>为更好的为您服务，请大家在服务时间内咨询客服噢~</p>
        <p class="swiper_heart">♥ ♥ ♥ ♥</p>
      </section>
      <VantSwipe :autoplay="3000" class="swiper_img">
        <VantSwipeItem v-for="(item, index) in swapperImg" :key="index">
          <img :src="item.img_src" />
        </VantSwipeItem>
      </VantSwipe>
    </div>
    <section class="class_title">热门分类</section>
    <ul class="home_class">
      <li v-for="item in productClass" :key="item.id" @click="() => {jumpLink(item.id)}">
        <div class="class_box">
          <img :src="item.img_src" />
        </div>
        <p class="class_text">{{item.name}}>></p>
      </li>
    </ul>
  </div>
</template>
<script>
import { Search, Swipe, SwipeItem } from 'vant'
import ColorIcon from '../../components/ColorIcon'
import Guide from '../../components/Guide'
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  data: () => {
    return {
    }
  },
  components: {
    VantSearch: Search,
    VantSwipe: Swipe,
    VantSwipeItem: SwipeItem,
    ColorIcon,
    Guide
  },
  mounted () {
    this.getSwapperImg()
  },
  computed: {
    ...mapGetters('Home', ['alreadyEnterHome', 'swapperImg', 'productClass'])
  },
  methods: {
    ...mapMutations('Home', ['UPDATE_GEUIDE']),
    ...mapActions('Home', ['getSwapperImg']),
    jumpLink (id) {
      this.$router.push({
        path: `/productClass/${id}`
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .home {
    height: calc(~"100vh - 1rem");
    overflow: auto;
    .home_top {
      width: 100vw;
      height: 0.8rem;
      background-color: #efefef;
      display: flex;
      justify-content: center;
      align-items: center;
      .top_search {
        height: 0.6rem;
        width: 5.2rem;
        border-radius: 0.4rem;
        /deep/ .van-search__content {
          background-color: #fff;
        }
        /deep/ .van-field__left-icon .van-icon, .van-field__right-icon .van-icon {
          font-size: 0.3rem;
        }
        .van-cell {
          font-size: 0.24rem;
          line-height: 0.24rem;
        }
        .van-search__content {
          border-radius: 1rem;
        }
      }
    }
    .home_swipe {
      font-size: 0.24rem;
      .swipe_title {
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        border-bottom: 0.01rem solid #eee;
        position: relative;
        color: #f75f47;
      }
      .swipe_title::after {
        position: absolute;
        bottom: 0.05rem;
        left: 2.24rem;
        content: '';
        display: block;
        width: 40%;
        height: 0.06rem;
        border-radius: 0.03rem;
        background-color: #f75f47;
      }
      .swipe_time {
        margin-top: 0.24rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .swiper_heart {
          color: #f75f47;
          margin-top: 0.12rem;
        }
      }
      /deep/ .van-swipe__indicators .van-swipe__indicator {
        height: 0.12rem;
        width: 0.12rem;
      }
      /deep/ .van-swipe__indicators .van-swipe__indicator--active {
        background-color: #f75f47;
      }
    }
    .class_title {
      text-align: center;
      font-size: 0.28rem;
      margin-top: 0.24rem;
    }
    .home_class {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 0.24rem 0.48rem;
      .class_box {
        border: 0.01rem solid #eeeeee;
        padding: 0.12rem;
        margin: 0.12rem;
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
      .class_text {
        text-align: center;
        font-size: 0.24rem;
        margin-bottom: 0.12rem;
      }
    }
  }
</style>
