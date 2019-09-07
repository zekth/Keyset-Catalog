import Vue from 'vue'
// import "bulma/css/bulma.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import App from '@/App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
