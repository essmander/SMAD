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
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false
// Vue.use(Vuesax)
Vue.use(BootstrapVue)
Vue.use(VueApollo)
/* eslint-disable no-new */
const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql?'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  apolloProvider,
})


