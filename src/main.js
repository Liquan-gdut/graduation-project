import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App'
import router from './router'
import logger from './plugins/logger'
// import filter from '@/filters'

Vue.use(logger, {debug: false})
Vue.use(Vuex)
Vue.config.productionTip = false
// Vue.use(filter)

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
