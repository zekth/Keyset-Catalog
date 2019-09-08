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
        <button v-on:click="toggleSearch()" class="btn btn-info">
          Show Search Form
        </button>
      </div>
    </div>
    <div class="row" v-bind:class="{ collapse: !showSearch }">
      <div class="col-lg-6">
        <h2>Color pick</h2>
        <div class="row">
          <div class="col-lg-6">
            <chrome-picker v-model="colors" />
          </div>
          <div class="col-lg-6">
            <button class="btn btn-info" v-on:click="findKeyset('base')">
              Find Base
            </button>
            <button class="btn btn-info" v-on:click="findKeyset('accent')">
              Find Accent
            </button>
            <button class="btn btn-info" v-on:click="findKeyset('mod')">
              Find Mod
            </button>
            <label>Color distance threshold</label>
            <VueSlider v-model="threshold" v-bind="sliderOptions" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <h2>Search Results</h2>
        <table id="search-results" class="table table-hover">
          <thead>
            <tr>
              <th>Keyset Name</th>
              <th>Distance</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="r in searchResult">
              <tr v-bind:key="r.name" v-on:click="changeSet(r.name)">
                <td>{{ r.name }}</td>
                <td>{{ r.distance.toFixed() }}</td>
              </tr>
            </template>
          </tbody>
        </table>
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

    <appFooter />
  </div>
</template>

<script lang="ts">
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
import { orderBy } from 'lodash';
import { from } from 'nearest-color';
import { Component, Vue } from 'vue-property-decorator';
import { Chrome } from 'vue-color';
import '@/scss/style.scss';
import k from './keysets/gmk';
import fullSizeAnsi from '@/components/layouts/fullSizeAnsi.vue';
import appFooter from '@/components/footer.vue';
import split60 from '@/components/layouts/60SplitBckSp.vue';

@Component({
  components: {
    VueSlider,
    fullSizeAnsi,
    appFooter,
    split60,
    'chrome-picker': Chrome
  }
})
export default class App extends Vue {
  keysets = orderBy(k, [key => key.name.toLowerCase()], ['asc']);
  selectedSet: any = this.keysets[0].name;
  selectedLayout = 'fullSizeAnsi';
  threshold = 100;
  colors: any = '#fff';
  searchResult: any[] = [];
  showSearch = false;
  sliderOptions = {
    max: 300
  };
  get keyset() {
    return this.keysets.find(x => {
      return x.name === this.selectedSet;
    });
  }
  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
  changeSet(s) {
    this.selectedSet = s;
  }
  findKeyset(type) {
    let colorsToTest = {};
    k.forEach(x => {
      colorsToTest[x.name] = x.colors[type].background;
    });
    const outputs: any = [];
    let nearestKeyset;
    for (;;) {
      const nearest = from(colorsToTest);
      let tempNearest;
      if (this.colors.hex) {
        tempNearest = nearest(this.colors.hex);
      } else {
        tempNearest = nearest(this.colors);
      }
      if (Number(tempNearest.distance.toFixed()) > this.threshold) {
        break;
      } else {
        delete colorsToTest[tempNearest.name];
      }
      outputs.push(tempNearest);
    }
    this.searchResult = outputs;
    if (outputs.length > 0) {
      this.changeSet(outputs[0].name);
    } else {
      console.log('no keyset found');
    }
  }
}
</script>
