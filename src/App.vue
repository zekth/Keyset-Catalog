<template>
  <div>
    <div id="app" class="container">
      <appHeader />
      <router-view />
    </div>
    <appFooter />
  </div>
</template>

<script lang="ts">
import 'vue-slider-component/theme/antd.css';
import '@/scss/style.scss';
import { Component, Vue } from 'vue-property-decorator';
import appHeader from '@/components/header.vue';
import appFooter from '@/components/footer.vue';
@Component({
  components: {
    appHeader,
    appFooter
  }
})
export default class App extends Vue {}
</script>
