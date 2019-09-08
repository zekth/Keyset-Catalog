<template>
  <div id="app" class="container">
    <div class="header clearfix">
      <h3 class>Keyset Catalog</h3>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="form-group">
          <label for>Layout</label>
          <select v-model="selectedLayout" class="form-control">
            <option value="fullSizeAnsi">Full Size Ansi</option>
            <option value="60SplitBckSp">60% Split Backspace</option>
          </select>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <label for>Keyset</label>
          <select v-model="selectedSet" class="form-control">
            <option
              v-for="k in keysets"
              v-bind:value="k.name"
              v-bind:key="k.name"
              >{{ k.name }}</option
            >
          </select>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <label for>Picked Color</label>
          <chrome-picker v-model="colors" />
          <button class="btn btn-info" v-on:click="findKeyset('base')">
            Find Base
          </button>
          <button class="btn btn-info" v-on:click="findKeyset('accent')">
            Find Accent
          </button>
          <button class="btn btn-info" v-on:click="findKeyset('mod')">
            Find Mod
          </button>
          <label>colorDistance</label>
          <span>{{ colorDistance }}</span>
        </div>
      </div>
    </div>
    <div>
      <div class="col">
        <fullSizeAnsi
          v-if="selectedLayout === 'fullSizeAnsi'"
          :keyset="keyset"
        />
        <split60 v-if="selectedLayout === '60SplitBckSp'" :keyset="keyset" />
      </div>
    </div>
    <div class="row marketing">
      <div class="col-lg-6">
        <h4>Just a database</h4>
        <p>Just here to have a list of all the available keysets</p>
        <h4>Why there is no novelties?</h4>
        <p>Because i do not own those designs neither the SVG files.</p>
        <h4>OMG UI sucks?!</h4>
        <p>I know, but it works; right?</p>
      </div>
      <div class="col-lg-6">
        <h4>Searching</h4>
        <p>Provide a way find the best colormatch</p>
        <h4>Missing keysets?</h4>
        <p>Just submit a pull Request</p>
      </div>
    </div>

    <footer class="footer">
      <p>
        ©
        <a href="https://github.com/zekth">Zekth</a> 2019
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { orderBy } from 'lodash';
import { from } from 'nearest-color';
import { Component, Vue } from 'vue-property-decorator';
import { Chrome } from 'vue-color';
import '@/scss/style.scss';
import k from './keysets/gmk';
import fullSizeAnsi from '@/components/layouts/fullSizeAnsi.vue';
import split60 from '@/components/layouts/60SplitBckSp.vue';

@Component({
  components: { fullSizeAnsi, split60, 'chrome-picker': Chrome }
})
export default class App extends Vue {
  keysets = orderBy(k, [key => key.name.toLowerCase()], ['asc']);
  selectedSet = this.keysets[0].name;
  selectedLayout = 'fullSizeAnsi';
  colorDistance = '';
  colors: any = '#fff';
  get keyset() {
    return this.keysets.find(x => {
      return x.name === this.selectedSet;
    });
  }
  findKeyset(type) {
    console.log(`find keyset:${type}`);
    let colorsToTest = {};
    k.forEach(x => {
      colorsToTest[x.name] = x.colors[type].background;
    });
    console.log(colorsToTest);
    const nearest = from(colorsToTest);
    let nearestKeyset;
    if (this.colors.hex) {
      nearestKeyset = nearest(this.colors.hex);
    } else {
      nearestKeyset = nearest(this.colors);
    }
    console.log(nearestKeyset);
    this.selectedSet = nearestKeyset.name;
    this.colorDistance = nearestKeyset.distance.toFixed();
  }
}
</script>
