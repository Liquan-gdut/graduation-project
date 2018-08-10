import Vue from 'vue'
import App from './App'
import router from './router'
import logger from './plugins/logger'

Vue.use(logger, {debug: false})
Vue.config.productionTip = false

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
