<template>
  <v-container fluid grid-list-lg>
    <v-stepper
      v-model="currentStep"
      vertical
    >
      <v-stepper-step
        step="1"
        editable
      >
        基本情報を入力
      </v-stepper-step>
      <v-stepper-content step="1">
        <Detail />
        <v-btn color="success" @click="nextStep()">
          次の入力へ
        </v-btn>
      </v-stepper-content>
      <v-stepper-step
        step="2"
        editable      
      >
        スキルを入力
      </v-stepper-step>
      <v-stepper-content step="2">
        <Skill />
        <v-btn color="success" @click="nextStep()">
          次の入力へ
        </v-btn>
      </v-stepper-content>
      <v-stepper-step
        step="3"
        editable
      >
        職務経歴を入力
      </v-stepper-step>
      <v-stepper-content
        step="3"
        editable
      >
        <Employment />
        <v-btn color="success" @click="nextStep()">
          全体をプレビュー
        </v-btn>
      </v-stepper-content>
      <v-stepper-step 
        step="4"
        editable
      >
        プレビュー
      </v-stepper-step>
      <v-stepper-content step="4">
        <v-btn color="success" to="/preview">
          画面全体に表示する
        </v-btn>
        <Resume />
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Detail from '@/components/Detail'
import Skill from '@/components/Skill'
import Employment from '@/components/Employment'
import Resume from '@/components/Resume'

@Component({
  components: { Detail, Skill, Employment, Resume },
  head() {
    return {
      title: '職務経歴書'
    }
  },
  layout: 'default'
})
export default class IndexPage extends Vue {
  currentStep: number = 1

  nextStep() {
    if (this.currentStep >= 4) {
      this.currentStep = 1
    } else {
      this.currentStep++
    }
  }
}
</script>
