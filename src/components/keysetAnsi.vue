<template>
  <div>
    <div>
      <svg width="1000px" height="300px" style="overflow:initial" viewbox="0 0 100 70">
        <g>
          <svg x="0" height="70px" width="1000px" style="overflow:initial">
            <U1 x="0" y="0" content="~" subcontent="`" :color="keyset.colors.base" />
            <U1 x="75" y="0" content="!" subcontent="1" :color="keyset.colors.base" />
            <U1 x="150" y="0" content="@" subcontent="2" :color="keyset.colors.base" />
            <U1 x="225" y="0" content="#" subcontent="3" :color="keyset.colors.base" />
            <U1 x="300" y="0" content="$" subcontent="4" :color="keyset.colors.base" />
            <U1 x="375" y="0" content="%" subcontent="5" :color="keyset.colors.base" />
            <U1 x="450" y="0" content="^" subcontent="6" :color="keyset.colors.base" />
            <U1 x="525" y="0" content="&" subcontent="7" :color="keyset.colors.base" />
            <U1 x="600" y="0" content="*" subcontent="8" :color="keyset.colors.base" />
            <U1 x="675" y="0" content="(" subcontent="9" :color="keyset.colors.base" />
            <U1 x="750" y="0" content=")" subcontent="0" :color="keyset.colors.base" />
            <U1 x="825" y="0" content="_" subcontent="-" :color="keyset.colors.base" />
            <U1 x="900" y="0" content="+" subcontent="=" :color="keyset.colors.base" />
          </svg>
        </g>
         <g>
          <svg x="120" y="73" height="70px" width="1000px" style="overflow:initial">
            <U1 x="0" y="0" content="Q" subcontent="" :color="keyset.colors.base" />
            <U1 x="75" y="0" content="W" subcontent="" :color="keyset.colors.base" />
            <U1 x="150" y="0" content="E" subcontent="" :color="keyset.colors.base" />
            <U1 x="225" y="0" content="R" subcontent="" :color="keyset.colors.base" />
            <U1 x="300" y="0" content="T" subcontent="" :color="keyset.colors.base" />
            <U1 x="375" y="0" content="Y" subcontent="" :color="keyset.colors.base" />
            <U1 x="450" y="0" content="U" subcontent="" :color="keyset.colors.base" />
            <U1 x="525" y="0" content="I" subcontent="" :color="keyset.colors.base" />
            <U1 x="600" y="0" content="O" subcontent="" :color="keyset.colors.base" />
            <U1 x="675" y="0" content="P" subcontent="" :color="keyset.colors.base" />
            <U1 x="750" y="0" content="{" subcontent="[" :color="keyset.colors.base" />
            <U1 x="825" y="0" content="}" subcontent="]" :color="keyset.colors.base" />
          </svg>
        </g>
         <g>
          <svg x="135" y="146" height="70px" width="1000px" style="overflow:initial">
            <U1 x="0" y="0" content="A" subcontent="" :color="keyset.colors.base" />
            <U1 x="75" y="0" content="S" subcontent="" :color="keyset.colors.base" />
            <U1 x="150" y="0" content="D" subcontent="" :color="keyset.colors.base" />
            <U1 x="225" y="0" content="F" subcontent="" :color="keyset.colors.base" />
            <U1 x="300" y="0" content="G" subcontent="" :color="keyset.colors.base" />
            <U1 x="375" y="0" content="H" subcontent="" :color="keyset.colors.base" />
            <U1 x="450" y="0" content="J" subcontent="" :color="keyset.colors.base" />
            <U1 x="525" y="0" content="K" subcontent="" :color="keyset.colors.base" />
            <U1 x="600" y="0" content="L" subcontent="" :color="keyset.colors.base" />
            <U1 x="675" y="0" content=":" subcontent=";" :color="keyset.colors.base" />
            <U1 x="750" y="0" content='"' subcontent="'" :color="keyset.colors.base" />
          </svg>
        </g>
         <g>
          <svg x="185" y="222" height="70px" width="1000px" style="overflow:initial">
            <U1 x="0" y="0" content="Z" subcontent="" :color="keyset.colors.base" />
            <U1 x="75" y="0" content="X" subcontent="" :color="keyset.colors.base" />
            <U1 x="150" y="0" content="C" subcontent="" :color="keyset.colors.base" />
            <U1 x="225" y="0" content="V" subcontent="" :color="keyset.colors.base" />
            <U1 x="300" y="0" content="B" subcontent="" :color="keyset.colors.base" />
            <U1 x="375" y="0" content="N" subcontent="" :color="keyset.colors.base" />
            <U1 x="450" y="0" content="M" subcontent="" :color="keyset.colors.base" />
            <U1 x="525" y="0" content="<" subcontent="," :color="keyset.colors.base" />
            <U1 x="600" y="0" content=">" subcontent="." :color="keyset.colors.base" />
            <U1 x="675" y="0" content="?" subcontent="/" :color="keyset.colors.base" />
          </svg>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import U1 from "./keys/U1.vue";
export default {
  props: ["keyset"],
  components: { U1 }
};
</script>

<style>
</style>
