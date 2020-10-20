import request from '../../utils/request'
const Cart = {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    addCartProduct ({ commit }, params) {
      console.log(234234, params)
      request('/cart/addCartProduct', params, 'POST').then((data) => {
        console.log(5555, data)
      })
    }
  },
  getters: {
  }
}
export default Cart
