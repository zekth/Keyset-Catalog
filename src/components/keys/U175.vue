<template>
  <svg @click="clickHandler">
    <g class="keycap U175">
      <path
        style="transform: scaleX(1.75);"
        fill="black"
        d="M705.94,715H9.06C4.06,715,0,710.94,0,705.94V9.06C0,4.06,4.06,0,9.06,0h696.87c5.01,0,9.06,4.06,9.06,9.06
                        v696.87C715,710.94,710.94,715,705.94,715z"
      />
      <path
        style="transform: scaleX(1.75);"
        :fill="data.colors.background"
        class="key-shadow"
        d="M705.94,715H9.06C4.06,715,0,710.94,0,705.94V9.06C0,4.06,4.06,0,9.06,0h696.87c5.01,0,9.06,4.06,9.06,9.06
                        v696.87C715,710.94,710.94,715,705.94,715z"
      />
      <path
        style="transform: scaleX(2.15) translate(-60px, 0px);"
        :fill="data.colors.background"
        class
        d="M112.45,102.85v428.96c0,14.52,10.4,26.95,24.69,29.51l0,0c145.74,26.15,294.97,26.15,440.72,0l0,0
                        c14.29-2.56,24.69-14.99,24.69-29.51V102.85c0-16.56-13.42-29.98-29.98-29.98H142.43C125.88,72.86,112.45,86.29,112.45,102.85z"
      />

      <text
        v-if="!isMod"
        class="key-content"
        x="220"
        y="270"
        font-size="200px"
        :fill="data.colors.legend"
      >
        {{ data.content }}
      </text>
      <text
        v-if="isMod"
        class="key-content"
        x="160"
        y="370"
        font-size="130px"
        :fill="data.colors.legend"
      >
        {{ data.content }}
      </text>
      <text
        v-if="data.subContent"
        class="key-content"
        x="220"
        y="500"
        font-size="200px"
        :fill="data.colors.legend"
      >
        {{ data.subContent }}
      </text>
      <text class="cap-size" x="850" y="680" font-size="180px" fill="white">
        1.75
      </text>
    </g>
  </svg>
</template>

<script lang="ts">
import { KeyComponent } from '@/utils/keys';
import Component from 'vue-class-component';
@Component({
  components: {}
})
export default class U2 extends KeyComponent {
  public reservedKeys = [];
}
</script>
