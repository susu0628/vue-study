<template>
  <VantPopup
    v-model="isShow"
    round
    position="bottom"
    closeable
    :style="{ height: '50%' }"
    @closed="closeClick"
  >
    <div class="popup_content">
      <div class="popup_top">
        <div class="top_left">
          <img :src="productDetail.img_src" />
        </div>
        <div class="top_right">
          <p><span class="price_unit">￥</span>{{productDetail.price}}</p>
          <p>剩余{{inventoryNum}}件</p>
          <p v-if="!activeColor">请选择颜色</p>
          <p v-else>已选择：{{activeColor}}</p>
        </div>
      </div>
      <p class="content_title">颜色分类</p>
      <div class="popup_color">
        <VantButton
          @click="chooseColor(item.color)"
          :class="{'popup_box': true, 'active_box': item.color === activeColor}"
          v-for="item in inventoryColor"
          :key="item.id"
          :disabled="item.disabled"
        >
          {{item.color}}
        </VantButton>
      </div>
      <p class="content_title">尺寸分类</p>
      <div class="popup_box active_box" >均码</div>
      <div class="popup_buy">
        <div class="buy_left">购买数量</div>
        <VantStepper v-model="buyNum" integer min="1" button-size="0.5rem" input-width="0.8rem" />
      </div>
      <div class="popup_btn" @click="() => {addCart(productDetail.id, 0)}">加入购物车</div>
    </div>
  </VantPopup>
</template>
<script>
import { Popup, Stepper, Button, Toast } from 'vant'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'selectProduct',
  data: (vm) => {
    return {
      isShow: false,
      inventoryNum: 0, // 库存量
      inventoryColor: [], // 颜色的库存
      activeColor: '',
      buyNum: 1
    }
  },
  computed: {
    ...mapGetters('ProductDetail', ['productDetail'])
  },
  props: {
    show: {
      type: Boolean
    },
    closeClick: { // 关闭弹出层且动画结束后触发
      type: Function
    },
    id: { // 购物车商品的主键id  不是商品id
      type: Number,
      default: 0
    },
    cartNum: { // 购物车该商品的数量
      type: Number,
      default: 1
    },
    spec: { // 购物车该商品的规格 即颜色
      type: String,
      default: ''
    }
  },
  watch: {
    show (val) {
      this.isShow = val
    },
    productDetail (val) {
      const { inventoryAll, inventory } = val
      /**
       * 想给inventoryNum赋值但一直不成功，之前用的方法有
       * 1、在mounted中赋值
       * 因为该组件是子组件，而productDetail的值是在父组件的mounted中才得到值，所以无法在还没有得到值之前，就调用到
       * 且此时打印 { __obj: observer } 表明可以监听到值的更新，但无法获取到到更新的值
       * 2、在data中利用vm来更新值，也不行，此时，也是在mounted之前，尽管打印vm能看到需要的值，但用vm.productDetail返回的是undefined
       * 3、watch监听，在每次productDetail更新的时候，来更新你需要的值 成功！！！
       */
      this.inventoryNum = inventoryAll
      this.inventoryColor = inventory.map((item) => {
        if (item.inventory === 0) {
          return {
            ...item,
            disabled: true
          }
        } else {
          return item
        }
      })
    }
  },
  components: {
    VantPopup: Popup,
    VantStepper: Stepper,
    VantButton: Button
  },
  mounted () {
    this.isShow = this.show
    // 在购物车列表页打开商品选择框时 需回填原始颜色以及原始数量
    this.activeColor = this.spec
    this.buyNum = this.cartNum
  },
  methods: {
    ...mapActions('Cart', ['addCartProduct', 'deleteCartProduct', 'getCartProduct', 'updateCartProduct']),
    chooseColor (color) {
      const {inventory: inventoryNum} = this.inventoryColor.filter((item) => {
        return item.color === color
      })[0] || {}
      this.inventoryNum = inventoryNum
      // this.activeId = id
      this.activeColor = color
    },
    // 添加购物车
    /**
     * 添加购物车 功能分析
     * 弹出选择商品页 可能有两种情况
     * 一、在商品详情页面 点击选择商品颜色、尺码 或单击加入购物车按钮都会弹出选择商品页
     * 注意：
     * ① 页面已经存在id相同，颜色相同的商品，此时，应更新该商品的数量
     * ② 页面不存在id相同，颜色相同的商品，此时，应新增一条数据
     * this.addCartProduct(...)
     * 二、在购物车商品列表页面，单击规格，会弹出选择商品页
     * 注意：
     * ① 需带原始颜色（spec）、原始数量（cartNum） 到商品选择页，回填上activeColor 以及buyNum
     * ② 加入购物车时，判断颜色是否改变 颜色未改变，如果数量改变了 更新该购物车商品 否则 不发起请求，直接关闭选择商品页
     * 更新该购物车商品 新增一个接口 this.updateCartProduct(...)
     * ③ 颜色改变了，则再次执行① ② 同时，需要删除该购物车商品
     * 删除该购物车商品 新增一个接口 this.deleteCartProduct(...)
     */
    async addCart (id, isBuy) {
      if (!this.activeColor) {
        Toast({
          position: 'bottom',
          message: '请选择颜色'
        })
        return
      }
      const {activeColor, buyNum, cartNum} = this
      if (this.id) {
        if (this.activeColor === this.spec) {
          if (buyNum !== cartNum) {
            this.updateCartProduct({id: this.id, buyNum})
          }
        } else {
          const data = await this.addCartProduct({pid: id, activeColor, buyNum, isBuy})
          if (data.code === 200) {
            Toast('修改成功')
          } else {
            Toast('修改失败')
          }
          this.deleteCartProduct({id: this.id})
        }
        this.isShow = false
      } else {
        const data = this.addCartProduct({pid: id, activeColor, buyNum, isBuy}) || {}
        if (data.code === 200) {
          Toast('添加购物车成功')
        } else {
          Toast('添加购物车失败')
        }
        this.isShow = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
.popup_content {
  padding: 0.12rem 0.2rem;
  .popup_top {
    padding: 0.12rem;
    border-bottom: 0.01rem solid #ddd;
    display: flex;
    .top_left {
      margin-right: 0.2rem;
      img {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
    .top_right {
      p:first-child {
        color: #f75f47;
        font-size: 0.3rem;
        font-weight: bold;
        margin-bottom: 0.12rem;
        .price_unit {
          font-size: 0.24rem;
        }
      }
      p:nth-child(2) {
        margin-bottom: 0.1rem;
      }
      p {
        font-size: 0.22rem;
        color: #999;
      }
    }
  }
  .popup_color {
    display: flex;
    margin-top: 0.24rem;
  }
  .popup_box {
    padding: 0.1rem 0.3rem;
    border: 0.01rem solid #aaa;
    margin-right: 0.3rem;
    border-radius: 0.05rem;
    display: inline-block;
  }
  .active_box {
    background-color: #f75f47;
    color: #fff;
    border: 0.01rem solid #f75f47;
  }
  .content_title {
    font-size: 0.28rem;
    margin-top: 0.24rem;
    margin-bottom: 0.24rem;
  }
  .popup_buy {
    margin-top: 0.24rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.28rem;
    border-top: 0.01rem solid #ddd;
    padding-top: 0.24rem;
    /deep/ .van-stepper__input {
      font-size: 0.24rem;
    }
  }
  .popup_btn {
    position: absolute;
    bottom: 0.12rem;
    left: 0.24rem;
    right: 0.24rem;
    text-align: center;
    background-color:#f75f47;
    padding: 0.16rem;
    font-size: 0.26rem;
    color: #fff;
    border-radius: 0.3rem;
  }
}
</style>
