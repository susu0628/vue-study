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
      // 存储在sessionStorage中时，会转换成json类型，
      // 所以，一些引用类型对象，我们在存储之前，需先自己利用JSON.stringify()来进行转换
      sessionStorage.setItem('productClass', JSON.stringify(payload))
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
      return JSON.parse(sessionStorage.getItem('productClass'))
    }
  }
}
export default home
