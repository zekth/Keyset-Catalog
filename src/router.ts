import Vue from 'vue';
import Router from 'vue-router';
import Catalog from '@/Catalog.vue';
import Game from '@/game.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '*', component: Catalog },
    { path: '/game', component: Game }
  ]
});
