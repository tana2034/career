<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-form>
            <v-container>
              <v-layout row>
                <v-flex x12>
                  <div>職歴</div>
                </v-flex>
              </v-layout>
              <WorkExperienceForm
                v-for="(work, index) in experiences" 
                :key="index" 
                :work="work"
                :index="index"
              />
              <v-btn color="lime lighten-3" @click="$store.commit('experiences/addTerm')">
                期間を追加する
              </v-btn>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WorkExperienceForm from '~/components/WorkExperienceForm.vue'

export default {
  head() {
    return {
      title: '職務経歴書'
    }
  },
  components: { WorkExperienceForm },
  layout: 'default',
  computed: {
    experiences: {
      get() {
        return this.$store.state.experiences
      }
    }
  }
}
</script>
