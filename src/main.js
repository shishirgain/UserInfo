import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/css/custom.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.dispatch('init')
  },
  render: h => h(App)
}).$mount('#app')
