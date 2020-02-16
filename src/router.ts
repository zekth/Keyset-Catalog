import Vue from 'vue';
import Router from 'vue-router';
import Catalog from '@/Catalog.vue';
import Game from '@/Game.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    { path: '*', component: Catalog },
    { path: '/game', component: Game }
  ]
});
