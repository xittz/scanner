import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentExchange: '',
    currentView: 'MoversLaggers'
  },
  mutations: {
    changeExchange(state, newExchange) {
      state.currentExchange = newExchange;
    },
    changeView(state, newView) {
      state.currentView = newView;
    }
  }
})
