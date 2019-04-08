import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false,
    notification: [],
  },
  mutations: {
    mobileLoaded(state) {
      state.isMobile = true
    },
  },
  actions: {

  }
})
