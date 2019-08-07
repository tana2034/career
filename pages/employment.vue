<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-form>
            <v-container>
              <v-layout row>
                <v-flex xs12>
                  <div>職務経歴</div>
                </v-flex>
              </v-layout>
              <Company
                v-for="(company, index) in companies"
                :key="index" 
                :index="index"
                row
              />
              <v-layout row>
                <v-flex xs12>
                  <v-btn color="lime lighten-3" @click="$store.commit('employment/addCompany')">
                    会社を追加する
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Company from '~/components/Company.vue'

@Component({
  head() {
    return {
      title: '職務経歴書'
    }
  },
  components: { Company },
  layout: 'default'
})
export default class EmploymentPage extends Vue {
  get companies() {
    return this.$store.state.employment
  }
}
</script>
