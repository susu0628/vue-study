import request from '../../utils/request'
const ProductDetail = {
  namespaced: true,
  state: {
    productDetail: {},
    discountsList: []
  },
  mutations: {
    UPDATE_DISCOUNTSLIST (state, payload = {}) {
      state.discountsList = payload
    },
    UPDATE_PRODUCTDETAIL (state, payload = {}) {
      state.productDetail = payload
    }
  },
  actions: {
    getDiscounts ({ commit }, params) {
      request('/productDetail/getDiscounts', {}, 'GET').then((data) => {
        commit('UPDATE_DISCOUNTSLIST', data)
      })
    },
    getProductDetail ({ commit }, params) {
      request('/productDetail/getProductDetail', params, 'GET').then((data) => {
        commit('UPDATE_PRODUCTDETAIL', data)
      })
    }
  },
  getters: {
    discountsList: (state) => {
      return state.discountsList
    },
    productDetail: (state) => {
      return state.productDetail
    }
  }
}
export default ProductDetail
