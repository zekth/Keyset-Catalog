<template>
  <div>
    <div id="app" class="container">
      <appHeader />
      <div class="row mb-2">
        <div class="col-lg-3">
          <div class="form-group">
            <label class="font-weight-bold">Layout</label>
            <select
              v-model="selectedLayout"
              class="form-control"
              @change="changeKeyboard"
            >
              <option value="fullSizeAnsi">Full Size Ansi</option>
              <option value="wklTkl">Tenkeyless Winkeyless</option>
              <option value="wklTklIso">Tenkeyless Winkeyless - ISO FR</option>
              <option value="60SplitBckSp">60% Split Backspace</option>
              <option value="lubrigante">Lubrigante / Alice</option>
            </select>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="form-group">
            <label class="font-weight-bold">Keyset</label>
            <select v-model="_selectedKeyset" class="form-control">
              <option
                v-for="k in keysets"
                v-bind:value="k.id"
                v-bind:key="k.id"
                >{{ k.name }}</option
              >
            </select>
          </div>
        </div>
        <div class="col-lg-3 mb-2">
          <label for>&nbsp;</label>
          <br />
          <button v-on:click="toggleSearch()" class="btn btn-success">
            Find color match
            <font-awesome-icon :icon="['fa', 'search']" />
          </button>
        </div>
        <div class="col-lg-4">
          <div class="form-group">
            <button
              class="btn btn-sm btn-info"
              v-on:click="toggleCustomKeyboard()"
            >
              Customize
              <font-awesome-icon :icon="['fas', 'cog']" />
            </button>
            <label class="font-weight-bold">Dark mode</label>
            <ToggleButton @change="toggleDarkMode" v-model="darkMode" />
            <button class="btn btn-sm btn-info" v-on:click="biipMe()">
              Biip Notice Me
              <font-awesome-icon :icon="['fas', 'eye']" />
            </button>
            <button
              class="btn btn-sm btn-success"
              v-on:click="designerMoDaF0ckA()"
            >
              I AM DEZIGNER $$
            </button>
          </div>
        </div>
      </div>
      <div class="row" v-bind:class="{ collapse: !showSearch }">
        <colorMatchSearch />
      </div>
      <renderContainer
        :selectedLayout="selectedLayout"
        :keyboardColor="keyboardColor"
      />
      <div class="row">
        <div class="col-lg-4 mb-4"></div>
      </div>
      <div class="row mb-4" v-bind:class="{ collapse: !showCustomKeyboard }">
        <div class="col-lg-3 mb-4">
          <label class="font-weight-bold">Keyboard color</label>
          <chrome-picker class="mx-auto" v-model="keyboardColor" />
        </div>
        <div class="col-lg-3 mb-4">
          <label class="font-weight-bold">Keyset Colors</label>
          <table style="width:100%">
            <tr
              @click="_setEditTarget(t.name)"
              v-for="t in targets"
              :value="t.name"
              :key="t.name"
              class="target-style"
              v-bind:style="{
                backgroundColor: t.color.background,
                color: t.color.legend
              }"
            >
              <td>{{ t.name }}</td>
            </tr>
          </table>
        </div>
        <div class="col-lg-3 mb-4">
          <label class="font-weight-bold">Custom Backgroud</label>
          <chrome-picker
            class="mx-auto"
            v-if="_customBackgroundColor"
            v-model="_customBackgroundColor"
          />
        </div>
        <div class="col-lg-3 mb-4">
          <label class="font-weight-bold">Custom Legend</label>
          <chrome-picker
            class="mx-auto"
            v-if="_customLegendColor"
            v-model="_customLegendColor"
          />
        </div>
      </div>
      <appDescription />
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
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Chrome } from 'vue-color';
import '@/scss/style.scss';
import appHeader from '@/components/header.vue';
import renderContainer from '@/components/renderContainer.vue';
import appDescription from '@/components/description.vue';
import appFooter from '@/components/footer.vue';
import colorMatchSearch from '@/components/colorMatchSearch.vue';
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
@Component({
  computed: {
    ...mapGetters(['keyset', 'targets', 'customBackground', 'customLegend']),
    ...mapState([
      'keysets',
      'selectedKeyset',
      'customBackgroundColor',
      'customLegendColor'
    ])
  },
  methods: {
    ...mapMutations([
      'setCustomBackground',
      'setCustomLegend',
      'setEditTarget'
    ]),
    ...mapActions(['biipMe', 'designerMoDaF0ckA', 'selectKeyset'])
  },
  components: {
    colorMatchSearch,
    VueSlider,
    renderContainer,
    appDescription,
    appHeader,
    appFooter,
    ToggleButton,
    'chrome-picker': Chrome
  }
})
export default class App extends Vue {
  public keysets: any;
  public keyset: any;
  public biipMe: any;
  public selectedKeyset: any;
  public selectKeyset: any;
  public customBackground: any;
  public customLegend: any;
  public setCustomBackground: any;
  public setCustomLegend: any;
  public targets: any;
  public setEditTarget: any;
  public showIntro: boolean = true;

  selectedLayout =
    localStorage && localStorage.getItem('keyboard')
      ? localStorage.getItem('keyboard')
      : 'fullSizeAnsi';
  darkMode = localStorage && localStorage.getItem('darkMode') ? true : false;
  showCustomKeyboard = false;
  keyboardColor = {
    hex: '#322B2B'
  };
  showSearch = false;
  get _selectedKeyset() {
    return this.selectedKeyset;
  }
  set _selectedKeyset(v) {
    if (localStorage) {
      localStorage.setItem('keyset', v);
    }
    this.selectKeyset(v);
  }
  get _customBackgroundColor() {
    return this.customBackground;
  }
  set _customBackgroundColor(value) {
    this.setCustomBackground(value.hex);
  }
  get _customLegendColor() {
    return this.customLegend;
  }
  set _customLegendColor(value) {
    this.setCustomLegend(value.hex);
  }
  _setEditTarget(name) {
    this.setEditTarget(this.keyset.colors[name]);
  }
  mounted() {
    if (this.darkMode) {
      this.toggleDarkMode({ value: true });
    }
    this.setEditTarget(this.keyset.colors[this.targets[0].name]);
  }
  toggleCustomKeyboard() {
    this.showCustomKeyboard = !this.showCustomKeyboard;
  }
  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
  toggleDarkMode({ value }) {
    if (value === true) {
      document.getElementsByTagName('html')[0].classList.add('dark');
      if (localStorage) {
        localStorage.setItem('darkMode', 'true');
      }
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark');
      localStorage.removeItem('darkMode');
    }
  }
  changeKeyboard({ target }) {
    if (localStorage) {
      localStorage.setItem('keyboard', target.value);
    }
  }
}
</script>
<style>
.over-wrapper {
  height: 300px;
}
</style>
