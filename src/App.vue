<template>
  <div id="app" class="container">
    <div class="header clearfix">
        <h3 class="">Keyset Catalog</h3>
      </div>
    <form>
      <div class="form-group">
        <label for="exampleFormControlSelect2">Keyset</label>
        <select v-model="selectedSet" class="form-control">
          <option v-for="k in keysets" v-bind:value="k.name" v-bind:key="k.name">{{ k.name }}</option>
        </select>
      </div>
    </form>
    <keysetAnsi :keyset="keyset" />
    <div class="row marketing">
        <div class="col-lg-6">
          <h4>Just a database</h4>
          <p>Just here to have a list of all the available keysets</p>
        </div>
        <div class="col-lg-6">
          <h4>Searching</h4>
          <p>Provide a way find the best colormatch</p></div>
      </div>

    <footer class="footer">
        <p>© <a href="https://github.com/zekth">Zekth</a> 2019</p>
      </footer>
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
