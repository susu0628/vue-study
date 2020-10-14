<template>
  <div class="product_detail">
    <div class="product_top">
      <img :src="productDetail.img_src" />
      <p class="productDetail_price"><span class="price_unit">￥</span>{{productDetail.price}}</p>
      <p>价格<span class="price_old">￥{{productDetail.oldPrice}}</span></p>
      <div class="productDetail_text">
        <p class="productDetail_title" v-text="productDetail.title"></p>
        <div class="title_icon">
          <i class="iconfont icon-skip"></i>
          <p>分享</p>
        </div>
      </div>
      <p class="productDetail_desc" v-text="productDetail.product_desc"></p>
    </div>
    <div class="productDetail_divide"></div>
    <Bar label="运费">
      <span slot="bar_desc">￥ {{((productDetail || {}).carriage || 0).toFixed(2)}}</span>
      <span slot="bar_right">剩余 {{productDetail.inventoryAll}}</span>
    </Bar>
    <Bar label="优惠">
      <span slot="bar_desc">
        <span v-if="productDetail.discounts === 1" class="discount_tip">包邮</span>
        {{getDiscountsText(productDetail.discounts)}}
      </span>
    </Bar>
    <div class="productDetail_divide"></div>
    <Bar label="服务">
      <span slot="bar_desc" v-text="'收货后结算 · 快递发货'"></span>
    </Bar>
    <Bar label="选择">
      <span slot="bar_desc">颜色；尺码</span>
    </Bar>
    <div class="productDetail_divide"></div>
    <Bar label="商品评价">
      <span slot="bar_right">暂无评价</span>
    </Bar>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Bar from '../../components/Bar'
export default {
  name: 'ProductDetail',
  data: () => {
    return {
    }
  },
  components: {
    Bar
  },
  computed: {
    ...mapGetters('ProductDetail', ['discountsList', 'productDetail'])
  },
  mounted () {
    const { id } = this.$route.params
    this.getDiscounts()
    this.getProductDetail({id}) // 获取商品详情信息
    console.log(33333, this.productDetail)
  },
  methods: {
    ...mapActions('ProductDetail', ['getDiscounts', 'getProductDetail']),
    getDiscountsText (discountid) {
      return (this.discountsList.filter((item) => {
        return item.id === discountid
      })[0] || {}).name
    }
  }
}
</script>
<style lang="less" scoped>
.product_detail {
  width: 100vw;
  .product_top {
    padding-bottom: 0.24rem;
    img {
      width: 100%;
      height: 6.5rem;
    }
    p {
      font-size: 0.22rem;
      // margin-top: 0.12rem;
      padding: 0.04rem 0.12rem;
      .price_old {
        text-decoration: line-through;
      }
    }
    .productDetail_price {
      font-size: 0.3rem;
      color: #f00;
      font-weight: bold;
      .price_unit {
        font-weight: normal;
        font-size: 0.24rem;
      }
    }
    .productDetail_text {
      display: flex;
      justify-content: space-between;
      .productDetail_title {
        font-size: 0.26rem;
        color: #000;
        margin-bottom: 0.1rem;
      }
      .title_icon {
        margin-left: 0.12rem;
        width: 1rem;
        text-align: center;
        i {
          font-size: 0.26rem !important;
          color: #666;
        }
      }
    }
    .productDetail_desc {
      color: #666;
    }
  }
  .productDetail_divide {
    width: 100vw;
    height: 0.12rem;
    background: rgba(0,0,0, 0.05);
  }
  .discount_tip {
    color: #f75f47;
    background-color: rgba(247,95,71, 0.2);
    padding: 0.02rem 0.1rem;
    border-radius: 0.1rem;
  }
}
</style>
