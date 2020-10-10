import request from '../../utils/request'
const home = {
  namespaced: true,
  state: {
    alreadyEnterHome: JSON.parse(sessionStorage.getItem('alreadyEnterHome') || '{}'),
    swapperImg: [],
    productClass: []
  },
  mutations: {
    UPDATE_GEUIDE: (state, payload = {}) => {
      state.alreadyEnterHome = payload
      sessionStorage.setItem('alreadyEnterHome', JSON.stringify(payload))
    },
    UPDATE_SWIPPER: (state, payload = {}) => {
      state.swapperImg = payload
    },
    UPDATE_PRODUCTCLASS: (state, payload = {}) => {
      state.productClass = payload
    }
  },
  actions: {
    getSwapperImg ({commit}) {
      request('/home/getProductSwiper', {}, 'GET').then((data) => {
        const {swiperImg, productClass} = data
        commit('UPDATE_SWIPPER', swiperImg)
        commit('UPDATE_PRODUCTCLASS', productClass)
      })
    }
  },
  getters: {
    alreadyEnterHome: (state) => {
      return state.alreadyEnterHome
    },
    swapperImg: (state) => {
      return state.swapperImg
    },
    productClass: (state) => {
      return state.productClass
    }
  }
}
export default home
