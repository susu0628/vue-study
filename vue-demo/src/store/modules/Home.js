import request from '../../utils/request'
const home = {
  namespaced: true,
  state: {
    alreadyEnterHome: JSON.parse(sessionStorage.getItem('alreadyEnterHome') || '{}'),
    swapperImg: []
  },
  mutations: {
    UPDATE_GEUIDE: (state, payload = {}) => {
      state.alreadyEnterHome = payload
      sessionStorage.setItem('alreadyEnterHome', JSON.stringify(payload))
    },
    UPDATE_SWIPPER: (state, payload = {}) => {
      console.log(234234, payload)
      state.swapperImg = payload
    }
  },
  actions: {
    getSwapperImg ({commit}) {
      request('/home/getProductSwiper', {}, 'GET').then((data) => {
        console.log(2222, data)
        commit('UPDATE_SWIPPER', data)
      })
    }
  },
  getters: {
    alreadyEnterHome: (state) => {
      return state.alreadyEnterHome
    },
    swapperImg: (state) => {
      console.log(23423400, state)
      return state.swapperImg
    }
  }
}
export default home
