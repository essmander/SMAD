// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuesax from 'vuesax'
// import 'vuesax/dist/vuesax.css'
// import 'material-icons/iconfont/material-icons.css'
import BootstrapVue from 'bootstrap-vue' 
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
Vue.config.productionTip = false
// Vue.use(Vuesax)
Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


