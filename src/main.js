import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'materialize-css/dist/js/materialize.min'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
