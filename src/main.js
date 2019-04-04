import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import instance from './instance'
import 'bootstrap'
import {$, jquery} from 'jquery'
import 'popper.js'

Vue.config.productionTip = false

new Vue({
  router,
  instance,
  $, jquery,
  store,
  render: h => h(App)
}).$mount('#app')
