<template>
  <div style="height:350px">
    <svg
      width="1000px"
      height="100px"
      style="    overflow: initial;
    transform: scale(0.7);
    max-width: 100px;margin-left: -340px;
    height: 100px;"
      viewBox="0 0 100 70"
    >
      <g>
        <svg x="0" height="70px" width="1000px" style="overflow:initial">
          <U1 x="0" y="0" content="Esc" isMod="true" subcontent :color="keyset.colors.accent" />
          <U1 x="150" y="0" content="F1" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="225" y="0" content="F2" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="300" y="0" content="F3" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="375" y="0" content="F4" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="485" y="0" content="F5" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="560" y="0" content="F6" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="635" y="0" content="F7" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="710" y="0" content="F8" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="825" y="0" content="F9" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="900" y="0" content="F10" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="975" y="0" content="F11" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1050" y="0" content="F12" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1160" y="0" content="Print" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1235" y="0" content="Lock" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1310" y="0" content="Pause" isMod="true" subcontent :color="keyset.colors.base" />
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
          <U2 x="975" y="0" content="Backspace" isMod="true" :color="keyset.colors.mod" />
          <U1 x="1160" y="0" content="Insert" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1235" y="0" content="Home" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1310" y="0" content="Pg Up" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1420" y="0" content="Num" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="1495" y="0" content="%" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="1570" y="0" content="X" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="1645" y="0" content="-" isMod="true" subcontent :color="keyset.colors.mod" />
        </svg>
      </g>
      <g>
        <svg x="0" y="173" height="70px" width="1000px" style="overflow:initial">
          <U15 x="0" y="0" content="Tab" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="110" y="0" content="Q" subcontent :color="keyset.colors.base" />
          <U1 x="185" y="0" content="W" subcontent :color="keyset.colors.base" />
          <U1 x="260" y="0" content="E" subcontent :color="keyset.colors.base" />
          <U1 x="335" y="0" content="R" subcontent :color="keyset.colors.base" />
          <U1 x="410" y="0" content="T" subcontent :color="keyset.colors.base" />
          <U1 x="485" y="0" content="Y" subcontent :color="keyset.colors.base" />
          <U1 x="560" y="0" content="U" subcontent :color="keyset.colors.base" />
          <U1 x="635" y="0" content="I" subcontent :color="keyset.colors.base" />
          <U1 x="710" y="0" content="O" subcontent :color="keyset.colors.base" />
          <U1 x="785" y="0" content="P" subcontent :color="keyset.colors.base" />
          <U1 x="860" y="0" content="{" subcontent="[" :color="keyset.colors.base" />
          <U1 x="935" y="0" content="}" subcontent="]" :color="keyset.colors.base" />
          <U15 x="1010" y="0" content="|" subcontent="\" :color="keyset.colors.base" />
          <U1 x="1160" y="0" content="Delete" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1235" y="0" content="End" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1310" y="0" content="Pg Dn" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1420" y="0" content="7" subcontent :color="keyset.colors.base" />
          <U1 x="1495" y="0" content="8" subcontent :color="keyset.colors.base" />
          <U1 x="1570" y="0" content="9" subcontent :color="keyset.colors.base" />
        </svg>
      </g>
      <g>
        <svg x="0" y="246" height="70px" width="1000px" style="overflow:initial">
          <U175 x="0" y="0" content="CapsLock" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="129" y="0" content="A" subcontent :color="keyset.colors.base" />
          <U1 x="204" y="0" content="S" subcontent :color="keyset.colors.base" />
          <U1 x="279" y="0" content="D" subcontent :color="keyset.colors.base" />
          <U1 x="354" y="0" content="F" subcontent :color="keyset.colors.base" />
          <U1 x="429" y="0" content="G" subcontent :color="keyset.colors.base" />
          <U1 x="504" y="0" content="H" subcontent :color="keyset.colors.base" />
          <U1 x="579" y="0" content="J" subcontent :color="keyset.colors.base" />
          <U1 x="654" y="0" content="K" subcontent :color="keyset.colors.base" />
          <U1 x="729" y="0" content="L" subcontent :color="keyset.colors.base" />
          <U1 x="805" y="0" content=":" subcontent=";" :color="keyset.colors.base" />
          <U1 x="880" y="0" content="'" subcontent="'" :color="keyset.colors.base" />
          <U225 x="958" y="0" content="Enter" isMod="true" subcontent :color="keyset.colors.accent" />
          <U1 x="1420" y="0" content="4" subcontent :color="keyset.colors.base" />
          <U1 x="1495" y="0" content="5" subcontent :color="keyset.colors.base" />
          <U1 x="1570" y="0" content="6" subcontent :color="keyset.colors.base" />
        </svg>
      </g>
      <g>
        <svg x="0" y="322" height="70px" width="1000px" style="overflow:initial">
          <U225 x="0" y="0" content="Shift" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="164" y="0" content="Z" subcontent :color="keyset.colors.base" />
          <U1 x="239" y="0" content="X" subcontent :color="keyset.colors.base" />
          <U1 x="314" y="0" content="C" subcontent :color="keyset.colors.base" />
          <U1 x="389" y="0" content="V" subcontent :color="keyset.colors.base" />
          <U1 x="464" y="0" content="B" subcontent :color="keyset.colors.base" />
          <U1 x="539" y="0" content="N" subcontent :color="keyset.colors.base" />
          <U1 x="614" y="0" content="M" subcontent :color="keyset.colors.base" />
          <U1 x="689" y="0" content="<" subcontent="," :color="keyset.colors.base" />
          <U1 x="764" y="0" content=">" subcontent="." :color="keyset.colors.base" />
          <U1 x="839" y="0" content="?" subcontent="/" :color="keyset.colors.base" />
          <U275 x="914" y="0" content="Shift" isMod="true" :color="keyset.colors.mod" />
          <U1 x="1235" y="0" content="↑" subcontent :color="keyset.colors.base" />
          <U1 x="1420" y="0" content="1" subcontent :color="keyset.colors.base" />
          <U1 x="1495" y="0" content="2" subcontent :color="keyset.colors.base" />
          <U1 x="1570" y="0" content="3" subcontent :color="keyset.colors.base" />
        </svg>
      </g>
      <g>
        <svg x="0" y="395" height="70px" width="1000px" style="overflow:initial">
          <U125 x="0" y="0" content="Ctrl" isMod="true" :color="keyset.colors.mod" />
          <U125 x="93" y="0" content="Code" isMod="true" :color="keyset.colors.mod" />
          <U125 x="186" y="0" content="Alt" isMod="true" :color="keyset.colors.mod" />
          <U125 x="751" y="0" content="Alt Gr" isMod="true" :color="keyset.colors.mod" />
          <U125 x="844" y="0" content="Win" isMod="true" :color="keyset.colors.mod" />
          <U125 x="937" y="0" content="Code" isMod="true" :color="keyset.colors.mod" />
          <U125 x="1030" y="0" content="Ctrl" isMod="true" :color="keyset.colors.mod" />
          <U1 x="1160" y="0" content="←" subcontent :color="keyset.colors.base" />
          <U1 x="1235" y="0" content="↓" subcontent :color="keyset.colors.base" />
          <U1 x="1310" y="0" content="→" subcontent :color="keyset.colors.base" />
          <U2 x="1420" y="0" content="0" :color="keyset.colors.base" />
          <U1 x="1570" y="0" content="." subcontent :color="keyset.colors.base" />
        </svg>
      </g>
    </svg>
  </div>
</template>

<script>
import U1 from "./keys/U1.vue";
import U125 from "./keys/U125.vue";
import U225 from "./keys/U225.vue";
import U275 from "./keys/U275.vue";
import U175 from "./keys/U175.vue";
import U15 from "./keys/U15.vue";
import U2 from "./keys/U2.vue";
export default {
  props: ["keyset"],
  components: { U1, U125, U15, U175,U275, U2, U225 },
  data() {
    return {
      char: "&"
    };
  }
};
</script>
