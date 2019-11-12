# [Keyset Catalog]

Just a simple app to browse available keysets and find the best matches for a color. Accessible [here](https://zekth.github.io/Keyset-Catalog/)

## Develop

```
npm install
npm run serve
```

Code style use prettier and eslint. Runs before the build

```bash
npm run prettier # check code style
npm run prettier:fix # fix code style
npm run lint # check linting
```
## Add a Keyset

Keysets are currently only GMK ones, and the datastore is in `src/keysets/gmk.ts`. Colors support only HEX values.

A base keyset is:

```js
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
        legend: '#8e71a2'
      }
    }
  }
```

This keyset can be customized for each key. Ids of keys are the same as the ones you can find in [QMK](https://beta.docs.qmk.fm/features/keycodes_basic). For example see the GMK Terminal with the VIM kit:

```js
{
    name: 'Terminal',
    designer: '',
    colors: {
      base: {
        background: '#393b3b',
        legend: '#689b34'
      },
      mod: {
        background: '#393b3b',
        legend: '#689b34'
      },
      accent: {
        background: '#689b34',
        legend: '#393b3b'
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
  }
```

Also `weebAlt` and `weeb` are stored as const because it's used in several keysets. You can see for example Bento:

```js
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
      KC_ESC: {
        content: 'Putain',
        type: 'ptn'
      },
      ...weebAlt // Spread operator
    }
  }
```
