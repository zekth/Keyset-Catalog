import Vue from "vue";
import Vuex from "vuex";
import gmk from "./keysets/gmk";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    genKeyset(_, name) {
      const s = gmk.find(e => {
        return e.name === name;
      });
    }
  }
});
