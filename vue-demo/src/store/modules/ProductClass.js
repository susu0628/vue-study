import request from '../../utils/request'
const ProductClass = {
  namespaced: true,
  state: {
    productList: []
  },
  mutations: {
    UPDATE_PRODUCT_LIST (state, payload = []) {
      state.productList = payload.productlist
    }
  },
  actions: {
    getProductList ({ commit }, id) {
      request('/productClass/getProductList', { id }, 'GET').then((data) => {
        commit('UPDATE_PRODUCT_LIST', data)
      })
    }
  },
  getters: {
    productList: (state) => {
      console.log(898989, state)
      return state.productList
    }
  }
}
export default ProductClass
