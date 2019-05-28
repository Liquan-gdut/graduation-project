import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App'
import router from './router'
import $ from 'jquery'
// import logger from './plugins/logger'

import '../static/js/bootstrap'
import '../static/js/easing'
import '../static/js/imagezoom'
import '../static/js/jquery-scrolltofixed-min'
import '../static/js/jquery.flexslider'
import '../static/js/jquery.knob'
import '../static/js/jquery.mousewheel'
import '../static/js/jquery.throttle'
import '../static/js/jquery.menu-aim'
import '../static/js/main'
import '../static/js/minicart'
import '../static/js/move-top'

import '../static/css/bootstrap.css'
import '../static/css/animate.min.css'
import '../static/css/flexslider.css'
import '../static/css/font-awesome.css'


// Vue.use(logger, {
//   debug: false
// })
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})