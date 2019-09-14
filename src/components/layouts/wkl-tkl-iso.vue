<template>
  <svg viewBox="0 0 1420 520" preserveAspectRatio="xMinYMin meet">
    <defs>
      <linearGradient
        id="gradient-vertical"
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
      >
        <stop offset="0%" :stop-color="keyboardGradientStart" />
        <stop offset="100%" :stop-color="keyboardGradientEnd" />
      </linearGradient>
      <filter
        id="led-glow"
        x="-5000%"
        y="-5000%"
        width="10000%"
        height="10000%"
      >
        <feFlood result="flood" flood-color="#62d446" flood-opacity="0.6" />
        <feComposite
          in="flood"
          result="mask"
          in2="SourceGraphic"
          operator="in"
        />
        <feMorphology in="mask" result="dilated" operator="dilate" radius="2" />
        <feGaussianBlur in="dilated" result="blurred" stdDeviation="5" />
        <feMerge>
          <feMergeNode in="blurred" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="innershadow" x0="-50%" y0="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
        <feOffset dy="2" dx="3" />
        <feComposite
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowDiff"
        />

        <feFlood flood-color="#444444" flood-opacity="0.75" />
        <feComposite in2="shadowDiff" operator="in" />
        <feComposite in2="SourceGraphic" operator="over" result="firstfilter" />

        <feGaussianBlur in="firstfilter" stdDeviation="3" result="blur2" />
        <feOffset dy="-2" dx="-3" />
        <feComposite
          in2="firstfilter"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowDiff"
        />

        <feFlood flood-color="#444444" flood-opacity="0.75" />
        <feComposite in2="shadowDiff" operator="in" />
        <feComposite in2="firstfilter" operator="over" />
      </filter>
    </defs>
    <pattern
      id="noise"
      width="1"
      height="1"
      patternContentUnits="objectBoundingBox"
    >
      <image
        xlink:href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/160607/metal.png"
        x="0"
        y="0"
        width="1"
        height="1"
      />
      <rect
        width="1"
        height="1"
        fill="url(#gradient-vertical)"
        style="mix-blend-mode: multiply;"
      />
    </pattern>
    <g class="keyboard-case">
      <rect
        x="0"
        y="0"
        fill="url(#noise)"
        width="1410"
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
        x="1170"
        y="112"
        fill="#080808"
        width="232"
        height="157"
        rx="7"
        ry="7"
      />
      <rect
        x="1170"
        y="15"
        fill="#080808"
        width="232"
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
      <rect
        x="127"
        y="420"
        fill="url(#noise)"
        width="70"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        x="956"
        y="420"
        fill="url(#noise)"
        width="70"
        height="82"
        rx="7"
        ry="7"
      />
      <g transform="translate(1200,290)" style="opacity:0.4">
        <line
          x1="0"
          x2="30"
          y1="0"
          y2="0"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="6"
          x2="30"
          y1="10"
          y2="10"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="0"
          x2="30"
          y1="20"
          y2="20"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="31"
          x2="31"
          y1="00"
          y2="19"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />

        <line
          x1="40"
          x2="70"
          y1="0"
          y2="0"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="40"
          x2="70"
          y1="10"
          y2="10"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="40"
          x2="70"
          y1="20"
          y2="20"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="40"
          x2="40"
          y1="0"
          y2="10"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="70"
          x2="70"
          y1="10"
          y2="20"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />

        <line
          x1="80"
          x2="110"
          y1="0"
          y2="0"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="80"
          x2="110"
          y1="10"
          y2="10"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="80"
          x2="110"
          y1="20"
          y2="20"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="80"
          x2="80"
          y1="0"
          y2="20"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="110"
          x2="110"
          y1="10"
          y2="20"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />

        <rect x="116" y="15" height="8" width="8" fill="black" rx="2" ry="2" />

        <line
          x1="130"
          x2="160"
          y1="0"
          y2="0"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="130"
          x2="160"
          y1="10"
          y2="10"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="130"
          x2="160"
          y1="20"
          y2="20"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="160"
          x2="160"
          y1="0"
          y2="10"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <line
          x1="130"
          x2="130"
          y1="10"
          y2="20"
          stroke-width="6"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </g>
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
      <U1 x="0" :data="getKeyData('KC_GRV', 'base', '', '2')" />
      <U1 x="75" :data="getKeyData('KC_1', 'base', '1', '&')" />
      <U1 x="150" :data="getKeyData('KC_2', 'base', '2', 'é')" />
      <U1 x="225" :data="getKeyData('KC_3', 'base', '3', doubleQuote)" />
      <U1 x="300" :data="getKeyData('KC_4', 'base', '4', simpleQuote)" />
      <U1 x="375" :data="getKeyData('KC_5', 'base', '5', '(')" />
      <U1 x="450" :data="getKeyData('KC_6', 'base', '6', '-')" />
      <U1 x="525" :data="getKeyData('KC_7', 'base', '7', 'è')" />
      <U1 x="600" :data="getKeyData('KC_8', 'base', '8', '_')" />
      <U1 x="675" :data="getKeyData('KC_9', 'base', '9', 'ç')" />
      <U1 x="750" :data="getKeyData('KC_0', 'base', '0', 'à')" />
      <U1 x="825" :data="getKeyData('KC_MINS', 'base', '_', '-')" />
      <U1 x="900" :data="getKeyData('KC_EQL', 'base', '+', '=')" />
      <U2
        x="977"
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
    </g>
    <g transform="translate(15, 192)">
      <U15 x="0" :data="getKeyData('KC_TAB', 'mod', 'Tab')" isMod="true" />
      <U1 x="110" :data="getKeyData('KC_A', 'base', 'A')" />
      <U1 x="185" :data="getKeyData('KC_Z', 'base', 'Z')" />
      <U1 x="260" :data="getKeyData('KC_E', 'base', 'E')" />
      <U1 x="335" :data="getKeyData('KC_R', 'base', 'R')" />
      <U1 x="410" :data="getKeyData('KC_T', 'base', 'T')" />
      <U1 x="485" :data="getKeyData('KC_Y', 'base', 'Y')" />
      <U1 x="560" :data="getKeyData('KC_U', 'base', 'U')" />
      <U1 x="635" :data="getKeyData('KC_I', 'base', 'I')" />
      <U1 x="712" :data="getKeyData('KC_O', 'base', 'O')" />
      <U1 x="788" :data="getKeyData('KC_P', 'base', 'P')" />
      <U1 x="863" :data="getKeyData('KC_LBRC', 'base', '¨', '^')" />
      <U1 x="940" :data="getKeyData('KC_RBRC', 'base', '£', '$')" />
      <isoEnter x="1016" :data="getKeyData('KC_ENT', 'accent', 'Enter')" />
      <!-- <U15 x="1016" :data="getKeyData('KC_BSLS', 'base', '|', '\\')" /> -->
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
    </g>
    <g transform="translate(15, 268)">
      <U175
        x="0"
        isMod="true"
        :data="getKeyData('KC_CAPSLOCK', 'mod', 'Caps Lock')"
      />
      <U1 x="129" :data="getKeyData('KC_Q', 'base', 'Q')" />
      <U1 x="204" :data="getKeyData('KC_S', 'base', 'S')" />
      <U1 x="279" :data="getKeyData('KC_D', 'base', 'D')" />
      <U1 x="354" :data="getKeyData('KC_F', 'base', 'F')" />
      <U1 x="430" :data="getKeyData('KC_G', 'base', 'G')" />
      <U1 x="506" :data="getKeyData('KC_H', 'base', 'H')" />
      <U1 x="582" :data="getKeyData('KC_J', 'base', 'J')" />
      <U1 x="658" :data="getKeyData('KC_K', 'base', 'K')" />
      <U1 x="734" :data="getKeyData('KC_L', 'base', 'L')" />
      <U1 x="810" :data="getKeyData('KC_M', 'base', 'M')" />
      <U1 x="886" :data="getKeyData('KC_QUOT', 'base', '%', 'ù')" />
      <U1 x="962" :data="getKeyData('KC_QUOT', 'base', 'µ', '*')" />
      <!-- <U225
        x="963"
        :data="getKeyData('KC_ENT', 'accent', 'Enter')"
        isMod="true"
      /> -->
    </g>
    <g transform="translate(15, 344)">
      <U125 x="0" :data="getKeyData('KC_LSFT', 'mod', 'Shift')" isMod="true" />
      <U1 x="93" :data="getKeyData('KC_NUBS', 'base', '<', '>')" />
      <U1 x="167" :data="getKeyData('KC_W', 'base', 'W')" />
      <U1 x="242" :data="getKeyData('KC_X', 'base', 'X')" />
      <U1 x="317" :data="getKeyData('KC_C', 'base', 'C')" />
      <U1 x="392" :data="getKeyData('KC_V', 'base', 'V')" />
      <U1 x="467" :data="getKeyData('KC_B', 'base', 'B')" />
      <U1 x="542" :data="getKeyData('KC_N', 'base', 'N')" />
      <U1 x="617" :data="getKeyData('KC_M', 'base', '?', ',')" />
      <U1 x="692" :data="getKeyData('KC_COMM', 'base', '.', ';')" />
      <U1 x="767" :data="getKeyData('KC_DOT', 'base', '/', ':')" />
      <U1 x="842" :data="getKeyData('KC_SLSH', 'base', '§', '!')" />
      <U275
        x="917"
        :data="getKeyData('KC_RSFT', 'mod', 'Shift')"
        isMod="true"
      />
      <U1 x="1235" :data="getKeyData('KC_UP', 'base', '↑')" />
    </g>
    <g transform="translate(15, 420)">
      <U15 x="0" :data="getKeyData('KC_LCTL', 'mod', 'Ctrl')" isMod="true" />
      <U15 x="186" :data="getKeyData('KC_LALT', 'mod', 'Alt')" isMod="true" />
      <U7 x="298" :data="getKeyData('KC_SPC', 'base')" />
      <U15
        x="829"
        :data="getKeyData('KC_RALT', 'mod', 'Alt Gr')"
        isMod="true"
      />
      <U15 x="1015" :data="getKeyData('KC_RCTL', 'mod', 'Ctrl')" isMod="true" />
      <U1 x="1160" :data="getKeyData('KC_LEFT', 'base', '←')" />
      <U1 x="1235" :data="getKeyData('KC_DOWN', 'base', '↓')" />
      <U1 x="1310" :data="getKeyData('KC_RGHT', 'base', '→')" />
    </g>
  </svg>
</template>

<script>
import tinycolor from 'tinycolor2';
import { genKeyData } from '../../utils/keys';
import U1 from '../keys/U1.vue';
import U125 from '../keys/U125.vue';
import U275 from '../keys/U275.vue';
import U175 from '../keys/U175.vue';
import U15 from '../keys/U15.vue';
import U2 from '../keys/U2.vue';
import U7 from '../keys/U7.vue';
import isoEnter from '../keys/isoEnter.vue';
export default {
  props: ['keyset', 'keyboardColor'],
  components: { U1, U125, U15, U175, U275, U2, U7, isoEnter },
  computed: {
    keyboardGradientStart: function() {
      return tinycolor(this.keyboardColor)
        .darken(5)
        .toString();
    },
    keyboardGradientEnd: function() {
      return tinycolor(this.keyboardColor)
        .lighten(5)
        .toString();
    }
  },
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
