<template>
  <div id="app" class="container">
    <keysetAnsi v-for="k in keysets" v-bind:key="k.name" :keyset="k" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "./scss/style.scss";
import k from "./keysets/gmk";
import keysetAnsi from "./components/keysetAnsi.vue";

@Component({
  components: { keysetAnsi },
  data() {
    return {
      keysets: k
    };
  }
})
export default class App extends Vue {}
</script>
