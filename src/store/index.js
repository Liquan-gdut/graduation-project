import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    newsShareList: [],
    currentTime: Date.now(),
    domScroll: {
      clientHeight: 0,
      scrollTop: 0,
      scrollHeight: 0,
      clientWidth: 0
    },
    aboutUsCurInd: 0
  },
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production'
})

export default store
export const commit = store.commit
