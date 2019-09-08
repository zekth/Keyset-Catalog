<template>
  <svg>
    <g class="keycap U625">
      <path
        style="transform:scaleX(6.58)"
        fill="black"
        d="M705.94,715H9.06C4.06,715,0,710.94,0,705.94V9.06C0,4.06,4.06,0,9.06,0h696.87c5.01,0,9.06,4.06,9.06,9.06
                        v696.87C715,710.94,710.94,715,705.94,715z"
      />
      <path
        style="transform:scaleX(6.58)"
        :fill="data.colors.background"
        class="key-shadow"
        d="M705.94,715H9.06C4.06,715,0,710.94,0,705.94V9.06C0,4.06,4.06,0,9.06,0h696.87c5.01,0,9.06,4.06,9.06,9.06
                        v696.87C715,710.94,710.94,715,705.94,715z"
      />
      <path
        style="transform: scaleX(9.1) translate(-98px, 0px);"
        :fill="data.colors.background"
        class
        d="M112.45,102.85v428.96c0,14.52,10.4,26.95,24.69,29.51l0,0c145.74,26.15,294.97,26.15,440.72,0l0,0
                        c14.29-2.56,24.69-14.99,24.69-29.51V102.85c0-16.56-13.42-29.98-29.98-29.98H142.43C125.88,72.86,112.45,86.29,112.45,102.85z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: ['data']
};
</script>
