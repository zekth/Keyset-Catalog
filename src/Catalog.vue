<template>
  <div>
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
        <button
          class="btn btn-danger"
          v-if="keyset.isCustom"
          @click="deleteKeyset(keyset)"
        >
          <font-awesome-icon :icon="['fa', 'trash']" />
        </button>
        <button v-on:click="toggleSearch()" class="btn btn-success">
          Find color match
          <font-awesome-icon :icon="['fa', 'search']" />
        </button>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <button
            class="btn btn-sm btn-info"
            v-on:click="toggleShowCustomize()"
          >
            Customize
            <font-awesome-icon :icon="['fas', 'cog']" />
          </button>
          <button class="btn btn-sm btn-info" v-on:click="createKeyset()">
            CreateKeyset
            <font-awesome-icon :icon="['fas', 'cog']" />
          </button>
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
    <div class="row mb-4" v-bind:class="{ collapse: !showCustomize }">
      <div class="col-lg-3 mb-4">
        <label class="font-weight-bold">Keyboard color</label>
        <chrome-picker class="mx-auto" v-model="keyboardColor" />
      </div>
      <div class="col-lg-3 mb-4" v-if="keyset.isCustom">
        <label class="font-weight-bold">Keyset Colors</label>
        <table style="width: 100%;">
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

        <div class="form-group">
          <label class="font-weight-bold">Keyset Name</label>
          <input
            type="text"
            class="form-control"
            v-model="keyset.name"
            @change="saveCustomKeyset"
          />
        </div>
      </div>
      <div class="col-lg-3 mb-4" v-if="keyset.isCustom">
        <label class="font-weight-bold">Custom Background</label>
        <chrome-picker
          class="mx-auto"
          v-if="_customBackgroundColor"
          v-model="_customBackgroundColor"
        />
      </div>
      <div class="col-lg-3 mb-4" v-if="keyset.isCustom">
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
</template>

<script lang="ts">
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
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
      'showCustomize',
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
      'setEditTarget',
      'deleteKeyset'
    ]),
    ...mapActions([
      'toggleShowCustomize',
      'biipMe',
      'designerMoDaF0ckA',
      'selectKeyset',
      'createKeyset',
      'saveCustomKeyset'
    ])
  },
  components: {
    colorMatchSearch,
    VueSlider,
    renderContainer,
    appDescription,
    appHeader,
    appFooter,
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
  public saveCustomKeyset: any;
  public showIntro: boolean = true;
  public toggleShowCustomize: any;

  selectedLayout =
    localStorage && localStorage.getItem('keyboard')
      ? localStorage.getItem('keyboard')
      : 'fullSizeAnsi';
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
    // @ts-ignore
    if (this.keyset.isCustom && !this.showCustomize) {
      this.toggleShowCustomize();
    }
  }
  get _customBackgroundColor() {
    return this.customBackground;
  }
  set _customBackgroundColor(value) {
    this.setCustomBackground(value.hex);
    if (this.keyset.isCustom) {
      this.saveCustomKeyset();
    }
  }
  get _customLegendColor() {
    return this.customLegend;
  }
  set _customLegendColor(value) {
    this.setCustomLegend(value.hex);
    if (this.keyset.isCustom) {
      this.saveCustomKeyset();
    }
  }
  _setEditTarget(name) {
    this.setEditTarget(this.keyset.colors[name]);
  }
  mounted() {
    this.setEditTarget(this.keyset.colors[this.targets[0].name]);
  }
  toggleSearch() {
    this.showSearch = !this.showSearch;
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
