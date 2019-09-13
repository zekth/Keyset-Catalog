<template>
  <svg viewBox="0 0 1390 520" preserveAspectRatio="xMinYMin meet">
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
        width="1390"
        height="520"
        rx="7"
        ry="7"
      />

      <g transform="translate(-4,0)">
        <rect
          x="61"
          y="21"
          fill="#080808"
          width="80"
          height="80"
          rx="7"
          ry="7"
        />
        <rect
          x="46"
          y="97"
          fill="#080808"
          width="80"
          height="80"
          rx="7"
          ry="7"
        />
        <rect
          x="31"
          y="173"
          fill="#080808"
          width="80"
          height="80"
          rx="7"
          ry="7"
        />
      </g>

      <rect
        x="140"
        y="31"
        fill="#080808"
        width="155"
        height="80"
        rx="7"
        ry="7"
      />
      <rect
        x="126"
        y="108"
        fill="#080808"
        width="191"
        height="80"
        rx="7"
        ry="7"
      />
      <rect
        x="110"
        y="182"
        fill="#080808"
        width="210"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        x="94"
        y="258"
        fill="#080808"
        width="247"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        x="90"
        y="332"
        fill="#080808"
        width="117"
        height="82"
        rx="7"
        ry="7"
      />

      <rect
        x="290"
        y="22"
        fill="#080808"
        width="80"
        height="80"
        rx="7"
        ry="7"
      />

      <rect
        transform="rotate(15)"
        x="376"
        y="-69"
        fill="#080808"
        width="309"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        transform="rotate(15)"
        x="343"
        y="10"
        fill="#080808"
        width="309"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        transform="rotate(15)"
        x="367"
        y="85"
        fill="#080808"
        width="309"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        transform="rotate(15)"
        x="406"
        y="160"
        fill="#080808"
        width="309"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        transform="rotate(15)"
        x="392"
        y="240"
        fill="#080808"
        width="116"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        transform="rotate(15)"
        x="507"
        y="237"
        fill="#080808"
        width="170"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        transform="rotate(15)"
        x="676"
        y="235"
        fill="#080808"
        width="82"
        height="82"
        rx="7"
        ry="7"
      />

      <rect
        transform="rotate(-15)"
        x="630"
        y="275"
        fill="#080808"
        width="309"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        transform="rotate(-15)"
        x="595"
        y="355"
        fill="#080808"
        width="309"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        transform="rotate(-15)"
        x="614"
        y="432"
        fill="#080808"
        width="309"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        transform="rotate(-15)"
        x="576"
        y="510"
        fill="#080808"
        width="309"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        transform="rotate(-15)"
        x="579"
        y="590"
        fill="#080808"
        width="219"
        height="82"
        rx="7"
        ry="7"
      />
      <rect
        transform="rotate(-15)"
        x="796"
        y="593"
        fill="#080808"
        width="116"
        height="82"
        rx="7"
        ry="7"
      />

      <rect
        x="991"
        y="23"
        fill="#080808"
        width="80"
        height="80"
        rx="7"
        ry="7"
      />
      <rect
        x="1063"
        y="28"
        fill="#080808"
        width="236"
        height="80"
        rx="7"
        ry="7"
      />
      <rect
        x="978"
        y="107"
        fill="#080808"
        width="345"
        height="80"
        rx="7"
        ry="7"
      />
      <rect
        x="1020"
        y="182"
        fill="#080808"
        width="324"
        height="80"
        rx="7"
        ry="7"
      />
      <rect
        x="998"
        y="259"
        fill="#080808"
        width="363"
        height="80"
        rx="7"
        ry="7"
      />

      <rect
        x="1230"
        y="332"
        fill="#080808"
        width="117"
        height="82"
        rx="7"
        ry="7"
      />
    </g>

    <g transform="translate(115, -80)">
      <g transform="translate(-84,105)">
        <U1 x="30" :data="getKeyData('KC_DEL', 'mod', 'Delete')" isMod="true" />
        <U1
          x="15"
          y="76"
          :data="getKeyData('KC_PGUP', 'mod', 'PgUp')"
          isMod="true"
        />
        <U1
          x="0"
          y="152"
          :data="getKeyData('KC_PGDN', 'mod', 'PgDn')"
          isMod="true"
        />
      </g>
      <g transform="translate(15, -80)">
        <g transform="translate(15, 196)">
          <U1 x="0" :data="getKeyData('KC_GRV', 'base', '~', '`')" />
          <U1 x="75" :data="getKeyData('KC_1', 'base', '!', '1')" />
          <U1 x="150" y="-10" :data="getKeyData('KC_2', 'base', '@', '2')" />
        </g>
        <g transform="translate(38, 139),rotate(15)">
          <U1 x="225" :data="getKeyData('KC_3', 'base', '#', '3')" />
          <U1 x="300" :data="getKeyData('KC_4', 'base', '$', '4')" />
          <U1 x="375" :data="getKeyData('KC_5', 'base', '%', '5')" />
          <U1 x="450" :data="getKeyData('KC_6', 'base', '^', '6')" />
        </g>
        <g transform="translate(50, 402),rotate(-15)">
          <U1 x="525" :data="getKeyData('KC_7', 'base', char, '7')" />
          <U1 x="600" :data="getKeyData('KC_8', 'base', '*', '8')" />
          <U1 x="675" :data="getKeyData('KC_9', 'base', '(', '9')" />
          <U1 x="750" :data="getKeyData('KC_0', 'base', ')', '0')" />
        </g>
        <g transform="translate(40, 192)">
          <U1 x="825" y="-5" :data="getKeyData('KC_MINS', 'base', '_', '-')" />
          <U1 x="900" :data="getKeyData('KC_EQL', 'base', '+', '=')" />
          <U2
            x="977"
            :data="getKeyData('KC_BSPC', 'mod', 'Backspace')"
            isMod="true"
          />
        </g>
      </g>
      <g transform="translate(15, 0)">
        <g transform="translate(0, 192)">
          <U15 x="0" :data="getKeyData('KC_TAB', 'mod', 'Tab')" isMod="true" />
          <U1 x="110" :data="getKeyData('KC_Q', 'base', 'Q')" />
        </g>
        <g transform="translate(25, 135),rotate(15)">
          <U1 x="185" :data="getKeyData('KC_W', 'base', 'W')" />
          <U1 x="260" :data="getKeyData('KC_E', 'base', 'E')" />
          <U1 x="335" :data="getKeyData('KC_R', 'base', 'R')" />
          <U1 x="410" :data="getKeyData('KC_T', 'base', 'T')" />
        </g>
        <g transform="translate(75, 397),rotate(-15)">
          <U1 x="485" :data="getKeyData('KC_Y', 'base', 'Y')" />
          <U1 x="560" :data="getKeyData('KC_U', 'base', 'U')" />
          <U1 x="635" :data="getKeyData('KC_I', 'base', 'I')" />
          <U1 x="712" :data="getKeyData('KC_O', 'base', 'O')" />
        </g>
        <g transform="translate(65, 192)">
          <U1 x="788" :data="getKeyData('KC_P', 'base', 'P')" />
          <U1 x="863" :data="getKeyData('KC_LBRC', 'base', '{', '[')" />
          <U1 x="940" :data="getKeyData('KC_RBRC', 'base', '}', ']')" />
          <U15 x="1016" :data="getKeyData('KC_BSLS', 'base', '|', '\\')" />
        </g>
      </g>
      <g transform="translate(-15, 75)">
        <g transform="translate(15, 192)">
          <U175
            x="0"
            isMod="true"
            :data="getKeyData('KC_CAPSLOCK', 'mod', 'Caps Lock')"
          />
          <U1 x="129" :data="getKeyData('KC_A', 'base', 'A')" />
        </g>
        <g transform="translate(40, 135),rotate(15)">
          <U1 x="204" :data="getKeyData('KC_S', 'base', 'S')" />
          <U1 x="279" :data="getKeyData('KC_D', 'base', 'D')" />
          <U1 x="354" :data="getKeyData('KC_F', 'base', 'F')" />
          <U1 x="429" :data="getKeyData('KC_G', 'base', 'G')" />
        </g>
        <g transform="translate(123, 398),rotate(-15)">
          <U1 x="506" :data="getKeyData('KC_H', 'base', 'H')" />
          <U1 x="582" :data="getKeyData('KC_J', 'base', 'J')" />
          <U1 x="658" :data="getKeyData('KC_K', 'base', 'K')" />
          <U1 x="734" :data="getKeyData('KC_L', 'base', 'L')" />
        </g>
        <g transform="translate(115, 192)">
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
        </g>
      </g>
      <g transform="translate(-45, 151)">
        <g transform="translate(30, 192)">
          <U225
            x="0"
            :data="getKeyData('KC_LSFT', 'mod', 'Shift')"
            isMod="true"
          />
          <U1 x="164" :data="getKeyData('KC_Z', 'base', 'Z')" />
        </g>
        <g transform="translate(55, 133),rotate(15)">
          <U1 x="239" :data="getKeyData('KC_X', 'base', 'X')" />
          <U1 x="314" :data="getKeyData('KC_C', 'base', 'C')" />
          <U1 x="389" :data="getKeyData('KC_V', 'base', 'V')" />
          <U1 x="464" :data="getKeyData('KC_B', 'base', 'B')" />
        </g>
        <g transform="translate(178, 396),rotate(-15)">
          <U1 x="464" :data="getKeyData('KC_B', 'base', 'B')" />
          <U1 x="539" :data="getKeyData('KC_N', 'base', 'N')" />
          <U1 x="614" :data="getKeyData('KC_M', 'base', 'M')" />
          <U1 x="689" :data="getKeyData('KC_COMM', 'base', '<', ',')" />
        </g>
        <g transform="translate(170, 192)">
          <U1 x="764" :data="getKeyData('KC_DOT', 'base', '>', '.')" />
          <U1 x="839" :data="getKeyData('KC_SLSH', 'base', '?', '/')" />
          <U175
            x="915"
            :data="getKeyData('KC_RSFT', 'mod', 'Shift')"
            isMod="true"
          />
          <U1 x="1045" :data="getKeyData('KC_FN', 'mod', 'Fn')" isMod="true" />
        </g>
      </g>
      <g transform="translate(-45, 418)">
        <U15 x="25" :data="getKeyData('KC_LCTL', 'mod', 'Ctrl')" isMod="true" />
        <g transform="translate(250, 0),rotate(15)">
          <U15
            x="0"
            y="1"
            :data="getKeyData('KC_LALT', 'mod', 'Alt')"
            isMod="true"
          />
          <U225
            x="115"
            y="-3"
            :data="getKeyData('KC_SPC', 'mod', '')"
            isMod="true"
          />
          <U1
            x="285"
            y="-3"
            :data="getKeyData('KC_LCTL', 'mod', 'Code')"
            isMod="true"
          />
        </g>
        <g transform="translate(648, 82),rotate(-15)">
          <U275
            x="0"
            y="2"
            :data="getKeyData('KC_SPC', 'mod', '')"
            isMod="true"
          />
          <U15
            x="215"
            y="6"
            :data="getKeyData('KC_RALT', 'mod', 'Alt Gr')"
            isMod="true"
          />
        </g>
        <U15
          x="1165"
          :data="getKeyData('KC_RCTL', 'mod', 'Ctrl')"
          isMod="true"
        />
      </g>
    </g>
  </svg>
</template>

<script>
import tinycolor from 'tinycolor2';
import { genKeyData } from '../../utils/keys';
import U1 from '../keys/U1.vue';
import U225 from '../keys/U225.vue';
import U275 from '../keys/U275.vue';
import U175 from '../keys/U175.vue';
import U15 from '../keys/U15.vue';
import U2 from '../keys/U2.vue';
export default {
  props: ['keyset', 'keyboardColor'],
  components: { U1, U15, U175, U275, U2, U225 },
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
