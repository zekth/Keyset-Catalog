<template>
  <div style="height:350px;width:1200px">
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
          <U1 x="0":data="getKeyData('Esc',keyset.colors.accent,'Esc')"  isMod="true"  />
          <U1 x="150" :data="getKeyData('F1',keyset.colors.base,'F1')" isMod="true" />
          <U1 x="225" :data="getKeyData('F2',keyset.colors.base,'F2')" isMod="true" />
          <U1 x="300" :data="getKeyData('F3',keyset.colors.base,'F3')" isMod="true" />
          <U1 x="375" :data="getKeyData('F4',keyset.colors.base,'F4')" isMod="true" />
          <U1 x="485" :data="getKeyData('F5',keyset.colors.mod,'F5')" isMod="true" />
          <U1 x="560" :data="getKeyData('F6',keyset.colors.mod,'F6')" isMod="true" />
          <U1 x="635" :data="getKeyData('F7',keyset.colors.mod,'F7')" isMod="true" />
          <U1 x="710" :data="getKeyData('F8',keyset.colors.mod,'F8')" isMod="true" />
          <U1 x="825" :data="getKeyData('F9',keyset.colors.base,'F9')" isMod="true" />
          <U1 x="900" :data="getKeyData('F10',keyset.colors.base,'F10')" isMod="true" />
          <U1 x="975" :data="getKeyData('F11',keyset.colors.base,'F11')" isMod="true" />
          <U1 x="1050" :data="getKeyData('F12',keyset.colors.base,'F12')" isMod="true"  />
          <U1 x="1160" content="Print" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1235" content="Lock" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1310" content="Pause" isMod="true" subcontent :color="keyset.colors.base" />
        </svg>
      </g>
      <g>
        <svg x="0" y="100" height="70px" width="1000px" style="overflow:initial">
          <U1 x="0" content="~" subcontent="`" :color="keyset.colors.base" />
          <U1 x="75" content="!" subcontent="1" :color="keyset.colors.base" />
          <U1 x="150" content="@" subcontent="2" :color="keyset.colors.base" />
          <U1 x="225" content="#" subcontent="3" :color="keyset.colors.base" />
          <U1 x="300" content="$" subcontent="4" :color="keyset.colors.base" />
          <U1 x="375" content="%" subcontent="5" :color="keyset.colors.base" />
          <U1 x="450" content="^" subcontent="6" :color="keyset.colors.base" />
          <U1 x="525" :content="char" subcontent="7" :color="keyset.colors.base" />
          <U1 x="600" content="*" subcontent="8" :color="keyset.colors.base" />
          <U1 x="675" content="(" subcontent="9" :color="keyset.colors.base" />
          <U1 x="750" content=")" subcontent="0" :color="keyset.colors.base" />
          <U1 x="825" content="_" subcontent="-" :color="keyset.colors.base" />
          <U1 x="900" content="+" subcontent="=" :color="keyset.colors.base" />
          <U2 x="975" content="Backspace" isMod="true" :color="keyset.colors.mod" />
          <U1 x="1160" content="Insert" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1235" content="Home" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1310" content="Pg Up" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1420" content="Num" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="1495" content="%" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="1570" content="X" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="1645" content="-" isMod="true" subcontent :color="keyset.colors.mod" />
        </svg>
      </g>
      <g>
        <svg x="0" y="173" height="70px" width="1000px" style="overflow:initial">
          <U15 x="0" content="Tab" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="110" :data="getKeyData('Q',keyset.colors.base,'Q')" />
          <U1 x="185" :data="getKeyData('W',keyset.colors.base,'W')" />
          <U1 x="260" :data="getKeyData('E',keyset.colors.base,'E')" />
          <U1 x="335" :data="getKeyData('R',keyset.colors.base,'R')" />
          <U1 x="410" :data="getKeyData('T',keyset.colors.base,'T')" />
          <U1 x="485" :data="getKeyData('Y',keyset.colors.base,'Y')" />
          <U1 x="560" :data="getKeyData('U',keyset.colors.base,'U')" />
          <U1 x="635" :data="getKeyData('I',keyset.colors.base,'I')" />
          <U1 x="710" :data="getKeyData('O',keyset.colors.base,'O')" />
          <U1 x="785" :data="getKeyData('P',keyset.colors.base,'P')" />
          <U1 x="860" :data="getKeyData('OPENBRACE',keyset.colors.base,'{','[')" />
          <U1 x="935" :data="getKeyData('CLOSEBRACE',keyset.colors.base,'}',']')" />
          <U15 x="1010" content="|" subcontent="\" :color="keyset.colors.base" />
          <U1 x="1160" content="Delete" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1235" content="End" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1310" content="Pg Dn" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1420" content="7" subcontent :color="keyset.colors.base" />
          <U1 x="1495" content="8" subcontent :color="keyset.colors.base" />
          <U1 x="1570" content="9" subcontent :color="keyset.colors.base" />
        </svg>
      </g>
      <g>
        <svg x="0" y="246" height="70px" width="1000px" style="overflow:initial">
          <U175 x="0" isMod="true" :data="getKeyData('capslock',keyset.colors.mod,'CapsLock')" />
          <U1 x="129" :data="getKeyData('A',keyset.colors.base,'A')" />
          <U1 x="204" :data="getKeyData('S',keyset.colors.base,'S')" />
          <U1 x="279" :data="getKeyData('D',keyset.colors.base,'D')" />
          <U1 x="354" :data="getKeyData('F',keyset.colors.base,'F')" />
          <U1 x="429" :data="getKeyData('G',keyset.colors.base,'G')" />
          <U1 x="504" :data="getKeyData('H',keyset.colors.base,'H')" />
          <U1 x="579" :data="getKeyData('J',keyset.colors.base,'J')" />
          <U1 x="654" :data="getKeyData('K',keyset.colors.base,'K')" />
          <U1 x="729" :data="getKeyData('L',keyset.colors.base,'L')" />
          <U1 x="805" :data="getKeyData('M',keyset.colors.base,':',';')" />
          <U1 x="880" :data="getKeyData('quote',keyset.colors.base,doubleQuote,simpleQuote)" />
          <U225 x="958" content="Enter" isMod="true" subcontent :color="keyset.colors.accent" />
          <U1 x="1420" :data="getKeyData('NUM_4',keyset.colors.base,'4')" />
          <U1 x="1495" :data="getKeyData('NUM_5',keyset.colors.base,'5')" />
          <U1 x="1570" :data="getKeyData('NUM_6',keyset.colors.base,'6')" />
        </svg>
      </g>
      <g>
        <svg x="0" y="322" height="70px" width="1000px" style="overflow:initial">
          <U225 x="0" content="Shift" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="164" :data="getKeyData('Z',keyset.colors.base,'Z')" />
          <U1 x="239" :data="getKeyData('X',keyset.colors.base,'X')" />
          <U1 x="314" :data="getKeyData('C',keyset.colors.base,'C')" />
          <U1 x="389" :data="getKeyData('V',keyset.colors.base,'V')" />
          <U1 x="464" :data="getKeyData('B',keyset.colors.base,'B')" />
          <U1 x="539" :data="getKeyData('N',keyset.colors.base,'N')" />
          <U1 x="614" :data="getKeyData('M',keyset.colors.base,'M')" />
          <U1 x="689" :data="getKeyData('SUP',keyset.colors.base,'<',',')" />
          <U1 x="764" :data="getKeyData('MINUS',keyset.colors.base,'>','.')" />
          <U1 x="839" :data="getKeyData('INTER',keyset.colors.base,'?','/')" />
          <U275 x="914" content="Shift" isMod="true" :color="keyset.colors.mod" />
          <U1 x="1235" content="↑" subcontent :color="keyset.colors.base" />
          <U1 x="1420" content="1" subcontent :color="keyset.colors.base" />
          <U1 x="1495" content="2" subcontent :color="keyset.colors.base" />
          <U1 x="1570" content="3" subcontent :color="keyset.colors.base" />
        </svg>
      </g>
      <g>
        <svg x="0" y="395" height="70px" width="1000px" style="overflow:initial">
          <U125 x="0" content="Ctrl" isMod="true" :color="keyset.colors.mod" />
          <U125 x="93" content="Code" isMod="true" :color="keyset.colors.mod" />
          <U125 x="186" content="Alt" isMod="true" :color="keyset.colors.mod" />
          <U125 x="751" content="Alt Gr" isMod="true" :color="keyset.colors.mod" />
          <U125 x="844" content="Win" isMod="true" :color="keyset.colors.mod" />
          <U125 x="937" content="Code" isMod="true" :color="keyset.colors.mod" />
          <U125 x="1030" content="Ctrl" isMod="true" :color="keyset.colors.mod" />
          <U1 x="1160" content="←" subcontent :color="keyset.colors.base" />
          <U1 x="1235" content="↓" subcontent :color="keyset.colors.base" />
          <U1 x="1310" content="→" subcontent :color="keyset.colors.base" />
          <U2 x="1420" content="0" :color="keyset.colors.base" />
          <U1 x="1570" content="." subcontent :color="keyset.colors.base" />
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
  components: { U1, U125, U15, U175, U275, U2, U225 },
  methods: {
    getKeyData(key, baseColors, content, subContent, thirdContent) {
      let output = {
        content,
        subContent,
        thirdContent,
        colors: baseColors
      };
      if (this.keyset.specialKeys && this.keyset.specialKeys[key]) {
        const spKey = this.keyset.specialKeys[key];
        if (spKey.type && this.keyset.colors[spKey.type]) {
          output.colors = this.keyset.colors[spKey.type];
        }
        if (spKey.content) {
          output.content = spKey.content;
        }
        if (spKey.subContent) {
          output.subContent = spKey.subContent;
        }
        if (spKey.thirdContent) {
          output.thirdContent = spKey.thirdContent;
        }
      }
      return output;
    }
  },
  data() {
    return {
      char: "&",
      doubleQuote: '"',
      simpleQuote: "'"
    };
  }
};
</script>
