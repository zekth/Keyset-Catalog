import Vue from 'vue';
import Vuex from 'vuex';
import gmk from './keysets/gmk';
import { orderBy, maxBy } from 'lodash';
import tinycolor from 'tinycolor2';
import { genIds } from '@/utils/keys';
import { IKeyset } from './keysets/keysets';
const ALL_KEYSETS = getKeysets();

Vue.use(Vuex);

function rngColor(c) {
  let t = tinycolor(c);
  const rng = Math.floor(Math.random() * Math.floor(6));
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

function getKeysets(): IKeyset[] {
  const _gmk = orderBy(gmk, [(key) => key.name.toLowerCase()], ['asc']);
  const customKeysets = localStorage.getItem('customKeysets')
    ? JSON.parse(localStorage.getItem('customKeysets')!)
    : [];
  return genIds([..._gmk, ...customKeysets]);
}

function getSelectedKeyset() {
  const prefKeyset =
    localStorage && localStorage.getItem('keyset')
      ? Number(localStorage.getItem('keyset'))
      : -1;
  const found = ALL_KEYSETS.filter((x) => {
    return x.id === prefKeyset;
  });
  if (found[0]) {
    return found[0].id;
  } else {
    return ALL_KEYSETS[Math.floor(Math.random() * Math.floor(gmk.length))].id;
  }
}

function initShowCustomize() {
  const k = ALL_KEYSETS.find((x) => {
    return x.id === getSelectedKeyset();
  });
  if (k) {
    return !!k.isCustom;
  } else {
    return false;
  }
}

function randItems(array, nbItems) {
  const a = array.slice(0);
  const out = [];
  const l = nbItems > a.length ? a.length : nbItems;
  while (out.length < nbItems) {
    const idxToGet = Math.floor(Math.random() * a.length);
    out.push(a.splice(idxToGet, 1)[0]);
  }
  return out;
}

function setAnswer(array) {
  array[Math.floor(Math.random() * array.length)].answer = true;
}

export default new Vuex.Store({
  strict: false,
  getters: {
    successRate: (state) => {
      if (!state.gameHistory.length) {
        return 0;
      }
      return Math.ceil(
        (state.gameHistory.filter((x) => x.isRight).length /
          state.gameHistory.length) *
          100
      );
    },
    successScore: (state) => {
      return `${state.gameHistory.filter((x) => x.isRight).length}/${
        state.gameHistory.length
      }`;
    },
    questionContext: (state) => {
      const alreadyInHistory = state.gameHistory.map((x) => x.id);
      const availableAnswers = state.keysets.filter(
        (x) => !alreadyInHistory.includes(x.id)
      );
      const ctx = randItems(availableAnswers, 4);
      setAnswer(ctx);
      return ctx;
    },
    keyset: (state) => {
      return state.keysets.find((x) => {
        return x.id === state.selectedKeyset;
      });
    },
    targets: (state) => {
      const k = state.keysets.find((x) => {
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
    customBackground: (state) => {
      if (!state.editTarget) {
        return '';
      }
      // @ts-ignore
      return state.editTarget!.background;
    },
    customLegend: (state) => {
      if (!state.editTarget) {
        return '';
      }
      // @ts-ignore
      return state.editTarget!.legend;
    }
  },
  state: {
    keysets: getKeysets(),
    customBackgroundColor: '',
    customLegendColor: '',
    editTarget: null,
    selectedKeyset: getSelectedKeyset(),
    showCustomize: initShowCustomize(),
    gameHistory: []
  },
  mutations: {
    addAnswer(state, value) {
      Vue.set(state.gameHistory, state.gameHistory.length, value);
      console.log(state.gameHistory);
    },
    setShowCustomize(state, value) {
      state.showCustomize = value;
    },
    setCustomBackground(state, color) {
      // @ts-ignore
      state.editTarget.background = color;
    },
    setCustomLegend(state, color) {
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
    },
    deleteKeyset(state, value) {
      state.keysets.splice(state.keysets.indexOf(value), 1);
      if (localStorage) {
        const customKeysets = localStorage.getItem('customKeysets')
          ? JSON.parse(localStorage.getItem('customKeysets')!)
          : [];
        customKeysets.splice(state.keysets.indexOf(value), 1);
        localStorage.setItem('customKeysets', JSON.stringify(customKeysets));
      }
      state.selectedKeyset = 1;
    },
    addKeyset(state, value) {
      state.keysets.push(value);
      if (localStorage) {
        const customKeysets = localStorage.getItem('customKeysets')
          ? JSON.parse(localStorage.getItem('customKeysets')!)
          : [];
        customKeysets.push(value);
        localStorage.setItem('customKeysets', JSON.stringify(customKeysets));
      }
    }
  },
  actions: {
    toggleShowCustomize({ state, commit }) {
      commit('setShowCustomize', !state.showCustomize);
    },
    selectKeyset({ commit, getters }, value) {
      commit('setSelectedKeyset', value);
      commit(
        'setEditTarget',
        getters.targets[Object.getOwnPropertyNames(getters.targets)[0]].color
      );
    },
    saveCustomKeyset({ commit, getters }) {
      const k = getters.keyset;
      const customKeysets = localStorage.getItem('customKeysets')
        ? JSON.parse(localStorage.getItem('customKeysets')!)
        : [];
      const out = customKeysets.filter((x) => {
        return x.id !== k.id;
      });
      out.push(k);
      localStorage.setItem('customKeysets', JSON.stringify(out));
    },
    createKeyset({ commit, state, getters }) {
      const max = maxBy(state.keysets, function (o) {
        return o.id;
      }).id;
      const newId = max + 1;
      const k = {
        id: newId,
        name: `Custom Keyset ${newId}`,
        designer: 'you',
        isCustom: true,
        colors: {
          base: {
            background: '#ffffff',
            legend: '#000000'
          },
          mod: {
            background: '#ffffff',
            legend: '#000000'
          },
          accent: {
            background: '#ffffff',
            legend: '#000000'
          }
        }
      };
      commit('addKeyset', k);
      commit('setSelectedKeyset', newId);
      commit('setEditTarget', getters.targets[0].color);
    },
    designerMoDaF0ckA({ commit, state, getters }) {
      commit(
        'setSelectedKeyset',
        state.keysets.find((x) => {
          return x.name.indexOf('Minimal') > 0;
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
        state.keysets.find((x) => {
          return x.name.indexOf('Bento') > 0;
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
