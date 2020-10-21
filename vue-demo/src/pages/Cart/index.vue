<template>
  <div class="car_container">
    <div class="car_top">
      <div class="top_left">
        <i class="iconfont icon-icon-shop"></i>
        <span>乐町Online商城</span>
      </div>
      <div class="top_right">
        <span @click="switchEdit">{{isEdit ? '完成' : '编辑'}}</span>
      </div>
    </div>
    <div class="car_content">
      <CartProduct v-for="(item, idx) in cartList" :key="idx" :item="item" />
    </div>
    <div class="car_bottom">
      <div class="bottom_left">
        <VantCheckbox v-model="checkedAll" />
        <p>全选</p>
      </div>
      <div class="bottom_right">
        <div class="left_all" v-if="!isEdit">
          <p>合计: <span>￥</span><span>0</span></p>
          <p>不含运费</p>
        </div>
        <div class="right_btn">
          <span>{{isEdit ? '删除' : '结算'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import {Checkbox} from 'vant'
import CartProduct from './cartProduct'
export default {
  name: 'Cart',
  data: () => {
    return {
      isEdit: false,
      checkedAll: false
    }
  },
  components: {
    CartProduct,
    VantCheckbox: Checkbox
  },
  async mounted () {
    await this.getCartProduct()
  },
  watch: {
    checkedAll (val) {
      if (val) {
        this.UPDATE_SELECTPRODUCTID(this.cartList.map((item) => {
          return item.id
        }))
      } else {
        if (this.cartList.length === this.selecedProductId.length) {
          this.UPDATE_SELECTPRODUCTID([])
        }
      }
    },
    selecedProductId (val) {
      this.checkedAll = this.cartList.length === val.length
    }
  },
  computed: {
    ...mapGetters('Cart', ['cartList', 'selecedProductId'])
  },
  methods: {
    ...mapActions('Cart', ['getCartProduct']),
    ...mapMutations('Cart', ['UPDATE_SELECTPRODUCTID']),
    switchEdit () {
      this.isEdit = !this.isEdit
    }
  }
}
</script>
<style lang="less" scoped>
  .car_container {
    font-size: 0.26rem;
    background-color: #f6f6f6;
    height: 100vh;
    position: relative;
    .car_top {
      display: flex;
      justify-content: space-between;
      padding: 0.24rem;
      background-color: #fff;
      .top_left {
        .iconfont {
          font-size: 0.28rem;
        }
      }
    }
    .car_bottom {
      position: fixed;
      bottom: 1rem;
      left: 0px;
      width: 100vw;
      height: 1rem;
      padding: 0.1rem;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      .bottom_left {
        display: flex;
        margin-top: -0.15rem;
        /deep/ .van-checkbox__icon .van-icon {
          font-size: 0.28rem;
        }
        p {
          margin-top: 0.38rem;
          margin-left: 0.1rem;
        }
      }
      .bottom_right {
        display: flex;
        .left_all {
          margin-right: 0.2rem;
          p:first-child {
            font-weight: bold;
            span {
              font-size: 0.3rem;
              color: #f75f47;
            }
            span:first-child {
              font-size: 0.24rem;
            }
          }
          p:last-child {
            font-size: 0.22rem;
            margin-top: 0.08rem;
            color: rgba(0, 0, 0, .65);
          }
        }
        .right_btn {
          margin-top: 0.15rem;
          span {
            padding: 0.2rem 0.6rem;
            border-radius: 0.4rem;
            background-color: #ccc;
          }
        }
      }
    }
  }
</style>
