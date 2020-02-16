<template>
  <div class="colorbox" :style="{ 'background-color': data.bg }">
    <div class="colorbox-legend" :style="{ color: data.legend }">
      {{ data.txt }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Colorbox extends Vue {
  @Prop()
  public data: any;
}
</script>

<style lang="scss">
.colorbox {
  margin: 0 auto;
  height: 250px;
  width: 250px;
  border-radius: 20px;
}
.colorbox-legend {
  height: 100%;
  width: 100%;
  text-align: center;
  padding-top: 40%;
  font-family: 'Helvetica Rounded LT';
  font-size: 2vw;
}
</style>
