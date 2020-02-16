<template>
  <div class="header clearfix mb-4">
    <h3 style="display:inline-block">
      Keyset Catalog
      <a href="https://github.com/zekth/Keyset-Catalog" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </h3>
    <div class="form-group ml-2" style="display:inline-block;">
      <label class="font-weight-bold">Dark mode</label>
      <ToggleButton
        @change="toggleDarkMode"
        v-model="darkMode"
        style="padding-top: 7px;"
      />
    </div>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/' }">Catalog</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/game' }">Game</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ToggleButton } from 'vue-js-toggle-button';
@Component({
  components: {
    ToggleButton
  }
})
export default class Header extends Vue {
  darkMode = localStorage && localStorage.getItem('darkMode') ? true : false;
  mounted() {
    if (this.darkMode) {
      this.toggleDarkMode({ value: true });
    }
  }
  toggleDarkMode({ value }) {
    if (value === true) {
      document.getElementsByTagName('html')[0].classList.add('dark');
      if (localStorage) {
        localStorage.setItem('darkMode', 'true');
      }
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark');
      localStorage.removeItem('darkMode');
    }
  }
}
</script>
