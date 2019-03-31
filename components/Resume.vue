<template>
  <v-container>
    <v-layout row wrap>
      <v-flex sm12 lg12>
        <span class="headline">
          職務経歴書
        </span>
      </v-flex>
      <v-flex sm12 lg12>
        <p class="title">
          <span id="lastname">
            {{ $store.state.lastname }}
          </span>
          <span id="firstname">
            {{ $store.state.firstname }}
          </span>
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="email">
          {{ $store.state.email }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="address">
          {{ $store.state.address }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="tel">
          {{ $store.state.tel }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="summary">
          {{ $store.state.summary }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="qualification">
          {{ $store.state.qualification }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="language">
          {{ $store.state.language }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="os">
          {{ $store.state.os }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="database">
          {{ $store.state.database }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="framework">
          {{ $store.state.framework }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="tools">
          {{ $store.state.tools }}
        </p>
      </v-flex>
      <WorkExperienceTable
        v-for="(work, index) in $store.state.work_experiences"
        :key="index"
        :work="work"
        :index="index"
        :headers="$store.state.table_headers"
      />
    </v-layout>
  </v-container>
</template>

<script>
import WorkExperienceTable from '~/components/WorkExperienceTable.vue'

export default {
  components: { WorkExperienceTable }
}
</script>
