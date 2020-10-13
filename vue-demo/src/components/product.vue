<template>
  <div class="product_box">
    <img :src="img_src" />
    <p class="product_title" v-text="title"></p>
    <div class="product_footer">
      <p><span class="price_unit">￥</span>{{price}}</p>
      <p class="price_btn">马上抢</p>
    </div>
  </div>
</template>
<script>
import { Button } from 'vant'
export default {
  name: 'Product',
  components: {
    VantButton: Button
  },
  data: () => {
    return {
      img_src: '',
      title: '',
      price: 0
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mounted () {
    const { title, price } = this.item
    this.img_src = this.item.img_src
    this.title = title
    this.price = price
  }
}
</script>
<style lang="less" scoped>
  .product_box {
    width: 3.4rem;
    text-align: center;
    border: 1px solid #eeeeee;
    padding: 0.12rem;
    margin-bottom: 0.24rem;
    font-size: 0.2rem;
    img {
      text-align: center;
      width: 2.2rem;
      height: 2.2rem;
    }
    p {
      text-align: left;
    }
    .product_title {
      overflow: hidden;
      text-overflow:ellipsis;
      display:-webkit-box; // 将对象作为弹性伸缩盒子模型显示
      -webkit-box-orient:vertical; // 从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
      -webkit-line-clamp:2; // 这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数
    }
    .product_footer {
      display: flex;
      justify-content: space-between;
      margin-top: 0.16rem;
      color: #f75f47;
      p:first-child {
        margin-top: 0.12rem;
      }
      .price_unit {
        font-size: 0.16rem;
      }
      .price_btn {
        padding: 0.08rem 0.3rem;
        background-color: #f75f47;
        color: #fff;
        border-radius: 0.2rem;
      }
    }
  }
</style>
