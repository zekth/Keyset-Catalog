<template>
  <fragment>
    <div class="col-lg-6">
      <div class="row">
        <div class="col-lg-6 mb-4">
          <label class="font-weight-bold">Color pick</label>
          <chrome-picker class="mx-auto" v-model="colors" />
        </div>
        <div class="col-lg-6 mb-4">
          <label class="font-weight-bold">Search for</label>
          <div>
            <div class="form-group">
              <button
                class="btn btn-info btn-sm"
                v-on:click="findKeyset('base')"
              >
                Base
              </button>
              <button
                class="btn btn-info btn-sm"
                v-on:click="findKeyset('accent')"
              >
                Accent
              </button>
              <button
                class="btn btn-info btn-sm"
                v-on:click="findKeyset('mod')"
              >
                Mod
              </button>
            </div>
            <div class="form-group">
              <label>Type of research</label>
              <select v-model="searchCriteria" class="form-control">
                <option value="background">Background</option>
                <option value="legend">Legend</option>
              </select>
            </div>
            <div class="form-group">
              <label>Color distance threshold</label>
              <VueSlider v-model="threshold" v-bind="sliderOptions" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <perfect-scrollbar class="over-wrapper">
        <label class="font-weight-bold">Search Results</label>
        <table id="search-results" class="table table-hover table-sm">
          <thead>
            <tr>
              <th>Keyset Name</th>
              <th>Distance</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="r in searchResult">
              <tr v-bind:key="r.id" v-on:click="setSelectedKeyset(r.id)">
                <td>{{ r.name }}</td>
                <td>{{ r.distance.toFixed() }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </perfect-scrollbar>
    </div>
  </fragment>
</template>

<script lang="ts">
import VueSlider from 'vue-slider-component';
import { Chrome } from 'vue-color';
import 'vue-slider-component/theme/antd.css';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapState, mapGetters, mapActions } from 'vuex';
import { from } from 'nearest-color';
import { isEmpty } from 'lodash';
import { Fragment } from 'vue-fragment';
@Component({
  components: { Fragment, 'chrome-picker': Chrome, VueSlider },
  computed: {
    ...mapState(['keysets'])
  },
  methods: {
    ...mapActions(['selectKeyset'])
  }
})
export default class colorMatchSearch extends Vue {
  public keysets: any;
  public selectKeyset: any;

  sliderOptions = {
    max: 300
  };
  colors: any = { hex: '#ffffff' };
  searchCriteria = 'background';
  threshold = 100;
  searchResult: any[] = [];
  findKeyset(type) {
    let colorsToTest = {};
    this.keysets.forEach(x => {
      if (x.colors[type]) {
        colorsToTest[x.id] = x.colors[type][this.searchCriteria];
      }
    });
    const outputs: any = [];
    let nearestKeyset;
    for (;;) {
      const nearest = from(colorsToTest);
      const tempNearest = nearest(this.colors.hex);
      if (Number(tempNearest.distance.toFixed()) > this.threshold) {
        break;
      } else {
        delete colorsToTest[tempNearest.name];
      }
      const toPush = this.keysets.find(x => {
        return x.id == tempNearest.name;
      });
      outputs.push({
        distance: tempNearest.distance,
        name: toPush.name,
        id: toPush.id
      });
      if (isEmpty(colorsToTest)) {
        break;
      }
    }
    this.searchResult = outputs;
    if (outputs.length > 0) {
      this.selectKeyset(outputs[0].id);
    } else {
      console.log('no keyset found');
    }
  }
}
</script>
