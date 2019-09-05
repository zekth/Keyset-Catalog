<template>
  <div>
    <svg
      width="1000px"
      height="400px"
      style="overflow:initial;overflow: initial;margin-left: -450px;transform: scale(0.7);"
      viewBox="0 0 100 70"
    >
      <g>
        <svg x="0" height="70px" width="1000px" style="overflow:initial">
          <U1 x="0" y="0" content="ESC" subcontent :color="keyset.colors.accent" />
          <U1 x="150" y="0" content="F1" subcontent :color="keyset.colors.base" />
          <U1 x="225" y="0" content="F2" subcontent :color="keyset.colors.base" />
          <U1 x="300" y="0" content="F3" subcontent :color="keyset.colors.base" />
          <U1 x="375" y="0" content="F4" subcontent :color="keyset.colors.base" />
          <U1 x="525" y="0" content="F5" subcontent :color="keyset.colors.accent" />
          <U1 x="600" y="0" content="F6" subcontent :color="keyset.colors.accent" />
          <U1 x="675" y="0" content="F7" subcontent :color="keyset.colors.accent" />
          <U1 x="750" y="0" content="F8" subcontent :color="keyset.colors.accent" />
          <U1 x="900" y="0" content="F9" subcontent :color="keyset.colors.base" />
          <U1 x="975" y="0" content="F10" subcontent :color="keyset.colors.base" />
          <U1 x="1050" y="0" content="F11" subcontent :color="keyset.colors.base" />
          <U1 x="1125" y="0" content="F12" subcontent :color="keyset.colors.base" />
        </svg>
      </g>
      <g>
        <svg x="0" y="100" height="70px" width="1000px" style="overflow:initial">
          <U1 x="0" y="0" content="~" subcontent="`" :color="keyset.colors.base" />
          <U1 x="75" y="0" content="!" subcontent="1" :color="keyset.colors.base" />
          <U1 x="150" y="0" content="@" subcontent="2" :color="keyset.colors.base" />
          <U1 x="225" y="0" content="#" subcontent="3" :color="keyset.colors.base" />
          <U1 x="300" y="0" content="$" subcontent="4" :color="keyset.colors.base" />
          <U1 x="375" y="0" content="%" subcontent="5" :color="keyset.colors.base" />
          <U1 x="450" y="0" content="^" subcontent="6" :color="keyset.colors.base" />
          <U1 x="525" y="0" :content="char" subcontent="7" :color="keyset.colors.base" />
          <U1 x="600" y="0" content="*" subcontent="8" :color="keyset.colors.base" />
          <U1 x="675" y="0" content="(" subcontent="9" :color="keyset.colors.base" />
          <U1 x="750" y="0" content=")" subcontent="0" :color="keyset.colors.base" />
          <U1 x="825" y="0" content="_" subcontent="-" :color="keyset.colors.base" />
          <U1 x="900" y="0" content="+" subcontent="=" :color="keyset.colors.base" />
        </svg>
      </g>
      <g>
        <svg x="120" y="173" height="70px" width="1000px" style="overflow:initial">
          <U1 x="0" y="0" content="Q" subcontent :color="keyset.colors.base" />
          <U1 x="75" y="0" content="W" subcontent :color="keyset.colors.base" />
          <U1 x="150" y="0" content="E" subcontent :color="keyset.colors.base" />
          <U1 x="225" y="0" content="R" subcontent :color="keyset.colors.base" />
          <U1 x="300" y="0" content="T" subcontent :color="keyset.colors.base" />
          <U1 x="375" y="0" content="Y" subcontent :color="keyset.colors.base" />
          <U1 x="450" y="0" content="U" subcontent :color="keyset.colors.base" />
          <U1 x="525" y="0" content="I" subcontent :color="keyset.colors.base" />
          <U1 x="600" y="0" content="O" subcontent :color="keyset.colors.base" />
          <U1 x="675" y="0" content="P" subcontent :color="keyset.colors.base" />
          <U1 x="750" y="0" content="{" subcontent="[" :color="keyset.colors.base" />
          <U1 x="825" y="0" content="}" subcontent="]" :color="keyset.colors.base" />
        </svg>
      </g>
      <g>
        <svg x="135" y="246" height="70px" width="1000px" style="overflow:initial">
          <U1 x="0" y="0" content="A" subcontent :color="keyset.colors.base" />
          <U1 x="75" y="0" content="S" subcontent :color="keyset.colors.base" />
          <U1 x="150" y="0" content="D" subcontent :color="keyset.colors.base" />
          <U1 x="225" y="0" content="F" subcontent :color="keyset.colors.base" />
          <U1 x="300" y="0" content="G" subcontent :color="keyset.colors.base" />
          <U1 x="375" y="0" content="H" subcontent :color="keyset.colors.base" />
          <U1 x="450" y="0" content="J" subcontent :color="keyset.colors.base" />
          <U1 x="525" y="0" content="K" subcontent :color="keyset.colors.base" />
          <U1 x="600" y="0" content="L" subcontent :color="keyset.colors.base" />
          <U1 x="675" y="0" content=":" subcontent=";" :color="keyset.colors.base" />
          <U1 x="750" y="0" content='"' subcontent="'" :color="keyset.colors.base" />
        </svg>
      </g>
      <g>
        <svg x="185" y="322" height="70px" width="1000px" style="overflow:initial">
          <U1 x="0" y="0" content="Z" subcontent :color="keyset.colors.base" />
          <U1 x="75" y="0" content="X" subcontent :color="keyset.colors.base" />
          <U1 x="150" y="0" content="C" subcontent :color="keyset.colors.base" />
          <U1 x="225" y="0" content="V" subcontent :color="keyset.colors.base" />
          <U1 x="300" y="0" content="B" subcontent :color="keyset.colors.base" />
          <U1 x="375" y="0" content="N" subcontent :color="keyset.colors.base" />
          <U1 x="450" y="0" content="M" subcontent :color="keyset.colors.base" />
          <U1 x="525" y="0" content="<" subcontent="," :color="keyset.colors.base" />
          <U1 x="600" y="0" content=">" subcontent="." :color="keyset.colors.base" />
          <U1 x="675" y="0" content="?" subcontent="/" :color="keyset.colors.base" />
        </svg>
      </g>
    </svg>
  </div>
</template>

<script>
import U1 from "./keys/U1.vue";
export default {
  props: ["keyset"],
  components: { U1 },
  data() {
    return {
      char: '&'
    }
  }
};
</script>
