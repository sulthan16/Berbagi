import Vue from 'vue'
import Vuex from 'vuex'

import auth from './views/auth/store';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false,
    search: '',
    notification: [],
  },
  modules: {
    auth
  },
  mutations: {
    mobileLoaded(state) {
      state.isMobile = true
    },
    search(state, name) {
      state.search = name
    }


  },
  actions: {

  }
})
