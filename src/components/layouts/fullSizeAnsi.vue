<template>
  <svg viewBox="0 0 1770 520" preserveAspectRatio="xMinYMin meet">
    <g class="keyboard-case">
      <rect
        x="0"
        y="0"
        :fill="keyboardColor"
        width="1750"
        height="510"
        rx="7"
        ry="7"
      />
      <rect
        x="10"
        y="112"
        fill="#080808"
        width="1133"
        height="385"
        rx="7"
        ry="7"
      />
      <rect
        x="1430"
        y="112"
        fill="#080808"
        width="306"
        height="385"
        rx="7"
        ry="7"
      />
      <rect
        x="1170"
        y="112"
        fill="#080808"
        width="230"
        height="157"
        rx="7"
        ry="7"
      />
      <rect
        x="1170"
        y="15"
        fill="#080808"
        width="230"
        height="81"
        rx="7"
        ry="7"
      />
      <rect x="10" y="15" fill="#080808" width="82" height="82" rx="7" ry="7" />
      <rect
        x="160"
        y="15"
        fill="#080808"
        width="307"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        x="495"
        y="15"
        fill="#080808"
        width="307"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        x="835"
        y="15"
        fill="#080808"
        width="307"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        x="1245"
        y="339"
        fill="#080808"
        width="81"
        height="84"
        rx="7"
        ry="7"
      />
      <rect
        x="1169"
        y="414"
        fill="#080808"
        width="233"
        height="84"
        rx="7"
        ry="7"
      />
    </g>
    <g transform="translate(15, 20)">
      <U1 x="0" :data="getKeyData('KC_ESC', 'accent', 'Esc')" isMod="true" />
      <U1 x="150" :data="getKeyData('KC_F1', 'base', 'F1')" isMod="true" />
      <U1 x="225" :data="getKeyData('KC_F2', 'base', 'F2')" isMod="true" />
      <U1 x="300" :data="getKeyData('KC_F3', 'base', 'F3')" isMod="true" />
      <U1 x="375" :data="getKeyData('KC_F4', 'base', 'F4')" isMod="true" />
      <U1 x="485" :data="getKeyData('KC_F5', 'mod', 'F5')" isMod="true" />
      <U1 x="560" :data="getKeyData('KC_F6', 'mod', 'F6')" isMod="true" />
      <U1 x="635" :data="getKeyData('KC_F7', 'mod', 'F7')" isMod="true" />
      <U1 x="710" :data="getKeyData('KC_F8', 'mod', 'F8')" isMod="true" />
      <U1 x="825" :data="getKeyData('KC_F9', 'base', 'F9')" isMod="true" />
      <U1 x="900" :data="getKeyData('KC_F10', 'base', 'F10')" isMod="true" />
      <U1 x="975" :data="getKeyData('KC_F11', 'base', 'F11')" isMod="true" />
      <U1 x="1050" :data="getKeyData('KC_F12', 'base', 'F12')" isMod="true" />
      <U1
        x="1160"
        :data="getKeyData('KC_PSCR', 'base', 'Print')"
        isMod="true"
      />
      <U1 x="1235" :data="getKeyData('KC_SLCK', 'base', 'Lock')" isMod="true" />
      <U1
        x="1310"
        :data="getKeyData('KC_PAUS', 'base', 'Pause')"
        isMod="true"
      />
    </g>
    <g transform="translate(15, 116)">
      <U1 x="0" :data="getKeyData('KC_GRV', 'base', '~', '`')" />
      <U1 x="75" :data="getKeyData('KC_1', 'base', '!', '1')" />
      <U1 x="150" :data="getKeyData('KC_2', 'base', '@', '2')" />
      <U1 x="225" :data="getKeyData('KC_3', 'base', '#', '3')" />
      <U1 x="300" :data="getKeyData('KC_4', 'base', '$', '4')" />
      <U1 x="375" :data="getKeyData('KC_5', 'base', '%', '5')" />
      <U1 x="450" :data="getKeyData('KC_6', 'base', '^', '6')" />
      <U1 x="525" :data="getKeyData('KC_7', 'base', char, '7')" />
      <U1 x="600" :data="getKeyData('KC_8', 'base', '*', '8')" />
      <U1 x="675" :data="getKeyData('KC_9', 'base', '(', '9')" />
      <U1 x="750" :data="getKeyData('KC_0', 'base', ')', '0')" />
      <U1 x="825" :data="getKeyData('KC_MINS', 'base', '_', '-')" />
      <U1 x="900" :data="getKeyData('KC_EQL', 'base', '+', '=')" />
      <U2
        x="975"
        :data="getKeyData('KC_BSPC', 'mod', 'Backspace')"
        isMod="true"
      />
      <U1
        x="1160"
        :data="getKeyData('KC_INS', 'base', 'Insert')"
        isMod="true"
      />
      <U1 x="1235" :data="getKeyData('KC_HOME', 'base', 'Home')" isMod="true" />
      <U1
        x="1310"
        :data="getKeyData('KC_PGUP', 'base', 'Pg Up')"
        isMod="true"
      />
      <U1 x="1420" :data="getKeyData('KC_NLCK', 'mod', 'Num')" isMod="true" />
      <U1 x="1495" :data="getKeyData('KC_PSLS', 'mod', '%')" isMod="true" />
      <U1 x="1570" :data="getKeyData('KC_PAST', 'mod', 'X')" isMod="true" />
      <U1 x="1645" :data="getKeyData('KC_PMNS', 'mod', '-')" isMod="true" />
    </g>
    <g transform="translate(15, 192)">
      <U15 x="0" :data="getKeyData('KC_TAB', 'mod', 'Tab')" isMod="true" />
      <U1 x="110" :data="getKeyData('KC_Q', 'base', 'Q')" />
      <U1 x="185" :data="getKeyData('KC_W', 'base', 'W')" />
      <U1 x="260" :data="getKeyData('KC_E', 'base', 'E')" />
      <U1 x="335" :data="getKeyData('KC_R', 'base', 'R')" />
      <U1 x="410" :data="getKeyData('KC_T', 'base', 'T')" />
      <U1 x="485" :data="getKeyData('KC_Y', 'base', 'Y')" />
      <U1 x="560" :data="getKeyData('KC_U', 'base', 'U')" />
      <U1 x="635" :data="getKeyData('KC_I', 'base', 'I')" />
      <U1 x="712" :data="getKeyData('KC_O', 'base', 'O')" />
      <U1 x="788" :data="getKeyData('KC_P', 'base', 'P')" />
      <U1 x="863" :data="getKeyData('KC_LBRC', 'base', '{', '[')" />
      <U1 x="940" :data="getKeyData('KC_RBRC', 'base', '}', ']')" />
      <U15 x="1016" :data="getKeyData('KC_BSLS', 'base', '|', '\\')" />
      <U1
        x="1160"
        :data="getKeyData('KC_DEL', 'base', 'Del')"
        content="Delete"
        isMod="true"
        subcontent
        :color="'base'"
      />
      <U1
        x="1235"
        :data="getKeyData('KC_END', 'base', 'End')"
        content="End"
        isMod="true"
        subcontent
        :color="'base'"
      />
      <U1
        x="1310"
        :data="getKeyData('KC_PGDN', 'base', 'Pg Dn')"
        content="Pg Dn"
        isMod="true"
        subcontent
        :color="'base'"
      />
      <U1 x="1420" :data="getKeyData('KC_P7', 'base', '7')" />
      <U1 x="1495" :data="getKeyData('KC_P8', 'base', '8')" />
      <U1 x="1570" :data="getKeyData('KC_P9', 'base', '9')" />
      <U2V x="1645" :data="getKeyData('KC_PPLS', 'mod', '+')" isMod="true" />
    </g>
    <g transform="translate(15, 268)">
      <U175
        x="0"
        isMod="true"
        :data="getKeyData('KC_capslock', 'mod', 'CapsLock')"
      />
      <U1 x="129" :data="getKeyData('KC_A', 'base', 'A')" />
      <U1 x="204" :data="getKeyData('KC_S', 'base', 'S')" />
      <U1 x="279" :data="getKeyData('KC_D', 'base', 'D')" />
      <U1 x="354" :data="getKeyData('KC_F', 'base', 'F')" />
      <U1 x="429" :data="getKeyData('KC_G', 'base', 'G')" />
      <U1 x="506" :data="getKeyData('KC_H', 'base', 'H')" />
      <U1 x="582" :data="getKeyData('KC_J', 'base', 'J')" />
      <U1 x="658" :data="getKeyData('KC_K', 'base', 'K')" />
      <U1 x="734" :data="getKeyData('KC_L', 'base', 'L')" />
      <U1 x="810" :data="getKeyData('KC_SCLN', 'base', ':', ';')" />
      <U1
        x="886"
        :data="getKeyData('KC_QUOT', 'base', doubleQuote, simpleQuote)"
      />
      <U225
        x="963"
        :data="getKeyData('KC_ENT', 'accent', 'Enter')"
        isMod="true"
      />
      <U1 x="1420" :data="getKeyData('KC_P4', 'base', '4')" />
      <U1 x="1495" :data="getKeyData('KC_P5', 'base', '5')" />
      <U1 x="1570" :data="getKeyData('KC_P6', 'base', '6')" />
    </g>
    <g transform="translate(15, 344)">
      <U225 x="0" :data="getKeyData('KC_LSFT', 'mod', 'Shift')" isMod="true" />
      <U1 x="164" :data="getKeyData('KC_Z', 'base', 'Z')" />
      <U1 x="239" :data="getKeyData('KC_X', 'base', 'X')" />
      <U1 x="314" :data="getKeyData('KC_C', 'base', 'C')" />
      <U1 x="389" :data="getKeyData('KC_V', 'base', 'V')" />
      <U1 x="464" :data="getKeyData('KC_B', 'base', 'B')" />
      <U1 x="539" :data="getKeyData('KC_N', 'base', 'N')" />
      <U1 x="614" :data="getKeyData('KC_M', 'base', 'M')" />
      <U1 x="689" :data="getKeyData('KC_COMM', 'base', '<', ',')" />
      <U1 x="764" :data="getKeyData('KC_DOT', 'base', '>', '.')" />
      <U1 x="839" :data="getKeyData('KC_SLSH', 'base', '?', '/')" />
      <U275
        x="917"
        :data="getKeyData('KC_RSFT', 'mod', 'Shift')"
        isMod="true"
      />
      <U1 x="1235" :data="getKeyData('KC_UP', 'base', '↑')" />
      <U1 x="1420" :data="getKeyData('KC_P1', 'base', '1')" />
      <U1 x="1495" :data="getKeyData('KC_P2', 'base', '2')" />
      <U1 x="1570" :data="getKeyData('KC_P3', 'base', '3')" />
      <U2V
        x="1645"
        :data="getKeyData('KC_PENT', 'mod', 'Enter')"
        isMod="true"
      />
    </g>
    <g transform="translate(15, 420)">
      <U125 x="0" :data="getKeyData('KC_LCTL', 'mod', 'Ctrl')" isMod="true" />
      <U125 x="93" :data="getKeyData('KC_LGUI', 'mod', 'Code')" isMod="true" />
      <U125 x="186" :data="getKeyData('KC_LALT', 'mod', 'Alt')" isMod="true" />
      <U625 x="279" :data="getKeyData('KC_SPC', 'base')" />
      <U125
        x="753"
        :data="getKeyData('KC_RALT', 'mod', 'Alt Gr')"
        isMod="true"
      />
      <U125 x="847" :data="getKeyData('KC_RGUI', 'mod', 'Win')" isMod="true" />
      <U125 x="941" :data="getKeyData('KC_APP', 'mod', 'Code')" isMod="true" />
      <U125
        x="1034"
        :data="getKeyData('KC_RCTL', 'mod', 'Ctrl')"
        isMod="true"
      />
      <U1 x="1160" :data="getKeyData('KC_LEFT', 'base', '←')" />
      <U1 x="1235" :data="getKeyData('KC_DOWN', 'base', '↓')" />
      <U1 x="1310" :data="getKeyData('KC_RGHT', 'base', '→')" />
      <U2 x="1420" :data="getKeyData('KC_P0', 'base', '0')" />
      <U1 x="1570" :data="getKeyData('KC_PDOT', 'base', '.')" />
    </g>
  </svg>
</template>

<script>
import { genKeyData } from '../../utils/keys';
import U1 from '../keys/U1.vue';
import U125 from '../keys/U125.vue';
import U225 from '../keys/U225.vue';
import U275 from '../keys/U275.vue';
import U625 from '../keys/U625.vue';
import U175 from '../keys/U175.vue';
import U15 from '../keys/U15.vue';
import U2 from '../keys/U2.vue';
import U2V from '../keys/U2vertical.vue';
export default {
  props: ['keyset', 'keyboardColor'],
  components: { U1, U125, U2V, U15, U175, U275, U2, U225, U625 },
  methods: {
    getKeyData(key, baseColors, content, subContent, thirdContent) {
      return genKeyData(
        this.keyset,
        key,
        baseColors,
        content,
        subContent,
        thirdContent
      );
    }
  },
  data() {
    return {
      char: '&',
      doubleQuote: '"',
      simpleQuote: "'"
    };
  }
};
</script>
