import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false

  },
  getters: {
  },
  mutations: {
    LoggedIn(state) {
      state.isLoggedIn = true;

    }
  },
  actions: {
    mockLogin(context) {  context.commit('LoggedIn')}
  }
})