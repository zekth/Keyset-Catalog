<template>
  <div id="app" class="container">
    <select v-model="selectedSet">
      <option v-for="k in keysets" v-bind:value="k.name" v-bind:key="k.name">{{ k.name }}</option>
    </select>
    <keysetAnsi :keyset="keyset" />
  </div>
</template>

<script lang="ts">
import { orderBy } from "lodash";
import { Component, Vue } from "vue-property-decorator";
import "./scss/style.scss";
import k from "./keysets/gmk";
import keysetAnsi from "./components/keysetAnsi.vue";
  console.log(orderBy(k, ["name"], ["asc"]));

@Component({
  components: { keysetAnsi }
})
export default class App extends Vue {
  keysets = orderBy(k, [key => key.name.toLowerCase()], ["asc"]);
  selectedSet = this.keysets[0].name;
  get keyset() {
    return this.keysets.find(x => {
      return x.name === this.selectedSet;
    });
  }
}
</script>
