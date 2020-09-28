const home = {
  namespaced: true,
  state: {
    alreadyEnterHome: JSON.parse(sessionStorage.getItem('alreadyEnterHome') || '{}')
  },
  mutations: {
    UPDATE_GEUIDE: (state, payload = {}) => {
      state.alreadyEnterHome = payload
      sessionStorage.setItem('alreadyEnterHome', JSON.stringify(payload))
    }
  },
  actions: {},
  getters: {
    alreadyEnterHome: (state) => {
      return state.alreadyEnterHome
    }
  }
}
export default home
