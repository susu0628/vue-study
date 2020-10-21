<template>
  <div class="car_product">
    <VantCheckbox v-model="checked" />
    <div class="car_box">
      <div class="car_left">
        <img :src="item.img_src" />
      </div>
      <div class="car_right">
        <p v-text="item.title"></p>
        <p v-text="item.spec"></p>
        <div class="car_buy">
          <p><span>￥</span>{{item.price}}</p>
          <VantStepper v-model="item.buyNum" integer min="1" button-size="0.5rem" input-width="0.8rem" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Checkbox, Stepper } from 'vant'
export default {
  name: 'cartProduct',
  data: () => {
    return {
      checked: false
    }
  },
  components: {
    VantCheckbox: Checkbox,
    VantStepper: Stepper
  },
  props: {
    item: {
      type: Object
    }
  }
}
</script>
<style lang="less" scoped>
  .car_product {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    margin: 0.24rem;
    padding: 0.24rem;
    margin-bottom: 0.16rem;
    border-radius: 0.1rem;
    /deep/ .van-checkbox__icon .van-icon {
      font-size: 0.24rem;
    }
    .car_box {
      display: flex;
      margin-left: 0.2rem;
      .car_left {
        img {
          width: 2rem;
          height: 2rem;
        }
      }
      .car_right {
        width: 3.4rem;
        margin-left: 0.3rem;
        font-size: 0.24rem;
        p {
          margin-bottom: 0.1rem;
        }
        p:first-child {
          overflow: hidden;
          text-overflow: ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:2;
        }
        .car_buy {
          display: flex;
          justify-content: space-between;
          /deep/ .van-stepper__input {
            font-size: 0.24rem;
          }
          p {
            margin-top: 0.12rem;
            color: #f75f47;
            font-size: 0.3rem;
            span {
              font-size: 0.22rem;
            }
          }
        }
      }
    }
  }
</style>
