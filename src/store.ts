import Vue from 'vue';
import Vuex from 'vuex';
import gmk from './keysets/gmk';
import { orderBy, isEmpty } from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  getters: {
    keyset: state => {
      return state.keysets.find(x => {
        return x.id === state.selectedKeyset;
      });
    }
  },
  state: {
    keysets: orderBy(gmk, [key => key.name.toLowerCase()], ['asc']),
    customBackgroundColor: '',
    customLegendColor: '',
    selectedKeyset:
      localStorage && localStorage.getItem('keyset')
        ? Number(localStorage.getItem('keyset'))
        : gmk[Math.floor(Math.random() * Math.floor(gmk.length))].id
  },
  mutations: {
    setCustomBackground(state, color) {
      state.customBackgroundColor = color;
    },
    setCustomLegend(state, color) {
      state.customLegendColor = color;
    },
    setSelectedKeyset(state, value) {
      state.selectedKeyset = value;
      if (localStorage) {
        localStorage.setItem('keyset', value);
      }
    }
  },
  actions: {}
});
