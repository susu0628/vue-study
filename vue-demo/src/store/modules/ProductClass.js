import request from '../../utils/request'
const ProductClass = {
  namespaced: true,
  state: {
    productList: []
  },
  mutations: {
    UPDATE_PRODUCT_LIST (state, payload = {}) {
      const { isPullingDown, data } = payload
      if (isPullingDown) { // 当时下拉刷新发起的请求时，需将页面中的数据重置
        state.productList = data.productlist
      } else {
        state.productList = state.productList.concat(data.productlist)
      }
    }
  },
  actions: {
    getProductList ({ commit }, params) {
      const { isPullingDown } = params
      delete params.isPullingDown
      request('/productClass/getProductList', params, 'GET').then((data) => {
        commit('UPDATE_PRODUCT_LIST', {data, isPullingDown})
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
