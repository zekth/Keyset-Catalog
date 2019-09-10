import { genIds } from '@/utils/keys';

const GmkBaseColors = {
  _CR: '#171718',
  _N9: '#393b3b',
  _CC: '#67635b',
  _2B: '#727474',
  _BJ: '#91867a',
  _CB: '#9b9284',
  _U9: '#aca693',
  _L9: '#d8d2c3',
  _T9: '#c3c3ba',
  _3K: '#ccc6c0',
  _2M: '#c6c9c7',
  _GR1: '#c5c7ca',
  _CP: '#e1dad1',
  _WS1: '#f7f2ea',
  _BR1: '#653c25',
  _N7: '#00773a',
  _AE: '#689b34',
  _3B: '#768e72',
  _3A: '#7fa580',
  _V4: '#00579f',
  _N5: '#0085c2',
  _TU1: '#00627a',
  _TU2: '#00a3a9',
  _DY: '#5d437e',
  _RO1: '#8d242e',
  _P3: '#bc261e',
  _V1: '#d02e1c',
  _RO2: '#dd1125',
  _3C: '#c87e74',
  _MG1: '#cb3d6f',
  _V2: '#ee6b00',
  _N6: '#e5a000',
  _CV: '#f8c200',
  _GE1: '#ebd400'
};

const weebAlt = {
  KC_Q: {
    thirdContent: 'た'
  },
  KC_W: {
    thirdContent: 'て'
  },
  KC_E: {
    thirdContent: 'ぃ'
  },
  KC_R: {
    thirdContent: 'す'
  },
  KC_T: {
    thirdContent: 'か'
  },
  KC_Y: {
    thirdContent: 'ん'
  },
  KC_U: {
    thirdContent: 'た'
  },
  KC_I: {
    thirdContent: 'に'
  },
  KC_O: {
    thirdContent: 'ら'
  },
  KC_P: {
    thirdContent: 'ぜ'
  },
  KC_QUOT: {
    thirdContent: 'け'
  },
  KC_LBRC: {
    thirdContent: '゛'
  },
  KC_RBRC: {
    thirdContent: '゜'
  },
  KC_A: { thirdContent: 'ち' },
  KC_S: { thirdContent: 'と' },
  KC_D: { thirdContent: 'し' },
  KC_F: { thirdContent: 'は' },
  KC_G: { thirdContent: 'き' },
  KC_H: { thirdContent: 'く' },
  KC_J: { thirdContent: 'ま' },
  KC_K: { thirdContent: 'の' },
  KC_L: { thirdContent: 'り' },
  KC_Z: { thirdContent: 'つ' },
  KC_X: { thirdContent: 'せ' },
  KC_C: { thirdContent: 'そ' },
  KC_V: { thirdContent: 'ひ' },
  KC_B: { thirdContent: 'こ' },
  KC_N: { thirdContent: 'み' },
  KC_M: { thirdContent: 'も' },
  KC_COMM: { thirdContent: 'ね' },
  KC_DOT: { thirdContent: 'る' },
  KC_SLSH: { thirdContent: 'め' },
  KC_1: { thirdContent: 'ぬ' },
  KC_2: { thirdContent: 'ふ' },
  KC_3: { thirdContent: 'あ' },
  KC_4: { thirdContent: 'う' },
  KC_5: { thirdContent: 'え' },
  KC_6: { thirdContent: 'お' },
  KC_7: { thirdContent: 'や' },
  KC_8: { thirdContent: 'ゆ' },
  KC_9: { thirdContent: 'よ' },
  KC_0: { thirdContent: 'わ' },
  KC_MINS: { thirdContent: 'ほ' },
  KC_EQL: { thirdContent: 'へ' },
  KC_GRV: { thirdContent: 'ろ' }
};
const weeb = {
  KC_Q: {
    content: 'た',
    subContent: '',
    thirdContent: ''
  },
  KC_W: {
    content: 'て',
    subContent: '',
    thirdContent: ''
  },
  KC_E: {
    content: 'ぃ',
    subContent: '',
    thirdContent: ''
  },
  KC_R: {
    content: 'す',
    subContent: '',
    thirdContent: ''
  },
  KC_T: {
    content: 'か',
    subContent: '',
    thirdContent: ''
  },
  KC_Y: {
    content: 'ん',
    subContent: '',
    thirdContent: ''
  },
  KC_U: {
    content: 'た',
    subContent: '',
    thirdContent: ''
  },
  KC_I: {
    content: 'に',
    subContent: '',
    thirdContent: ''
  },
  KC_O: {
    content: 'ら',
    subContent: '',
    thirdContent: ''
  },
  KC_P: {
    content: 'ぜ',
    subContent: '',
    thirdContent: ''
  },
  KC_QUOT: {
    content: 'け',
    subContent: '',
    thirdContent: ''
  },
  KC_LBRC: {
    content: '゛',
    subContent: '',
    thirdContent: ''
  },
  KC_RBRC: {
    content: '゜',
    subContent: '',
    thirdContent: ''
  },
  KC_A: { content: 'ち', subContent: '', thirdContent: '' },
  KC_S: { content: 'と', subContent: '', thirdContent: '' },
  KC_D: { content: 'し', subContent: '', thirdContent: '' },
  KC_F: { content: 'は', subContent: '', thirdContent: '' },
  KC_G: { content: 'き', subContent: '', thirdContent: '' },
  KC_H: { content: 'く', subContent: '', thirdContent: '' },
  KC_J: { content: 'ま', subContent: '', thirdContent: '' },
  KC_K: { content: 'の', subContent: '', thirdContent: '' },
  KC_L: { content: 'り', subContent: '', thirdContent: '' },
  KC_Z: { content: 'つ', subContent: '', thirdContent: '' },
  KC_X: { content: 'せ', subContent: '', thirdContent: '' },
  KC_C: { content: 'そ', subContent: '', thirdContent: '' },
  KC_V: { content: 'ひ', subContent: '', thirdContent: '' },
  KC_B: { content: 'こ', subContent: '', thirdContent: '' },
  KC_N: { content: 'み', subContent: '', thirdContent: '' },
  KC_M: { content: 'も', subContent: '', thirdContent: '' },
  KC_COMM: { content: 'ね', subContent: '', thirdContent: '' },
  KC_DOT: { content: 'る', subContent: '', thirdContent: '' },
  KC_SLSH: { content: 'め', subContent: '', thirdContent: '' },
  KC_1: { content: 'ぬ', subContent: '', thirdContent: '' },
  KC_2: { content: 'ふ', subContent: '', thirdContent: '' },
  KC_3: { content: 'あ', subContent: '', thirdContent: '' },
  KC_4: { content: 'う', subContent: '', thirdContent: '' },
  KC_5: { content: 'え', subContent: '', thirdContent: '' },
  KC_6: { content: 'お', subContent: '', thirdContent: '' },
  KC_7: { content: 'や', subContent: '', thirdContent: '' },
  KC_8: { content: 'ゆ', subContent: '', thirdContent: '' },
  KC_9: { content: 'よ', subContent: '', thirdContent: '' },
  KC_0: { content: 'わ', subContent: '', thirdContent: '' },
  KC_MINS: { content: 'ほ', subContent: '', thirdContent: '' },
  KC_EQL: { content: 'へ', subContent: '', thirdContent: '' },
  KC_GRV: { content: 'ろ', subContent: '', thirdContent: '' }
};

const sets = [
  {
    name: 'Bento',
    designer: 'biip',
    colors: {
      base: {
        background: '#fff3ef',
        color: '#3e728f'
      },
      mod: {
        background: '#3e728f',
        color: '#fb7279'
      },
      accent: {
        background: '#fb7279',
        color: '#3e728f'
      },
      ptn: {
        background: 'red',
        color: 'white'
      }
    }
  },
  {
    name: 'Bento - weeb alt',
    designer: 'biip',
    colors: {
      base: {
        background: '#fff3ef',
        color: '#3e728f'
      },
      mod: {
        background: '#3e728f',
        color: '#fb7279'
      },
      accent: {
        background: '#fb7279',
        color: '#3e728f'
      },
      ptn: {
        background: 'red',
        color: 'white'
      }
    },
    specialKeys: {
      ...weebAlt
    }
  },
  {
    name: 'Bento - true weeb',
    designer: 'biip',
    colors: {
      base: {
        background: '#fff3ef',
        color: '#3e728f'
      },
      mod: {
        background: '#3e728f',
        color: '#fb7279'
      },
      accent: {
        background: '#fb7279',
        color: '#3e728f'
      },
      ptn: {
        background: 'red',
        color: 'white'
      }
    },
    specialKeys: {
      KC_ESC: {
        content: 'Putain',
        type: 'ptn'
      },
      ...weeb
    }
  },
  {
    name: 'Terminal',
    designer: '',
    colors: {
      base: {
        background: GmkBaseColors._N9,
        color: '#689b34'
      },
      mod: {
        background: GmkBaseColors._N9,
        color: '#689b34'
      },
      accent: {
        background: '#689b34',
        color: GmkBaseColors._N9
      }
    },
    specialKeys: {
      KC_H: {
        type: 'accent',
        thirdContent: '←'
      },
      KC_J: {
        type: 'accent',
        thirdContent: '↓'
      },
      KC_K: {
        type: 'accent',
        thirdContent: '↑'
      },
      KC_L: {
        type: 'accent',
        thirdContent: '→'
      }
    }
  },
  {
    name: 'Aero',
    designer: '',
    colors: {
      base: {
        background: GmkBaseColors._TU1,
        color: GmkBaseColors._GE1
      },
      mod: {
        background: GmkBaseColors._TU2,
        color: GmkBaseColors._GE1
      },
      accent: {
        background: GmkBaseColors._V2,
        color: GmkBaseColors._CV
      }
    }
  },
  {
    name: 'Jamon',
    designer: 'zambumon',
    colors: {
      base: {
        background: '#84172c',
        color: '#ece4d0'
      },
      mod: {
        background: '#ac2c32',
        color: '#ece4d0'
      },
      accent: {
        background: '#272727',
        color: '#ece4d0'
      }
    }
  },
  {
    name: 'Plum',
    designer: 'Jessica',
    colors: {
      base: {
        background: '#ded0af',
        color: '#736b7c'
      },
      mod: {
        background: '#736b7c',
        color: '#ded0af'
      },
      accent: {
        background: '#863f48',
        color: '#ded0af'
      }
    }
  },
  {
    name: 'Miami Night',
    designer: '',
    colors: {
      base: {
        background: '#040403',
        color: '#63e3f8'
      },
      mod: {
        background: '#2d394c',
        color: '#6c2374'
      },
      accent: {
        background: '#6c2374',
        color: '#63e3f8'
      }
    }
  },
  {
    name: 'Yuri',
    designer: 'Tomb3ry',
    colors: {
      base: {
        background: '#c7e6f5',
        color: '#f54730'
      },
      mod: {
        background: '#2d394c',
        color: '#f54730'
      },
      accent: {
        background: '#f54730',
        color: '#2d394c'
      }
    }
  },
  {
    name: 'Nautilus',
    designer: '',
    colors: {
      base: {
        background: '#1b365d',
        color: '#00a4a9'
      },
      mod: {
        background: '#1f2a44',
        color: '#e5a100'
      },
      accent: {
        background: '#e5a100',
        color: '#1f2a44'
      }
    }
  },
  {
    name: 'Serika',
    designer: 'Zambumon',
    colors: {
      base: {
        background: '#e1e1d5',
        color: '#36373b'
      },
      mod: {
        background: '#eabe16',
        color: '#36373b'
      },
      accent: {
        background: '#36373b',
        color: '#e1e1d5'
      }
    }
  },
  {
    name: 'Serika - weeb',
    designer: 'Zambumon',
    colors: {
      base: {
        background: '#e1e1d5',
        color: '#36373b'
      },
      mod: {
        background: '#eabe16',
        color: '#36373b'
      },
      accent: {
        background: '#36373b',
        color: '#e1e1d5'
      }
    },
    specialKeys: {
      ...weebAlt
    }
  },
  {
    name: 'Dmg',
    designer: '',
    colors: {
      base: {
        background: '#c6c3b6',
        color: '#240773'
      },
      mod: {
        background: '#747773',
        color: '#240773'
      },
      accent: {
        background: '#8d2a59',
        color: '#c1bfb2'
      }
    }
  },
  {
    name: 'Carbon',
    designer: 'tomb3ry',
    colors: {
      base: {
        background: '#cec1a9',
        color: '#464746'
      },
      mod: {
        background: '#464746',
        color: '#de6722'
      },
      accent: {
        background: '#de6722',
        color: '#464746'
      }
    }
  },
  {
    name: 'Hyperfuse',
    designer: '',
    colors: {
      base: {
        background: GmkBaseColors._2M,
        color: GmkBaseColors._DY
      },
      mod: {
        background: GmkBaseColors._2B,
        color: GmkBaseColors._TU2
      },
      accent: {
        background: GmkBaseColors._TU2,
        color: GmkBaseColors._DY
      }
    }
  },
  {
    name: 'Miami',
    designer: '',
    colors: {
      base: {
        background: '#4ed6d6',
        color: '#fa67af'
      },
      mod: {
        background: '#fa67af',
        color: '#4ed6d6'
      },
      accent: {
        background: '#fa67af',
        color: '#4ed6d6'
      }
    }
  },
  {
    name: 'Striker',
    designer: 'Zambumon',
    colors: {
      base: {
        background: '#345b95',
        color: '#ffffff'
      },
      mod: {
        background: '#345b95',
        color: '#ffffff'
      },
      accent: {
        background: '#334660',
        color: '#ffffff'
      }
    },
    specialKeys: {
      ...weebAlt
    }
  },
  {
    name: 'Retro',
    designer: 'Matt3o',
    colors: {
      base: {
        background: '#5a2b0c',
        color: GmkBaseColors._WS1
      },
      mod: {
        background: '#701111',
        color: GmkBaseColors._WS1
      },
      accent: {
        background: GmkBaseColors._AE,
        color: GmkBaseColors._WS1
      }
    }
  },
  {
    name: 'Sandstorm',
    designer: 'Zambumon',
    colors: {
      base: {
        background: '#ae9c78',
        color: '#dfe0d0'
      },
      mod: {
        background: '#ae9c78',
        color: '#dfe0d0'
      },
      accent: {
        background: '#dfe0d0',
        color: '#000000'
      }
    }
  },
  {
    name: 'Oblivion',
    designer: '',
    colors: {
      base: {
        background: '#596060',
        color: '#b3b1a3'
      },
      mod: {
        background: '#424242',
        color: '#b3b1a3'
      },
      accent: {
        background: '#424242',
        color: '#607536'
      },
      purpleMod: {
        background: '#424242',
        color: '#8a879d'
      },
      redMod: {
        background: '#424242',
        color: '#a55449'
      },
      blueMod: {
        background: '#424242',
        color: '#32697d'
      },
      orangeMod: {
        background: '#424242',
        color: '#8f7227'
      }
    },
    specialKeys: {
      KC_CAPSLOCK: {
        type: 'accent'
      },
      KC_ESC: {
        type: 'redMod'
      },
      KC_LSFT: {
        type: 'orangeMod'
      },
      KC_RSFT: {
        type: 'orangeMod'
      },
      KC_TAB: {
        type: 'purpleMod'
      },
      KC_BSPC: {
        type: 'purpleMod'
      },
      KC_PENT: {
        type: 'accent'
      },
      KC_NLCK: {
        type: 'redMod'
      },
      KC_LGUI: {
        type: 'redMod'
      },
      KC_RGUI: {
        type: 'redMod'
      },
      KC_LCTL: {
        type: 'blueMod'
      },
      KC_LALT: {
        type: 'blueMod'
      },
      KC_RALT: {
        type: 'blueMod'
      },
      KC_APP: {
        type: 'blueMod'
      },
      KC_RCTL: {
        type: 'blueMod'
      },
      KC_PSCR: {
        type: 'mod'
      },
      KC_SLCK: {
        type: 'mod'
      },
      KC_PAUS: {
        type: 'mod'
      },
      KC_INS: {
        type: 'mod'
      },
      KC_HOME: {
        type: 'mod'
      },
      KC_PGUP: {
        type: 'mod'
      },
      KC_DEL: {
        type: 'mod'
      },
      KC_END: {
        type: 'mod'
      },
      KC_PGDN: {
        type: 'mod'
      },
      KC_UP: {
        type: 'mod'
      },
      KC_LEFT: {
        type: 'mod'
      },
      KC_DOWN: {
        type: 'mod'
      },
      KC_RGHT: {
        type: 'mod'
      }
    }
  },
  {
    name: 'Phantom',
    designer: '',
    colors: {
      base: {
        background: '#302042',
        color: '#bcac71'
      },
      mod: {
        background: '#302042',
        color: '#bcac71'
      },
      accent: {
        background: '#bcac71',
        color: '#302042'
      }
    }
  },
  {
    name: 'Space Cadet',
    designer: '',
    colors: {
      base: {
        background: '#5c6064',
        color: '#f9fbfa'
      },
      mod: {
        background: '#216a99',
        color: '#f9fbfa'
      },
      accent: {
        background: '#216a99',
        color: '#f9fbfa'
      }
    }
  },
  {
    name: 'Camping',
    designer: '',
    colors: {
      base: {
        background: '#dbd4c9',
        color: '#506d57'
      },
      mod: {
        background: '#506d57',
        color: '#dbd4c9'
      },
      accent: {
        background: '#6c3638',
        color: '#dbd4c9'
      }
    }
  },
  {
    name: 'Red Samurai',
    designer: '',
    colors: {
      base: {
        background: '#64242e',
        color: '#9f744d'
      },
      mod: {
        background: '#262629',
        color: '#9f744d'
      },
      accent: {
        background: '#9f744d',
        color: '#64242e'
      }
    }
  },
  {
    name: 'Red Samurai - weeb',
    designer: '',
    colors: {
      base: {
        background: '#64242e',
        color: '#9f744d'
      },
      mod: {
        background: '#262629',
        color: '#9f744d'
      },
      accent: {
        background: '#9f744d',
        color: '#64242e'
      }
    },
    specialKeys: {
      ...weebAlt
    }
  },
  {
    name: 'Laser',
    designer: 'Mito',
    colors: {
      base: {
        background: '#2e2180',
        color: '#0c9eb5'
      },
      mod: {
        background: '#1d1551',
        color: '#b6245e'
      },
      accent: {
        background: '#b6245e',
        color: '#1d1551'
      }
    }
  },
  {
    name: 'Lime',
    designer: '',
    colors: {
      base: {
        background: '#c1ced6',
        color: '#678f58'
      },
      mod: {
        background: '#7f8a90',
        color: '#97bb49'
      },
      accent: {
        background: '#9ac65e',
        color: '#c1ced6'
      }
    }
  },
  {
    name: 'Honeywell',
    designer: '',
    colors: {
      base: {
        background: '#faf7f8',
        color: '#647675'
      },
      mod: {
        background: '#6e6868',
        color: '#f9f6f6'
      },
      accent: {
        background: '#d63123',
        color: '#faf7f8'
      }
    }
  },
  {
    name: 'Mizu',
    designer: '',
    colors: {
      base: {
        background: '#acc8da',
        color: '#212b35'
      },
      mod: {
        background: '#212b35',
        color: '#d6d6d4'
      },
      accent: {
        background: '#d6d6d4',
        color: '#212b35'
      }
    }
  },
  {
    name: 'NightRunner',
    designer: '',
    colors: {
      base: {
        background: '#2b2f31',
        color: '#f9ff23'
      },
      mod: {
        background: '#47456c',
        color: '#f9ff23'
      },
      accent: {
        background: '#f9ff23',
        color: '#2b2f31'
      }
    }
  },
  {
    name: 'Olivia',
    designer: '',
    colors: {
      base: {
        background: '#fefef5',
        color: '#43413f'
      },
      mod: {
        background: '#43413f',
        color: '#d1b6a6'
      },
      accent: {
        background: '#d1b6a6',
        color: '#43413f'
      }
    }
  },
  {
    name: 'Laser - Gaijin',
    designer: 'Mito',
    colors: {
      base: {
        background: '#2e2180',
        color: '#0c9eb5'
      },
      mod: {
        background: '#1d1551',
        color: '#b6245e'
      },
      accent: {
        background: '#b6245e',
        color: '#1d1551'
      }
    },
    specialKeys: {
      ...weebAlt
    }
  },
  {
    name: 'Handarbeit',
    designer: '',
    colors: {
      base: {
        background: '#a11901',
        color: '#fefef8'
      },
      mod: {
        background: '#6b428c',
        color: '#fefef8'
      },
      accent: {
        background: '#dbb51e',
        color: '#fefef8'
      },
      green: {
        color: '#fefef8',
        background: '#7eac1a'
      },
      blue: {
        color: '#fefef8',
        background: '#0558ab'
      },
      lightPink: {
        background: '#d9b7b8',
        color: '#fefef8'
      },
      darkGreen: {
        background: '#307b37',
        color: '#fefef8'
      },
      orange: {
        background: '#c86b18',
        color: '#fefef8'
      },
      darkCyan: {
        background: '#0b687a',
        color: '#fefef8'
      }
    },
    specialKeys: {
      KC_PDOT: { type: 'darkCyan' },
      KC_NLCK: { type: 'accent' },
      KC_PSLS: { type: 'accent' },
      KC_PAST: { type: 'accent' },
      KC_PMNS: { type: 'accent' },
      KC_P7: { type: 'mod' },
      KC_P8: { type: 'mod' },
      KC_P9: { type: 'mod' },
      KC_P4: { type: 'mod' },
      KC_P6: { type: 'mod' },
      KC_P1: { type: 'mod' },
      KC_P2: { type: 'mod' },
      KC_P3: { type: 'mod' },
      KC_RGHT: { type: 'orange' },
      KC_LEFT: { type: 'orange' },
      KC_DOWN: { type: 'green' },
      KC_UP: { type: 'accent' },

      KC_INS: { type: 'accent' },
      KC_DEL: { type: 'accent' },
      KC_HOME: { type: 'green' },
      KC_END: { type: 'green' },
      KC_PGUP: { type: 'base' },
      KC_PGDN: { type: 'base' },
      KC_PSCR: { type: 'darkGreen' },
      KC_SLCK: { type: 'darkGreen' },
      KC_PAUS: { type: 'darkGreen' },
      KC_F1: { type: 'blue' },
      KC_F2: { type: 'blue' },
      KC_F3: { type: 'blue' },
      KC_F4: { type: 'blue' },
      KC_F5: { type: 'lightPink' },
      KC_F6: { type: 'lightPink' },
      KC_F7: { type: 'lightPink' },
      KC_F8: { type: 'lightPink' },
      KC_F9: { type: 'accent' },
      KC_F10: { type: 'accent' },
      KC_F11: { type: 'accent' },
      KC_F12: { type: 'accent' },
      KC_ESC: { type: 'base' },
      KC_1: { type: 'green' },
      KC_2: { type: 'green' },
      KC_3: { type: 'green' },
      KC_4: { type: 'green' },
      KC_5: { type: 'green' },
      KC_6: { type: 'green' },
      KC_7: { type: 'green' },
      KC_8: { type: 'green' },
      KC_9: { type: 'green' },
      KC_0: { type: 'green' },
      KC_F: { type: 'accent' },
      KC_J: { type: 'accent' },
      KC_LBRC: { type: 'blue' },
      KC_RBRC: { type: 'blue' },
      KC_SCLN: { type: 'blue' },
      KC_QUOT: { type: 'blue' },
      KC_COMM: { type: 'blue' },
      KC_DOT: { type: 'blue' },
      KC_SLSH: { type: 'blue' }
    }
  },
  {
    name: 'Minimal',
    designer: 'janglad',
    colors: {
      base: {
        background: '#f1f2f6',
        color: 'black'
      },
      mod: {
        background: '#f1f2f6',
        color: 'black'
      },
      accent: {
        background: '#f1f2f6',
        color: 'black'
      }
    }
  },
  {
    name: 'Modern Dolch (blue accent)',
    designer: 'janglad',
    colors: {
      base: {
        background: '#82878d',
        color: '#e2e5ea'
      },
      mod: {
        background: '#595e64',
        color: '#e2e5ea'
      },
      accent: {
        background: '#6bd8d5',
        color: '#e2e5ea'
      }
    }
  },
  {
    name: 'Modern Dolch (red accent)',
    designer: 'janglad',
    colors: {
      base: {
        background: '#82878d',
        color: '#e2e5ea'
      },
      mod: {
        background: '#595e64',
        color: '#e2e5ea'
      },
      accent: {
        background: '#cf6478',
        color: '#e2e5ea'
      }
    }
  },
  {
    name: 'SkIIdata',
    designer: 'TKC',
    colors: {
      base: {
        background: GmkBaseColors._N9,
        color: GmkBaseColors._V2
      },
      mod: {
        background: GmkBaseColors._N9,
        color: GmkBaseColors._V2
      },
      accent: {
        background: GmkBaseColors._V2,
        color: GmkBaseColors._N9
      }
    }
  },
  {
    name: 'Nines',
    designer: 'Emir',
    colors: {
      base: {
        background: '#494949',
        color: '#bcb6a6'
      },
      mod: {
        background: '#494949',
        color: '#bcb6a6'
      },
      accent: {
        background: '#bcb6a6',
        color: '#494949'
      }
    }
  },
  {
    name: 'Taro',
    designer: 'pwade3',
    colors: {
      base: {
        background: '#8e71a2',
        color: '#170b19'
      },
      mod: {
        background: '#170b19',
        color: '#8e71a2'
      },
      accent: {
        background: '#5ed8df',
        color: '#8e71a2'
      }
    }
  },
  {
    name: 'Pulse',
    designer: '',
    colors: {
      base: {
        background: '#000000',
        color: '#13bac0'
      },
      mod: {
        background: '#13bac0',
        color: '#000000'
      },
      accent: {
        background: '#13bac0',
        color: '#000000'
      }
    }
  },
  {
    name: 'First Love',
    designer: '',
    colors: {
      base: {
        background: '#313334',
        color: '#9381d7'
      },
      mod: {
        background: '#322b4a',
        color: '#9381d7'
      },
      accent: {
        background: '#9381d7',
        color: '#322b4a'
      }
    }
  },
  {
    name: 'Rocket',
    designer: '',
    colors: {
      base: {
        background: '#c6c1c1',
        color: '#c91c0b'
      },
      mod: {
        background: '#1c7fc3',
        color: '#c91c0b'
      },
      accent: {
        background: '#c91c0b',
        color: '#c6c1c1'
      }
    }
  },
  {
    name: 'Voyage',
    designer: '',
    colors: {
      base: {
        background: '#244fa5',
        color: '#71c2dc'
      },
      mod: {
        background: '#243143',
        color: '#71c2dc'
      },
      accent: {
        background: '#71c2dc',
        color: '#243143'
      }
    }
  },
  {
    name: 'Peach n Cream',
    designer: '',
    colors: {
      base: {
        background: '#d5d0c9',
        color: '#f38568'
      },
      mod: {
        background: '#ecb893',
        color: '#f38568'
      },
      accent: {
        background: '#f38568',
        color: '#d5d0c9'
      }
    }
  },
  {
    name: 'Chocolatier',
    designer: '',
    colors: {
      base: {
        background: '#563b2e',
        color: '#ada391'
      },
      mod: {
        background: '#463730',
        color: '#ada391'
      },
      accent: {
        background: '#463730',
        color: '#ada391'
      }
    }
  },
  {
    name: 'Led Zep',
    designer: '',
    colors: {
      base: {
        background: '#e4dfc2',
        color: '#3c3d41'
      },
      mod: {
        background: '#3c3d41',
        color: '#d43633'
      },
      accent: {
        background: '#d43633',
        color: '#3c3d41'
      }
    }
  },
  {
    name: 'Metaverse',
    designer: '',
    colors: {
      base: {
        background: '#ffffff',
        color: '#000000'
      },
      mod: {
        background: '#000000',
        color: '#ffffff'
      },
      accent: {
        background: '#dc2e16',
        color: '#ffffff'
      }
    },
    specialKeys: {
      ...weebAlt
    }
  },
  {
    name: 'Merlin',
    designer: '',
    colors: {
      base: {
        background: '#fefef4',
        color: '#28768d'
      },
      mod: {
        background: '#28768d',
        color: '#fec93d'
      },
      accent: {
        background: '#fec93d',
        color: '#28768d'
      }
    }
  },
  {
    name: 'Denim',
    designer: '',
    colors: {
      base: {
        background: '#65748f',
        color: '#c7baa0'
      },
      mod: {
        background: '#484e5d',
        color: '#c7baa0'
      },
      accent: {
        background: '#ad855d',
        color: '#9b2f1e'
      }
    },
    specialKeys: {
      KC_ENT: { type: 'mod' }
    }
  },
  {
    name: '9009',
    designer: 'janglad',
    colors: {
      base: {
        background: '#e1dbcf',
        color: '#212121'
      },
      mod: {
        background: '#c0b8a3',
        color: '#212121'
      },
      accent: {
        background: '#7f987b',
        color: '#212121'
      },
      accent_red: {
        background: '#e49181',
        color: '#212121'
      }
    },
    specialKeys: {
      KC_ENT: { type: 'accent_red' },
      KC_SPC: { type: 'accent' }
    }
  }
];
export default genIds(sets);
