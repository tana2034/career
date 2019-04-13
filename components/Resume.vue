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
            {{ $store.state.resume.lastname }}
          </span>
          <span id="firstname">
            {{ $store.state.resume.firstname }}
          </span>
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="email">
          {{ $store.state.resume.email }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="address">
          {{ $store.state.resume.address }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="tel">
          {{ $store.state.resume.tel }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="summary">
          {{ $store.state.resume.summary }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="qualification">
          {{ $store.state.resume.qualification }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="language">
          {{ $store.state.resume.language }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="os">
          {{ $store.state.resume.os }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="database">
          {{ $store.state.resume.database }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="framework">
          {{ $store.state.resume.framework }}
        </p>
      </v-flex>
      <v-flex sm12 lg12>
        <p id="tools">
          {{ $store.state.resume.tools }}
        </p>
      </v-flex>
      <WorkExperienceTable
        v-for="(work, index) in $store.state.resume.work_experiences"
        :key="index"
        :work="work"
        :index="index"
        :headers="$store.state.headers.list"
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
