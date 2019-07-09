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
              <Employment
                v-for="(work, index) in employment" 
                :key="index" 
                :work="work"
                :index="index"
              />
              <v-btn color="lime lighten-3" @click="$store.commit('employment/addTerm')">
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
import Employment from '~/components/Employment.vue'

export default {
  head() {
    return {
      title: '職務経歴書'
    }
  },
  components: { Employment },
  layout: 'default',
  computed: {
    employment: {
      get() {
        return this.$store.state.employment
      }
    }
  }
}
</script>
