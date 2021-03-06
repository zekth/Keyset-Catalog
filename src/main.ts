import Vue from 'vue';
import App from '@/App.vue';
import store from './store';
import router from './router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faSearch,
  faCog,
  faEye,
  faCommentDollar,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import PerfectScrollbar from 'vue2-perfect-scrollbar';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
import { Plugin } from 'vue-fragment';
Vue.use(Plugin);

library.add(faCog);
library.add(faGithub);
library.add(faSearch);
library.add(faEye);
library.add(faCommentDollar);
library.add(faTrash);

Vue.use(Plugin);
Vue.use(PerfectScrollbar);
Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
