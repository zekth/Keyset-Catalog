<template>
  <svg
    class="keycap U1"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 715 715"
    style="enable-background:new 0 0 715 715;"
    xml:space="preserve"
  >
    <g>
      <path
        style="transform:scaleX(1.25)"
        fill="black"
        d="M705.94,715H9.06C4.06,715,0,710.94,0,705.94V9.06C0,4.06,4.06,0,9.06,0h696.87c5.01,0,9.06,4.06,9.06,9.06
                        v696.87C715,710.94,710.94,715,705.94,715z"
      />
      <path
        style="transform:scaleX(1.25)"
        :fill="data.colors.background"
        class="key-shadow"
        d="M705.94,715H9.06C4.06,715,0,710.94,0,705.94V9.06C0,4.06,4.06,0,9.06,0h696.87c5.01,0,9.06,4.06,9.06,9.06
                        v696.87C715,710.94,710.94,715,705.94,715z"
      />
      <path
        style="transform:scaleX(1.40) translate(-35px, 0px);"
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
        :fill="data.colors.color"
      >{{ data.content }}</text>
      <text
        v-if="isMod"
        class="key-content"
        x="160"
        y="370"
        font-size="130px"
        :fill="data.colors.color"
      >{{ data.content }}</text>
      <text
        v-if="data.subContent"
        class="key-content"
        x="220"
        y="500"
        font-size="200px"
        :fill="data.colors.color"
      >{{ data.subContent }}</text>
    </g>
  </svg>
</template>

<script>
export default {
  props: ["data", "isMod"]
};
</script>
