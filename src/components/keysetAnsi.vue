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
          <U1 x="0" :data="getKeyData('KC_ESC',keyset.colors.accent,'Esc')" isMod="true" />
          <U1 x="150" :data="getKeyData('KC_F1',keyset.colors.base,'F1')" isMod="true" />
          <U1 x="225" :data="getKeyData('KC_F2',keyset.colors.base,'F2')" isMod="true" />
          <U1 x="300" :data="getKeyData('KC_F3',keyset.colors.base,'F3')" isMod="true" />
          <U1 x="375" :data="getKeyData('KC_F4',keyset.colors.base,'F4')" isMod="true" />
          <U1 x="485" :data="getKeyData('KC_F5',keyset.colors.mod,'F5')" isMod="true" />
          <U1 x="560" :data="getKeyData('KC_F6',keyset.colors.mod,'F6')" isMod="true" />
          <U1 x="635" :data="getKeyData('KC_F7',keyset.colors.mod,'F7')" isMod="true" />
          <U1 x="710" :data="getKeyData('KC_F8',keyset.colors.mod,'F8')" isMod="true" />
          <U1 x="825" :data="getKeyData('KC_F9',keyset.colors.base,'F9')" isMod="true" />
          <U1 x="900" :data="getKeyData('KC_F10',keyset.colors.base,'F10')" isMod="true" />
          <U1 x="975" :data="getKeyData('KC_F11',keyset.colors.base,'F11')" isMod="true" />
          <U1 x="1050" :data="getKeyData('KC_F12',keyset.colors.base,'F12')" isMod="true" />
          <U1 x="1160" :data="getKeyData('KC_DEL',keyset.colors.base,'Print')"  isMod="true" />
          <U1 x="1235" :data="getKeyData('KC_END',keyset.colors.base,'Lock')"  isMod="true" />
          <U1 x="1310" :data="getKeyData('KC_PGDN',keyset.colors.base,'Pause')" isMod="true"  />
        </svg>
      </g>
      <g>
        <svg x="0" y="100" height="70px" width="1000px" style="overflow:initial">
          <U1 x="0" :data="getKeyData('KC_GRV',keyset.colors.base,'~','`')" />
          <U1 x="75" :data="getKeyData('KC_1',keyset.colors.base,'!','1')" />
          <U1 x="150" :data="getKeyData('KC_2',keyset.colors.base,'@','2')" />
          <U1 x="225" :data="getKeyData('KC_3',keyset.colors.base,'#','3')" />
          <U1 x="300" :data="getKeyData('KC_4',keyset.colors.base,'$','4')" />
          <U1 x="375" :data="getKeyData('KC_5',keyset.colors.base,'%','5')" />
          <U1 x="450" :data="getKeyData('KC_6',keyset.colors.base,'^','6')" />
          <U1 x="525" :data="getKeyData('KC_7',keyset.colors.base,char,'7')" />
          <U1 x="600" :data="getKeyData('KC_8',keyset.colors.base,'*','8')" />
          <U1 x="675" :data="getKeyData('KC_9',keyset.colors.base,'(','9')" />
          <U1 x="750" :data="getKeyData('KC_0',keyset.colors.base,')','0')" />
          <U1 x="825" :data="getKeyData('KC_MINS',keyset.colors.base,'_','-')" />
          <U1 x="900" :data="getKeyData('KC_EQL',keyset.colors.base,'+','=')" />
          <U2 x="975" content="Backspace" isMod="true" :color="keyset.colors.mod" />
          <U1 x="1160" :data="getKeyData('KC_INS',keyset.colors.base,'Insert')" isMod="true" />
          <U1 x="1235" :data="getKeyData('KC_HOME',keyset.colors.base,'Home')"  isMod="true" />
          <U1 x="1310" :data="getKeyData('KC_PGUP',keyset.colors.base,'Pg Up')" isMod="true"  />
          <U1 x="1420" :data="getKeyData('KC_NLCK',keyset.colors.mod,'Num')" isMod="true"  />
          <U1 x="1495" :data="getKeyData('KC_PSLS',keyset.colors.mod,'%')"  isMod="true"/>
          <U1 x="1570" :data="getKeyData('KC_PAST',keyset.colors.mod,'X')" isMod="true"  />
          <U1 x="1645" :data="getKeyData('KC_PMNS',keyset.colors.mod,'-')" isMod="true" />
        </svg>
      </g>
      <g>
        <svg x="0" y="173" height="70px" width="1000px" style="overflow:initial">
          <U15 x="0" content="Tab" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="110" :data="getKeyData('KC_Q',keyset.colors.base,'Q')" />
          <U1 x="185" :data="getKeyData('KC_W',keyset.colors.base,'W')" />
          <U1 x="260" :data="getKeyData('KC_E',keyset.colors.base,'E')" />
          <U1 x="335" :data="getKeyData('KC_R',keyset.colors.base,'R')" />
          <U1 x="410" :data="getKeyData('KC_T',keyset.colors.base,'T')" />
          <U1 x="485" :data="getKeyData('KC_Y',keyset.colors.base,'Y')" />
          <U1 x="560" :data="getKeyData('KC_U',keyset.colors.base,'U')" />
          <U1 x="635" :data="getKeyData('KC_I',keyset.colors.base,'I')" />
          <U1 x="710" :data="getKeyData('KC_O',keyset.colors.base,'O')" />
          <U1 x="785" :data="getKeyData('KC_P',keyset.colors.base,'P')" />
          <U1 x="860" :data="getKeyData('KC_LBRC',keyset.colors.base,'{','[')" />
          <U1 x="935" :data="getKeyData('KC_RBRC',keyset.colors.base,'}',']')" />
          <U15 x="1010" content="|" subcontent="\" :color="keyset.colors.base" />
          <U1 x="1160" :data="getKeyData('KC_DEL',keyset.colors.base,'Del')"  content="Delete" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1235" :data="getKeyData('KC_END',keyset.colors.base,'End')"  content="End" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1310" :data="getKeyData('KC_PGDN',keyset.colors.base,'Pg Dn')"  content="Pg Dn" isMod="true" subcontent :color="keyset.colors.base" />
          <U1 x="1420" :data="getKeyData('KC_P7',keyset.colors.base,'7')" />
          <U1 x="1495" :data="getKeyData('KC_P8',keyset.colors.base,'8')" />
          <U1 x="1570" :data="getKeyData('KC_P9',keyset.colors.base,'9')" />
        </svg>
      </g>
      <g>
        <svg x="0" y="246" height="70px" width="1000px" style="overflow:initial">
          <U175 x="0" isMod="true" :data="getKeyData('KC_capslock',keyset.colors.mod,'CapsLock')" />
          <U1 x="129" :data="getKeyData('KC_A',keyset.colors.base,'A')" />
          <U1 x="204" :data="getKeyData('KC_S',keyset.colors.base,'S')" />
          <U1 x="279" :data="getKeyData('KC_D',keyset.colors.base,'D')" />
          <U1 x="354" :data="getKeyData('KC_F',keyset.colors.base,'F')" />
          <U1 x="429" :data="getKeyData('KC_G',keyset.colors.base,'G')" />
          <U1 x="504" :data="getKeyData('KC_H',keyset.colors.base,'H')" />
          <U1 x="579" :data="getKeyData('KC_J',keyset.colors.base,'J')" />
          <U1 x="654" :data="getKeyData('KC_K',keyset.colors.base,'K')" />
          <U1 x="729" :data="getKeyData('KC_L',keyset.colors.base,'L')" />
          <U1 x="805" :data="getKeyData('KC_M',keyset.colors.base,':',';')" />
          <U1 x="880" :data="getKeyData('KC_QUOT',keyset.colors.base,doubleQuote,simpleQuote)" />
          <U225 x="958" content="Enter" isMod="true" subcontent :color="keyset.colors.accent" />
          <U1 x="1420" :data="getKeyData('KC_P4',keyset.colors.base,'4')" />
          <U1 x="1495" :data="getKeyData('KC_P5',keyset.colors.base,'5')" />
          <U1 x="1570" :data="getKeyData('KC_P6',keyset.colors.base,'6')" />
        </svg>
      </g>
      <g>
        <svg x="0" y="322" height="70px" width="1000px" style="overflow:initial">
          <U225 x="0" content="Shift" isMod="true" subcontent :color="keyset.colors.mod" />
          <U1 x="164" :data="getKeyData('KC_Z',keyset.colors.base,'Z')" />
          <U1 x="239" :data="getKeyData('KC_X',keyset.colors.base,'X')" />
          <U1 x="314" :data="getKeyData('KC_C',keyset.colors.base,'C')" />
          <U1 x="389" :data="getKeyData('KC_V',keyset.colors.base,'V')" />
          <U1 x="464" :data="getKeyData('KC_B',keyset.colors.base,'B')" />
          <U1 x="539" :data="getKeyData('KC_N',keyset.colors.base,'N')" />
          <U1 x="614" :data="getKeyData('KC_M',keyset.colors.base,'M')" />
          <U1 x="689" :data="getKeyData('KC_COMM',keyset.colors.base,'<',',')" />
          <U1 x="764" :data="getKeyData('KC_DOT',keyset.colors.base,'>','.')" />
          <U1 x="839" :data="getKeyData('KC_SLSH',keyset.colors.base,'?','/')" />
          <U275 x="914" content="Shift" isMod="true" :color="keyset.colors.mod" />
          <U1 x="1235" :data="getKeyData('KC_UP',keyset.colors.base,'↑')" />
          <U1 x="1420" :data="getKeyData('KC_P1',keyset.colors.base,'1')" />
          <U1 x="1495" :data="getKeyData('KC_P2',keyset.colors.base,'2')" />
          <U1 x="1570" :data="getKeyData('KC_P3',keyset.colors.base,'3')" />
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
          <U1 x="1160" :data="getKeyData('KC_LEFT',keyset.colors.base,'←')" />
          <U1 x="1235" :data="getKeyData('KC_DOWN',keyset.colors.base,'↓')" />
          <U1 x="1310" :data="getKeyData('KC_RGHT',keyset.colors.base,'→')" />
          <U2 x="1420" content="0" :color="keyset.colors.base" />
          <U1 x="1570" :data="getKeyData('KC_PDOT',keyset.colors.base,'.')" />
        </svg>
      </g>
    </svg>
  </div>
</template>

<script>
import {isUndefined} from 'lodash'
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
        if (!isUndefined(spKey.content)) {
          output.content = spKey.content;
        }
        if (!isUndefined(spKey.subContent)) {
          output.subContent = spKey.subContent;
        }
        if (!isUndefined(spKey.thirdContent)) {
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
