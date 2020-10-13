import request from '../../utils/request'
const ProductClass = {
  namespaced: true,
  state: {
    productList: []
  },
  mutations: {
    UPDATE_PRODUCT_LIST (state, payload = []) {
      state.productList = state.productList.concat(payload.productlist)
    }
  },
  actions: {
    getProductList ({ commit }, params) {
      request('/productClass/getProductList', params, 'GET').then((data) => {
        commit('UPDATE_PRODUCT_LIST', data)
      })
    }
  },
  getters: {
    productList: (state) => {
      return state.productList
    }
  }
}
export default ProductClass
