<template>
  <v-container fluid grid-list-lg class="grey lighten-4">
    <v-layout row wrap>
      <v-flex xs12>
        <v-form>
          <Company
            v-for="(company, index) in companies"
            :key="index" 
            :index="index"
            row
          />
        </v-form>
      </v-flex>
      <v-flex xs12>
        <v-btn color="amber lighten-3" @click="$store.commit('employment/addCompany')">
          <v-icon>add</v-icon>会社を追加する
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Company from '~/components/Company.vue'

@Component({
  components: { Company }
})
export default class Employment extends Vue {
  get companies() {
    return this.$store.state.employment
  }
}
</script>
