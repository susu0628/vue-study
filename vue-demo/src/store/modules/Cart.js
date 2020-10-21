import request from '../../utils/request'
import {Toast} from 'vant'
const Cart = {
  namespaced: true,
  state: {
    cartList: []
  },
  mutations: {
    UPDATE_CARTLIST: (state, payload) => {
      state.cartList = payload
    }
  },
  actions: {
    addCartProduct ({ commit }, params) {
      request('/cart/addCartProduct', params, 'POST').then((data) => {
        const { code } = data
        if (code === 200) {
          Toast('添加购物车成功')
        } else {
          Toast('添加购物车失败')
        }
      })
    },
    getCartProduct ({ commit }) {
      request('/cart/getCartProduct', {}, 'POST').then((result) => {
        const {data = []} = result
        commit('UPDATE_CARTLIST', data)
      })
    }
  },
  getters: {
    cartList: (state) => {
      return state.cartList
    }
  }
}
export default Cart
