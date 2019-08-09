<template>
  <v-app>
    <v-content class="indigo">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DefaultLayouts extends Vue {
  clipped: boolean = false

  drawer: boolean = false

  fixed: boolean = false

  title: string = '職務経歴書'
}
</script>
