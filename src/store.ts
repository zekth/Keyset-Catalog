import Vue from 'vue';
import Vuex from 'vuex';
import gmk from './keysets/gmk';
import { orderBy } from 'lodash';
import tinycolor from 'tinycolor2';

Vue.use(Vuex);
function rngColor(c) {
  let t = tinycolor(c);
  const rng = Math.floor(Math.random() * Math.floor(10));
  const lightDark = Math.floor(Math.random() * Math.floor(2));
  if (lightDark === 1) {
    t = t.lighten(rng);
  } else {
    t.darken(rng);
  }
  return t.toString();
}
function yoloColor() {
  return tinycolor.random().toString();
}
export default new Vuex.Store({
  strict: false,
  getters: {
    keyset: state => {
      return state.keysets.find(x => {
        return x.id === state.selectedKeyset;
      });
    },
    targets: state => {
      const k = state.keysets.find(x => {
        return x.id === state.selectedKeyset;
      });
      const out: any[] = [];
      for (let p in k.colors) {
        out.push({
          name: p,
          color: k.colors[p]
        });
      }
      return out;
    },
    customBackground: state => {
      if (!state.editTarget) {
        return '';
      }
      // @ts-ignore
      return state.editTarget!.background;
    },
    customLegend: state => {
      if (!state.editTarget) {
        return '';
      }
      // @ts-ignore
      return state.editTarget!.legend;
    }
  },
  state: {
    keysets: orderBy(gmk, [key => key.name.toLowerCase()], ['asc']),
    customBackgroundColor: '',
    customLegendColor: '',
    editTarget: null,
    selectedKeyset:
      localStorage && localStorage.getItem('keyset')
        ? Number(localStorage.getItem('keyset'))
        : gmk[Math.floor(Math.random() * Math.floor(gmk.length))].id
  },
  mutations: {
    setCustomBackground(state, color) {
      // state.customBackgroundColor = color;
      // @ts-ignore
      state.editTarget.background = color;
    },
    setCustomLegend(state, color) {
      // state.customLegendColor = color;
      // @ts-ignore
      state.editTarget.legend = color;
    },
    setEditTarget(state, target) {
      state.editTarget = target;
    },
    setSelectedKeyset(state, value) {
      state.selectedKeyset = value;
      state.editTarget = null;
      if (localStorage) {
        localStorage.setItem('keyset', value);
      }
    }
  },
  actions: {
    designerMoDaF0ckA({ commit, state, getters }) {
      commit(
        'setSelectedKeyset',
        state.keysets.find(x => {
          return x.name === 'Minimal';
        }).id
      );
      for (let p in getters.targets) {
        commit('setEditTarget', getters.targets[p].color);
        commit('setCustomBackground', yoloColor());
        commit('setCustomLegend', yoloColor());
      }
    },
    biipMe({ commit, state, getters }) {
      commit(
        'setSelectedKeyset',
        state.keysets.find(x => {
          return x.name === 'Bento';
        }).id
      );
      for (let p in getters.targets) {
        commit('setEditTarget', getters.targets[p].color);
        commit(
          'setCustomBackground',
          rngColor(getters.targets[p].color.background)
        );
        commit('setCustomLegend', rngColor(getters.targets[p].color.legend));
      }
    }
  }
});
