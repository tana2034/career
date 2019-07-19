<template>
  <v-layout row wrap>
    <v-flex xs12 md12 xl12>
      <div>
        <div class="mt-3 mb-3">
          <span class="term">{{ work.from }} - {{ work.to }}</span>
          <h4 class="subheading company">
            {{ work.company }}
          </h4>
          <p class="grey--text company_profile">
            {{ work.company_profile }}
          </p>
        </div>

        <div
          v-for="(project, i) in work.projects" 
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

<script>
import { state } from '@/store/employment.ts'

export default {
  props: {
    work: {
      type: Object,
      default: () => {
        return state()[0]
      }
    }
  }
}
</script>
