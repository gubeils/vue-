import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'https://web.codeboy.com/xuezi/',
    uname:localStorage.getItem('uname') || '',
  },
  getters: {
  },
  mutations: {
    updateUname(state,uname){
      state.uname = uname
      localStorage.setItem('uname',uname)
    },
    loginOut(state){
      state.uname = ''
      localStorage.removeItem('uname')
    }
  },
  actions: {
  },
  modules: {
  }
})
