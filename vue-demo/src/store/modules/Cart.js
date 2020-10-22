import request from '../../utils/request'
import {Toast} from 'vant'
const Cart = {
  namespaced: true,
  state: {
    cartList: [],
    selecedProductId: []
  },
  mutations: {
    UPDATE_CARTLIST: (state, payload) => {
      state.cartList = payload
    },
    UPDATE_SELECTPRODUCTID: (state, payload) => {
      state.selecedProductId = payload
    }
  },
  actions: {
    // 添加购物车商品，这个接口在商品详情页以及在购物车商品列表页都会被调用
    // 但二者所给出的提示不同，在商品详情页是添加购物车成功/失败
    // 在购物车列表商品点击规格是修改成功/失败  改变的商品颜色 或者数量
    addCartProduct ({ commit }, params) {
      return request('/cart/addCartProduct', params, 'POST')
    },
    getCartProduct ({ commit }) {
      request('/cart/getCartProduct', {}, 'POST').then((result) => {
        const {data = []} = result
        commit('UPDATE_CARTLIST', data)
      })
    },
    deleteCartProduct ({ dispatch, commit }, params) {
      request('/cart/deleteProduct', params, 'POST').then((result) => {
        dispatch({
          type: 'getCartProduct'
        })
      })
    },
    updateCartProduct ({ dispatch, commit }, params) {
      request('/cart/updateCartProduct', params, 'POST').then((result) => {
        const {code} = result
        if (code === 200) {
          Toast('更新成功')
          dispatch({
            type: 'getCartProduct'
          })
        } else {
          Toast('更新失败')
        }
      })
    }
  },
  getters: {
    cartList: (state) => {
      return state.cartList
    },
    selecedProductId: (state) => {
      return state.selecedProductId
    }
  }
}
export default Cart
