<template>
  <div id="app" class="container">
    <div class="header clearfix">
      <h3 class>
        Keyset Catalog -
        <a href="https://github.com/zekth/Keyset-Catalog" target="_blank"
          >GitHub Project</a
        >
      </h3>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="form-group">
          <label for>Layout</label>
          <select
            v-model="selectedLayout"
            class="form-control"
            @change="changeKeyboard"
          >
            <option value="fullSizeAnsi">Full Size Ansi</option>
            <option value="wklTkl">Tenkeyless Winkeyless</option>
            <option value="wklTklIso">Tenkeyless Winkeyless - ISO</option>
            <option value="60SplitBckSp">60% Split Backspace</option>
            <option value="lubrigante">Lubrigante / Alice</option>
          </select>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <label for>Keyset</label>
          <select
            v-model="selectedSet"
            class="form-control"
            @change="changeKeyset"
          >
            <option
              v-for="k in keysets"
              v-bind:value="k.id"
              v-bind:key="k.id"
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
            <h2>Search for</h2>
            <button class="btn btn-info" v-on:click="findKeyset('base')">
              Base
            </button>
            <button class="btn btn-info" v-on:click="findKeyset('accent')">
              Accent
            </button>
            <button class="btn btn-info" v-on:click="findKeyset('mod')">
              Mod
            </button>
            <label>Color distance threshold</label>
            <VueSlider v-model="threshold" v-bind="sliderOptions" />
          </div>
        </div>
      </div>
      <div class="col-lg-6" style="height:300px;overflow-y:scroll">
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
              <tr v-bind:key="r.id" v-on:click="changeSet(r.id)">
                <td>{{ r.name }}</td>
                <td>{{ r.distance.toFixed() }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="render-container">
          <fullSizeAnsi
            v-if="selectedLayout === 'fullSizeAnsi'"
            :keyset="keyset"
            :keyboardColor="keyboardColor.hex"
          />
          <split60
            v-if="selectedLayout === '60SplitBckSp'"
            :keyset="keyset"
            :keyboardColor="keyboardColor.hex"
          />
          <wklTkl
            v-if="selectedLayout === 'wklTkl'"
            :keyset="keyset"
            :keyboardColor="keyboardColor.hex"
          />
          <wklTklIso
            v-if="selectedLayout === 'wklTklIso'"
            :keyset="keyset"
            :keyboardColor="keyboardColor.hex"
          />
          <lubrigante
            v-if="selectedLayout === 'lubrigante'"
            :keyset="keyset"
            :keyboardColor="keyboardColor.hex"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <label>Dark mode</label>
        <ToggleButton @change="toggleDarkMode" v-model="darkMode" />
      </div>
      <div class="col-lg-4">
        <button class="btn btn-sm btn-info" v-on:click="toggleCustomKeyboard()">
          Customize keyboard case
        </button>
        <div
          v-bind:class="{ collapse: !showCustomKeyboard }"
          style="margin-top:10px;margin-bottom:10px;"
        >
          <chrome-picker v-model="keyboardColor" />
        </div>
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
import { ToggleButton } from 'vue-js-toggle-button';
import { orderBy, isEmpty } from 'lodash';
import { from } from 'nearest-color';
import { Component, Vue } from 'vue-property-decorator';
import { Chrome } from 'vue-color';
import '@/scss/style.scss';
import k from './keysets/gmk';
import fullSizeAnsi from '@/components/layouts/fullSizeAnsi.vue';
import lubrigante from '@/components/layouts/lubrigante.vue';
import wklTkl from '@/components/layouts/wkl-tkl.vue';
import wklTklIso from '@/components/layouts/wkl-tkl-iso.vue';
import appFooter from '@/components/footer.vue';
import split60 from '@/components/layouts/60SplitBckSp.vue';
@Component({
  components: {
    VueSlider,
    fullSizeAnsi,
    appFooter,
    ToggleButton,
    split60,
    lubrigante,
    wklTkl,
    wklTklIso,
    'chrome-picker': Chrome
  }
})
export default class App extends Vue {
  keysets = orderBy(k, [key => key.name.toLowerCase()], ['asc']);
  selectedSet: any = this.keysets[
    Math.floor(Math.random() * Math.floor(k.length))
  ].id;
  selectedLayout =
    localStorage && localStorage.getItem('keyboard')
      ? localStorage.getItem('keyboard')
      : 'fullSizeAnsi';
  threshold = 100;
  darkMode = localStorage && localStorage.getItem('darkMode') ? true : false;
  colors: any = '#fff';
  showCustomKeyboard = false;
  keyboardColor = {
    hex: '#322B2B'
  };
  searchResult: any[] = [];
  showSearch = false;
  sliderOptions = {
    max: 300
  };
  get keyset() {
    return this.keysets.find(x => {
      return x.id === this.selectedSet;
    });
  }
  mounted() {
    if (this.darkMode) {
      this.toggleDarkMode({ value: true });
    }
  }
  toggleCustomKeyboard() {
    this.showCustomKeyboard = !this.showCustomKeyboard;
  }
  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
  changeSet(s) {
    this.selectedSet = s;
  }
  toggleDarkMode(e) {
    if (e.value) {
      document.getElementsByTagName('html')[0].classList.add('dark');
      if (localStorage) {
        localStorage.setItem('darkMode', 'true');
      }
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark');
      localStorage.removeItem('darkMode');
    }
  }
  changeKeyboard(e) {
    if (localStorage) {
      localStorage.setItem('keyboard', e.target.value);
    }
  }
  changeKeyset(e) {
    console.log(e.target.value);
  }
  findKeyset(type) {
    let colorsToTest = {};
    k.forEach(x => {
      colorsToTest[x.id] = x.colors[type].background;
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
      outputs.push({
        distance: tempNearest.distance,
        name: k[tempNearest.name].name,
        id: k[tempNearest.name].id
      });
      if (isEmpty(colorsToTest)) {
        break;
      }
    }
    this.searchResult = outputs;
    if (outputs.length > 0) {
      this.changeSet(outputs[0].id);
    } else {
      console.log('no keyset found');
    }
  }
}
</script>
