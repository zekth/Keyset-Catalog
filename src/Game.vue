<template>
  <div>
    <div class="row mb-3">
      <div class="col" style="text-align:center">
        <h3>What is this Colorscheme?</h3>
        Win rate : {{ this.successRate }} % {{ this.successScore }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        <colorbox
          :data="{
            legend: this.alphaColors.legend,
            bg: this.alphaColors.background,
            txt: 'alpha'
          }"
        />
      </div>
      <div class="col" v-if="this.modColors">
        <colorbox
          :data="{
            legend: this.modColors.legend,
            bg: this.modColors.background,
            txt: 'mods'
          }"
        />
      </div>
      <div class="col" v-if="this.accentColors">
        <colorbox
          :data="{
            legend: this.accentColors.legend,
            bg: this.accentColors.background,
            txt: 'accent'
          }"
        />
      </div>
    </div>
    <div class="row" style="margin-top:50px;text-align:center">
      <div class="col">
        <button
          type="button"
          class="btn-answer btn"
          :class="getClass(questionContext[0])"
          v-on:click="submit(questionContext[0])"
        >
          {{ this.questionContext[0].name }}
        </button>
      </div>
      <div class="col">
        <button
          type="button"
          class="btn-answer btn"
          :class="getClass(questionContext[1])"
          v-on:click="submit(questionContext[1])"
        >
          {{ this.questionContext[1].name }}
        </button>
      </div>
    </div>
    <div class="row" style="margin-top:50px;text-align:center">
      <div class="col">
        <button
          type="button"
          class="btn-answer btn"
          :class="getClass(questionContext[2])"
          v-on:click="submit(questionContext[2])"
        >
          {{ this.questionContext[2].name }}
        </button>
      </div>
      <div class="col">
        <button
          type="button"
          class="btn-answer btn"
          :class="getClass(questionContext[3])"
          v-on:click="submit(questionContext[3])"
        >
          {{ this.questionContext[3].name }}
        </button>
      </div>
    </div>
    <div class="row" style="margin-top:50px;text-align:center">
      <div class="col">
        <button
          :disabled="!this.showAnswer"
          type="button"
          class="btn btn-success"
          v-on:click="next()"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import colorbox from '@/components/game/colorbox.vue';

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  computed: {
    ...mapGetters(['questionContext', 'successRate', 'successScore']),
    ...mapState(['keysets'])
  },
  methods: {
    ...mapMutations(['addAnswer']),
    ...mapActions([])
  },
  components: { colorbox }
})
export default class Game extends Vue {
  public questionContext: any;
  public addAnswer: any;
  public showAnswer = false;
  public isRight = false;
  showAnswers() {
    this.showAnswer = true;
  }
  getClass(keyset) {
    if (!this.showAnswer) {
      return 'btn-secondary';
    } else if (keyset.answer) {
      return 'btn-success';
    } else {
      return 'btn-danger';
    }
  }
  submit(keyset) {
    if (keyset.answer) {
      this.isRight = true;
    }
    this.showAnswers();
  }
  next() {
    this.showAnswer = false;
    this.answer.isRight = this.isRight;
    this.isRight = false;
    this.addAnswer(this.answer);
  }
  get answer() {
    return this.questionContext.filter(x => x.answer)[0];
  }
  get alphaColors() {
    return this.answer.colors.base;
  }
  get modColors() {
    return this.answer.colors.mod;
  }
  get accentColors() {
    return this.answer.colors.accent;
  }
}
</script>

<style>
.btn-answer {
  min-width: 250px;
}
</style>
