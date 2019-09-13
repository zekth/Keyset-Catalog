import Vue from 'vue';
// import "bulma/css/bulma.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import App from '@/App.vue';
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);
new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
