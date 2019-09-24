<template>
  <div class="row">
    <div class="col">
      <div class="render-container">
        <fullSizeAnsi
          v-if="selectedLayout === 'fullSizeAnsi'"
          :keyset="keyset"
          :keyboardColor="keyboardColor.hex"
        />
        <split60
          v-if="selectedLayout === '60SplitBckSp'"
          :keyset="keyset"
          :keyboardColor="keyboardColor.hex"
        />
        <wklTkl
          v-if="selectedLayout === 'wklTkl'"
          :keyset="keyset"
          :keyboardColor="keyboardColor.hex"
        />
        <wklTklIso
          v-if="selectedLayout === 'wklTklIso'"
          :keyset="keyset"
          :keyboardColor="keyboardColor.hex"
        />
        <lubrigante
          v-if="selectedLayout === 'lubrigante'"
          :keyset="keyset"
          :keyboardColor="keyboardColor.hex"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import fullSizeAnsi from '@/components/layouts/fullSizeAnsi.vue';
import lubrigante from '@/components/layouts/lubrigante.vue';
import wklTkl from '@/components/layouts/wkl-tkl.vue';
import wklTklIso from '@/components/layouts/wkl-tkl-iso.vue';
import split60 from '@/components/layouts/60SplitBckSp.vue';
@Component({
  computed: {
    ...mapGetters(['keyset'])
  },
  props: ['selectedLayout', 'keyboardColor'],
  components: {
    fullSizeAnsi,
    split60,
    lubrigante,
    wklTkl,
    wklTklIso
  }
})
export default class renderContainer extends Vue {}
</script>
