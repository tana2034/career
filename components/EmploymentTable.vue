<template>
  <v-layout row wrap>
    <v-flex xs12 md12 xl12>
      <div>
        <div class="mt-3 mb-3">
          <span class="term">{{ employment.from }} - {{ employment.to }}</span>
          <h4 class="subheading company">
            {{ employment.company }}
          </h4>
          <p class="grey--text companyProfile">
            {{ employment.companyProfile }}
          </p>
        </div>

        <div
          v-for="(project, i) in employment.projects" 
          :key="i"
          :project="project"
        >
          <div class="pl-3">  
            <div>
              <div>
                <small class="caption content-term"> {{ project.from }} - {{ project.to }} </small>
                <div class="body-2 title">
                  <span>{{ project.title }}</span>
                </div>
                <p class="body-1 grey--text pt-1 description">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { state, Employment } from '@/store/employment.ts'

@Component
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
}
</script>
