<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap mb-4>
      <v-flex xs12>
        <h1 class="white--text display-2 font-weight-thin">
          職務経歴書を作る
        </h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-stepper
          v-model="currentStep"
          vertical
        >
          <v-stepper-step
            step="1"
            editable
            color="indigo"
          >
            基本情報を入力
          </v-stepper-step>
          <v-stepper-content step="1">
            <Detail />
            <v-btn color="amber mt-5" @click="nextStep()">
              <v-icon>navigate_next</v-icon>次の入力へ
            </v-btn>
          </v-stepper-content>
          <v-stepper-step
            step="2"
            editable
            color="indigo"
          >
            スキルを入力
          </v-stepper-step>
          <v-stepper-content step="2">
            <Skill />
            <v-btn color="amber mt-5" @click="nextStep()">
              <v-icon>navigate_next</v-icon>次の入力へ
            </v-btn>
          </v-stepper-content>
          <v-stepper-step
            step="3"
            editable
            color="indigo"
          >
            職務経歴を入力
          </v-stepper-step>
          <v-stepper-content
            step="3"
            editable
          >
            <Employment />
            <v-btn color="amber mt-5" @click="nextStep()">
              <v-icon>navigate_next</v-icon>全体をプレビュー
            </v-btn>
          </v-stepper-content>
          <v-stepper-step 
            step="4"
            editable
            color="indigo"
          >
            プレビュー
          </v-stepper-step>
          <v-stepper-content step="4">
            <v-btn color="amber mb-3" to="/preview">
              印刷用画面を表示する
            </v-btn>
            <div class="pa-5 grey lighten-4 ">
              <Resume />
            </div>
          </v-stepper-content>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Detail from '@/components/Detail.vue'
import Skill from '@/components/Skill.vue'
import Employment from '@/components/Employment.vue'
import Resume from '@/components/Resume.vue'

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
