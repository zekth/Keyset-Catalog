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

const hiraganasAlt = {
  KC_Q: {
    thirdContent: 'た'
  },
  KC_W: {
    thirdContent: 'て'
  },
  KC_E: {
    thirdContent: 'い'
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
  KC_BSLS: {
    thirdContent: 'む'
  },
  KC_O: {
    thirdContent: 'ら'
  },
  KC_P: {
    thirdContent: 'せ'
  },
  KC_SCLN: {
    thirdContent: 'れ'
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
const hiraganas = {
  KC_Q: {
    content: 'た',
    subContent: '',
    thirdContent: ''
  },
  KC_SCLN: {
    content: 'れ',
    subContent: '',
    thirdContent: ''
  },
  KC_W: {
    content: 'て',
    subContent: '',
    thirdContent: ''
  },
  KC_E: {
    content: 'い',
    subContent: '',
    thirdContent: ''
  },
  KC_BSLS: {
    content: 'む',
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
        legend: '#3e728f'
      },
      mod: {
        background: '#3e728f',
        legend: '#fb7279'
      },
      accent: {
        background: '#fb7279',
        legend: '#3e728f'
      }
    },
    specialKeys: {
      ...hiraganasAlt
    }
  },
  {
    name: 'Bento - Kobe',
    designer: 'biip',
    colors: {
      base: {
        background: '#fff3ef',
        legend: '#3e728f'
      },
      mod: {
        background: '#3e728f',
        legend: '#fb7279'
      },
      accent: {
        background: '#fb7279',
        legend: '#3e728f'
      },
      ptn: {
        background: 'red',
        legend: 'white'
      }
    },
    specialKeys: {
      KC_ESC: {
        content: 'Putain',
        type: 'ptn'
      },
      ...hiraganas
    }
  },
  {
    name: 'Wavez',
    designer: 'EnjoyMyInSec',
    colors: {
      base: {
        background: '#00464f',
        legend: '#54bf19'
      },
      mod: {
        background: '#263740',
        legend: '#54bf19'
      },
      accent: {
        background: '#54bf19',
        legend: '#263740'
      }
    }
  },
  {
    name: 'Wavez - Kobe',
    designer: 'EnjoyMyInSec',
    colors: {
      base: {
        background: '#00464f',
        legend: '#54bf19'
      },
      mod: {
        background: '#263740',
        legend: '#54bf19'
      },
      accent: {
        background: '#54bf19',
        legend: '#263740'
      }
    },
    specialKeys: {
      ...hiraganas
    }
  },
  {
    name: 'Terminal',
    designer: '',
    colors: {
      base: {
        background: GmkBaseColors._N9,
        legend: '#689b34'
      },
      mod: {
        background: GmkBaseColors._N9,
        legend: '#689b34'
      },
      accent: {
        background: '#689b34',
        legend: GmkBaseColors._N9
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
        legend: GmkBaseColors._GE1
      },
      mod: {
        background: GmkBaseColors._TU2,
        legend: GmkBaseColors._GE1
      },
      accent: {
        background: GmkBaseColors._V2,
        legend: GmkBaseColors._CV
      }
    }
  },
  {
    name: 'Coniferous',
    designer: '',
    colors: {
      base: {
        background: GmkBaseColors._U9,
        legend: GmkBaseColors._N7
      },
      mod: {
        background: GmkBaseColors._N9,
        legend: GmkBaseColors._N7
      },
      accent: {
        background: GmkBaseColors._N7,
        legend: GmkBaseColors._U9
      }
    }
  },
  {
    name: 'Jamon',
    designer: 'zambumon',
    colors: {
      base: {
        background: '#84172c',
        legend: '#ece4d0'
      },
      mod: {
        background: '#ac2c32',
        legend: '#ece4d0'
      },
      accent: {
        background: '#272727',
        legend: '#ece4d0'
      }
    }
  },
  {
    name: 'Plum',
    designer: 'Jessica',
    colors: {
      base: {
        background: '#ded0af',
        legend: '#736b7c'
      },
      mod: {
        background: '#736b7c',
        legend: '#ded0af'
      },
      accent: {
        background: '#863f48',
        legend: '#ded0af'
      }
    }
  },
  {
    name: 'Tokio Nights',
    designer: '',
    colors: {
      base: {
        background: '#040403',
        legend: '#63e3f8'
      },
      mod: {
        background: '#2d394c',
        legend: '#6c2374'
      },
      accent: {
        background: '#6c2374',
        legend: '#63e3f8'
      }
    }
  },
  {
    name: 'Yuri',
    designer: 'Tomb3ry',
    colors: {
      base: {
        background: '#c7e6f5',
        legend: '#f54730'
      },
      mod: {
        background: '#2d394c',
        legend: '#f54730'
      },
      accent: {
        background: '#f54730',
        legend: '#2d394c'
      }
    }
  },
  {
    name: 'Nautilus',
    designer: '',
    colors: {
      base: {
        background: '#1b365d',
        legend: '#00a4a9'
      },
      mod: {
        background: '#1f2a44',
        legend: '#e5a100'
      },
      accent: {
        background: '#e5a100',
        legend: '#1f2a44'
      }
    }
  },
  {
    name: 'Serika',
    designer: 'Zambumon',
    colors: {
      base: {
        background: '#e1e1d5',
        legend: '#36373b'
      },
      mod: {
        background: '#eabe16',
        legend: '#36373b'
      },
      accent: {
        background: '#36373b',
        legend: '#e1e1d5'
      }
    }
  },
  {
    name: 'Serika - weeb',
    designer: 'Zambumon',
    colors: {
      base: {
        background: '#e1e1d5',
        legend: '#36373b'
      },
      mod: {
        background: '#eabe16',
        legend: '#36373b'
      },
      accent: {
        background: '#36373b',
        legend: '#e1e1d5'
      }
    },
    specialKeys: {
      ...hiraganasAlt
    }
  },
  {
    name: 'Dmg',
    designer: '',
    colors: {
      base: {
        background: '#c6c3b6',
        legend: '#240773'
      },
      mod: {
        background: '#747773',
        legend: '#240773'
      },
      accent: {
        background: '#8d2a59',
        legend: '#c1bfb2'
      }
    }
  },
  {
    name: 'Carbon',
    designer: 'tomb3ry',
    colors: {
      base: {
        background: '#cec1a9',
        legend: '#464746'
      },
      mod: {
        background: '#464746',
        legend: '#de6722'
      },
      accent: {
        background: '#de6722',
        legend: '#464746'
      }
    }
  },
  {
    name: 'Hyperfuse',
    designer: '',
    colors: {
      base: {
        background: GmkBaseColors._2M,
        legend: GmkBaseColors._DY
      },
      mod: {
        background: GmkBaseColors._2B,
        legend: GmkBaseColors._TU2
      },
      accent: {
        background: GmkBaseColors._TU2,
        legend: GmkBaseColors._DY
      }
    }
  },
  {
    name: 'Miami',
    designer: '',
    colors: {
      base: {
        background: '#4ed6d6',
        legend: '#fa67af'
      },
      mod: {
        background: '#fa67af',
        legend: '#4ed6d6'
      },
      accent: {
        background: '#fa67af',
        legend: '#4ed6d6'
      }
    }
  },
  {
    name: 'Striker',
    designer: 'Zambumon',
    colors: {
      base: {
        background: '#345b95',
        legend: '#ffffff'
      },
      mod: {
        background: '#345b95',
        legend: '#ffffff'
      },
      accent: {
        background: '#334660',
        legend: '#ffffff'
      }
    },
    specialKeys: {
      ...hiraganasAlt
    }
  },
  {
    name: 'Retro',
    designer: 'Matt3o',
    colors: {
      base: {
        background: '#5a2b0c',
        legend: GmkBaseColors._WS1
      },
      mod: {
        background: '#701111',
        legend: GmkBaseColors._WS1
      },
      accent: {
        background: GmkBaseColors._AE,
        legend: GmkBaseColors._WS1
      }
    }
  },
  {
    name: 'Sandstorm',
    designer: 'Zambumon',
    colors: {
      base: {
        background: '#ae9c78',
        legend: '#dfe0d0'
      },
      mod: {
        background: '#ae9c78',
        legend: '#dfe0d0'
      },
      accent: {
        background: '#dfe0d0',
        legend: '#000000'
      }
    }
  },
  {
    name: 'Oblivion - R1',
    designer: '',
    colors: {
      base: {
        background: '#596060',
        legend: GmkBaseColors._L9
      },
      mod: {
        background: '#424242',
        legend: GmkBaseColors._L9
      },
      accent: {
        background: '#424242',
        legend: '#93c247'
      },
      purpleMod: {
        background: '#424242',
        legend: '#a698c5'
      },
      redMod: {
        background: '#424242',
        legend: '#ea4221'
      },
      blueMod: {
        background: '#424242',
        legend: '#1a8ab7'
      },
      orangeMod: {
        background: '#424242',
        legend: '#ffac00'
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
    name: 'Oblivion - R2',
    designer: '',
    colors: {
      base: {
        background: '#596060',
        legend: '#c8c3b8'
      },
      mod: {
        background: '#424242',
        legend: '#c8c3b8'
      },
      accent: {
        background: '#424242',
        legend: '#93c247'
      },
      purpleMod: {
        background: '#424242',
        legend: '#a698c5'
      },
      redMod: {
        background: '#424242',
        legend: '#ea4221'
      },
      blueMod: {
        background: '#424242',
        legend: '#1a8ab7'
      },
      orangeMod: {
        background: '#424242',
        legend: '#ffac00'
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
        legend: '#bcac71'
      },
      mod: {
        background: '#302042',
        legend: '#bcac71'
      },
      accent: {
        background: '#bcac71',
        legend: '#302042'
      }
    }
  },
  {
    name: 'Space Cadet',
    designer: '',
    colors: {
      base: {
        background: '#5c6064',
        legend: '#f9fbfa'
      },
      mod: {
        background: '#216a99',
        legend: '#f9fbfa'
      },
      accent: {
        background: '#216a99',
        legend: '#f9fbfa'
      }
    }
  },
  {
    name: 'Camping',
    designer: '',
    colors: {
      base: {
        background: '#dbd4c9',
        legend: '#506d57'
      },
      mod: {
        background: '#506d57',
        legend: '#dbd4c9'
      },
      accent: {
        background: '#6c3638',
        legend: '#dbd4c9'
      }
    }
  },
  {
    name: 'Red Samurai',
    designer: '',
    colors: {
      base: {
        background: '#64242e',
        legend: '#9f744d'
      },
      mod: {
        background: '#262629',
        legend: '#9f744d'
      },
      accent: {
        background: '#9f744d',
        legend: '#64242e'
      }
    }
  },
  {
    name: 'Red Samurai - weeb',
    designer: '',
    colors: {
      base: {
        background: '#64242e',
        legend: '#9f744d'
      },
      mod: {
        background: '#262629',
        legend: '#9f744d'
      },
      accent: {
        background: '#9f744d',
        legend: '#64242e'
      }
    },
    specialKeys: {
      ...hiraganasAlt
    }
  },
  {
    name: 'Laser',
    designer: 'Mito',
    colors: {
      base: {
        background: '#2e2180',
        legend: '#0c9eb5'
      },
      mod: {
        background: '#1d1551',
        legend: '#b6245e'
      },
      accent: {
        background: '#b6245e',
        legend: '#1d1551'
      }
    }
  },
  {
    name: 'Lime',
    designer: '',
    colors: {
      base: {
        background: '#c1ced6',
        legend: '#678f58'
      },
      mod: {
        background: '#7f8a90',
        legend: '#97bb49'
      },
      accent: {
        background: '#9ac65e',
        legend: '#c1ced6'
      }
    }
  },
  {
    name: 'Honeywell',
    designer: '',
    colors: {
      base: {
        background: '#faf7f8',
        legend: '#647675'
      },
      mod: {
        background: '#6e6868',
        legend: '#f9f6f6'
      },
      accent: {
        background: '#d63123',
        legend: '#faf7f8'
      }
    }
  },
  {
    name: 'Mizu',
    designer: '',
    colors: {
      base: {
        background: '#acc8da',
        legend: '#212b35'
      },
      mod: {
        background: '#212b35',
        legend: '#d6d6d4'
      },
      accent: {
        background: '#d6d6d4',
        legend: '#212b35'
      }
    }
  },
  {
    name: 'NightRunner',
    designer: '',
    colors: {
      base: {
        background: '#2b2f31',
        legend: '#f9ff23'
      },
      mod: {
        background: '#47456c',
        legend: '#f9ff23'
      },
      accent: {
        background: '#f9ff23',
        legend: '#2b2f31'
      }
    }
  },
  {
    name: 'Olivia',
    designer: '',
    colors: {
      base: {
        background: '#fefef5',
        legend: '#43413f'
      },
      mod: {
        background: '#43413f',
        legend: '#d1b6a6'
      },
      accent: {
        background: '#d1b6a6',
        legend: '#43413f'
      }
    }
  },
  {
    name: 'Laser - Gaijin',
    designer: 'Mito',
    colors: {
      base: {
        background: '#2e2180',
        legend: '#0c9eb5'
      },
      mod: {
        background: '#1d1551',
        legend: '#b6245e'
      },
      accent: {
        background: '#b6245e',
        legend: '#1d1551'
      }
    },
    specialKeys: {
      ...hiraganasAlt
    }
  },
  {
    name: 'Handarbeit',
    designer: '',
    colors: {
      base: {
        background: '#a11901',
        legend: '#fefef8'
      },
      mod: {
        background: '#6b428c',
        legend: '#fefef8'
      },
      accent: {
        background: '#dbb51e',
        legend: '#fefef8'
      },
      green: {
        legend: '#fefef8',
        background: '#7eac1a'
      },
      blue: {
        legend: '#fefef8',
        background: '#0558ab'
      },
      lightPink: {
        background: '#d9b7b8',
        legend: '#fefef8'
      },
      darkGreen: {
        background: '#307b37',
        legend: '#fefef8'
      },
      orange: {
        background: '#c86b18',
        legend: '#fefef8'
      },
      darkCyan: {
        background: '#0b687a',
        legend: '#fefef8'
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
        legend: 'black'
      },
      mod: {
        background: '#f1f2f6',
        legend: 'black'
      },
      accent: {
        background: '#f1f2f6',
        legend: 'black'
      }
    }
  },
  {
    name: 'Modern Dolch (blue accent)',
    designer: 'janglad',
    colors: {
      base: {
        background: '#82878d',
        legend: '#e2e5ea'
      },
      mod: {
        background: '#595e64',
        legend: '#e2e5ea'
      },
      accent: {
        background: '#6bd8d5',
        legend: '#e2e5ea'
      }
    }
  },
  {
    name: 'Modern Dolch (red accent)',
    designer: 'janglad',
    colors: {
      base: {
        background: '#82878d',
        legend: '#e2e5ea'
      },
      mod: {
        background: '#595e64',
        legend: '#e2e5ea'
      },
      accent: {
        background: '#cf6478',
        legend: '#e2e5ea'
      }
    }
  },
  {
    name: 'SkIIdata',
    designer: 'TKC',
    colors: {
      base: {
        background: GmkBaseColors._N9,
        legend: GmkBaseColors._V2
      },
      mod: {
        background: GmkBaseColors._N9,
        legend: GmkBaseColors._V2
      },
      accent: {
        background: GmkBaseColors._V2,
        legend: GmkBaseColors._N9
      }
    }
  },
  {
    name: 'Nines',
    designer: 'Emir',
    colors: {
      base: {
        background: '#494949',
        legend: '#bcb6a6'
      },
      mod: {
        background: '#494949',
        legend: '#bcb6a6'
      },
      accent: {
        background: '#bcb6a6',
        legend: '#494949'
      }
    }
  },
  {
    name: 'Taro',
    designer: 'pwade3',
    colors: {
      base: {
        background: '#8e71a2',
        legend: '#170b19'
      },
      mod: {
        background: '#170b19',
        legend: '#8e71a2'
      },
      accent: {
        background: '#5ed8df',
        legend: '#170b19'
      }
    }
  },
  {
    name: 'Pulse',
    designer: '',
    colors: {
      base: {
        background: '#000000',
        legend: '#13bac0'
      },
      mod: {
        background: '#13bac0',
        legend: '#000000'
      },
      accent: {
        background: '#13bac0',
        legend: '#000000'
      }
    }
  },
  {
    name: 'First Love',
    designer: '',
    colors: {
      base: {
        background: '#313334',
        legend: '#9381d7'
      },
      mod: {
        background: '#322b4a',
        legend: '#9381d7'
      },
      accent: {
        background: '#9381d7',
        legend: '#322b4a'
      }
    }
  },
  {
    name: 'Rocket',
    designer: '',
    colors: {
      base: {
        background: '#c6c1c1',
        legend: '#c91c0b'
      },
      mod: {
        background: '#1c7fc3',
        legend: '#c91c0b'
      },
      accent: {
        background: '#c91c0b',
        legend: '#c6c1c1'
      }
    }
  },
  {
    name: 'Voyage',
    designer: '',
    colors: {
      base: {
        background: '#244fa5',
        legend: '#71c2dc'
      },
      mod: {
        background: '#243143',
        legend: '#71c2dc'
      },
      accent: {
        background: '#71c2dc',
        legend: '#243143'
      }
    }
  },
  {
    name: 'Peach n Cream',
    designer: '',
    colors: {
      base: {
        background: '#d5d0c9',
        legend: '#f38568'
      },
      mod: {
        background: '#ecb893',
        legend: '#f38568'
      },
      accent: {
        background: '#f38568',
        legend: '#d5d0c9'
      }
    }
  },
  {
    name: 'Chocolatier',
    designer: '',
    colors: {
      base: {
        background: '#563b2e',
        legend: '#ada391'
      },
      mod: {
        background: '#463730',
        legend: '#ada391'
      },
      accent: {
        background: '#463730',
        legend: '#ada391'
      }
    }
  },
  {
    name: 'Led Zep',
    designer: '',
    colors: {
      base: {
        background: '#e4dfc2',
        legend: '#3c3d41'
      },
      mod: {
        background: '#3c3d41',
        legend: '#d43633'
      },
      accent: {
        background: '#d43633',
        legend: '#3c3d41'
      }
    }
  },
  {
    name: 'Metaverse',
    designer: '',
    colors: {
      base: {
        background: '#ffffff',
        legend: '#000000'
      },
      mod: {
        background: '#000000',
        legend: '#ffffff'
      },
      accent: {
        background: '#dc2e16',
        legend: '#ffffff'
      }
    },
    specialKeys: {
      ...hiraganasAlt
    }
  },
  {
    name: 'Merlin',
    designer: '',
    colors: {
      base: {
        background: '#fefef4',
        legend: '#28768d'
      },
      mod: {
        background: '#28768d',
        legend: '#fec93d'
      },
      accent: {
        background: '#fec93d',
        legend: '#28768d'
      }
    }
  },
  {
    name: 'Denim',
    designer: '',
    colors: {
      base: {
        background: '#65748f',
        legend: '#c7baa0'
      },
      mod: {
        background: '#484e5d',
        legend: '#c7baa0'
      },
      accent: {
        background: '#ad855d',
        legend: '#9b2f1e'
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
        legend: '#212121'
      },
      mod: {
        background: '#c0b8a3',
        legend: '#212121'
      },
      accent: {
        background: '#7f987b',
        legend: '#212121'
      },
      accent_red: {
        background: '#e49181',
        legend: '#212121'
      }
    },
    specialKeys: {
      KC_ENT: { type: 'accent_red' },
      KC_SPC: { type: 'accent' }
    }
  },
  {
    name: 'Fro.Yo',
    designer: 'The_Royal',
    colors: {
      base: {
        background: GmkBaseColors._L9,
        legend: GmkBaseColors._2B
      },
      blueMod: {
        background: GmkBaseColors._L9,
        legend: '#6BAABD'
      },
      pinkMod: {
        background: GmkBaseColors._L9,
        legend: '#E78A87'
      },
      greenMod: {
        background: GmkBaseColors._L9,
        legend: '#79B695'
      },
      yellowishMod: {
        background: GmkBaseColors._L9,
        legend: '#B69856'
      },
      purpleMod: {
        background: GmkBaseColors._L9,
        legend: '#826E9E'
      }
    },
    specialKeys: {
      KC_BSPC: { type: 'pinkMod', content: 'Discount' },
      KC_INS: { type: 'pinkMod', content: 'Sale' },
      KC_LCTL: { type: 'pinkMod', content: 'Fill' },
      KC_RCTL: { type: 'pinkMod', content: 'Fill' },
      KC_ESC: { type: 'pinkMod', content: 'Mix' },

      KC_LALT: { type: 'greenMod', content: 'Topping' },
      KC_LGUI: { type: 'blueMod', content: 'Deluxe' },
      KC_RALT: { type: 'greenMod', content: 'Topping' },
      KC_RGUI: { type: 'blueMod', content: 'Deluxe' },
      KC_APP: { type: 'purpleMod', content: 'Weigh' },

      KC_TAB: { type: 'blueMod', content: 'Extra' },
      KC_CAPSLOCK: { type: 'purpleMod', content: 'Double' },
      KC_ENT: { type: 'greenMod', content: 'Total' },

      KC_LSFT: { type: 'yellowishMod', content: 'Add' },
      KC_RSFT: { type: 'yellowishMod', content: 'Add' },

      KC_F5: { type: 'base' },
      KC_F6: { type: 'base' },
      KC_F7: { type: 'base' },
      KC_F8: { type: 'base' },

      KC_PENT: { type: 'greenMod', content: 'Enter' },
      KC_PMNS: { type: 'base' },
      KC_PPLS: { type: 'base' },
      KC_PSLS: { type: 'base' },
      KC_NLCK: { type: 'base' },
      KC_PAST: { type: 'base' }
    }
  }
];
export default genIds(sets);
