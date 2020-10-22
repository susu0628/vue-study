<template>
  <div class="car_product">
    <VantCheckbox v-model="checked" />
    <div class="car_box">
      <div class="car_left">
        <img :src="item.img_src" />
      </div>
      <div class="car_right">
        <p v-text="item.title"></p>
        <p>
          <span class="car_spec" @click="() => {handleShow(item.pid)}">{{item.spec}}<i class="iconfont icon-arrow-bottom"></i></span>
        </p>
        <div class="car_buy">
          <p><span>￥</span>{{item.price}}</p>
          <VantStepper v-model="item.buyNum" integer min="1" button-size="0.5rem" input-width="0.8rem" />
        </div>
      </div>
    </div>
    <SelectProduct :show="show" :closeClick="closeClick" :id="item.id" :cartNum="item.buyNum" :spec="item.spec" />
  </div>
</template>
<script>
import { Checkbox, Stepper } from 'vant'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import SelectProduct from '../ProductDetail/selectProduct'
export default {
  name: 'cartProduct',
  data: () => {
    return {
      checked: false,
      show: false
    }
  },
  components: {
    VantCheckbox: Checkbox,
    VantStepper: Stepper,
    SelectProduct
  },
  watch: {
    checked (value) {
      const { id } = this.item
      const idx = this.selecedProductId.indexOf(id)
      if (value) {
        if (idx === -1) {
          this.UPDATE_SELECTPRODUCTID(this.selecedProductId.concat(id))
        }
      } else {
        const newSelecedProductId = this.selecedProductId
        newSelecedProductId.splice(idx, 1)
        this.UPDATE_SELECTPRODUCTID(newSelecedProductId)
      }
    },
    selecedProductId (val) {
      this.checked = val.indexOf(this.item.id) > -1
    }
  },
  computed: {
    ...mapGetters('Cart', ['selecedProductId', 'checkedAll'])
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    ...mapMutations('Cart', ['UPDATE_SELECTPRODUCTID']),
    ...mapActions('ProductDetail', ['getProductDetail']),
    handleShow (id) {
      this.getProductDetail({id})
      this.show = true
    },
    closeClick () {
      this.show = false
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
        .car_spec {
          background-color: #dfdfdf;
          padding: 0.08rem 0.4rem;
          border-radius: 0.2rem;
          .iconfont {
            font-size: 0.32rem;
            vertical-align: middle;
          }
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
