<template>
  <svg>
    <path
      fill="black"
      d="M 5,0
    h100
    a2,2 0 0 1 2,2
    v144
    a2,2 0 0 1 -2,2
    h-81
    a5,5 0 0 1 -2,-2
    v-72
    a5,5 0 0 0 -2,-2
    h-19
    a5,5 0 0 1 -2,-2
    v-68
    a5,5 0 0 1 2,-2
    "
    />
    <path
      :fill="data.colors.background"
      class="key-shadow"
      d="M 5,0
    h100
    a2,2 0 0 1 2,2
    v144
    a2,2 0 0 1 -2,2
    h-81
    a5,5 0 0 1 -2,-2
    v-72
    a5,5 0 0 0 -2,-2
    h-19
    a5,5 0 0 1 -2,-2
    v-68
    a5,5 0 0 1 2,-2
    "
    />
    <path
      :fill="data.colors.background"
      class=""
      d="M 16,8
    h76
    a5,5 0 0 1 2,2
    v119
    a5,5 0 0 1 -2,2
    s-26,5 -57,0
    a5,5 0 0 1 -2,-2
    v-69
    a5,5 0 0 0 -2,-2
    h-17
    a5,5 0 0 1 -2,-2
    v-46
    a5,5 0 0 1 2,-2
    "
    />
    <g transform="scale(1.7),translate(9,24)">
      <pEnter :color="data.colors.legend" />
    </g>
  </svg>
</template>

<script>
import pEnter from './legends/pEnter.vue';
export default {
  components: { pEnter },
  props: ['data', 'isMod']
};
</script>
