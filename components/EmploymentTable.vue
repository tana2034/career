<template>
  <v-layout row wrap>
    <v-flex xs12 md12 xl12>
      <div>
        <div class="mt-3 mb-3">
          <span class="subtitle-1 term">{{ employment.from }} - {{ employment.to }}</span>
          <h4 class="title company">
            {{ employment.company }}
          </h4>
          <div class="caption companyProfile">
            {{ employment.companyProfile }}
          </div>
          <p v-if="exists(employment.role)" class="body-1 role">
            {{ employment.role }}
          </p>
        </div>
        <div
          v-for="(project, i) in employment.projects" 
          :key="i"
          :project="project"
        >
          <div class="pl-3">  
            <small class="subtitle-2 content-term"> {{ project.from }} - {{ project.to }} </small>
            <div class="subtitle-1 project-title">
              <span>{{ project.title }}</span>
            </div>
            <Markdown class="body-2 pt-1 pb-3 description" :text="project.description" />
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Employment } from '@/store/employment.ts'
import Markdown from '@/components/Markdown.vue'

@Component({
  components: { Markdown }
})
export default class EmploymentTable extends Vue {
  @Prop({
    default: {
      from: '',
      to: '',
      company: '',
      companyProfile: '',
      projects: []
    }
  })
  employment!: Employment

  exists(value: string): boolean {
    return value !== '' && value !== undefined
  }
}
</script>
