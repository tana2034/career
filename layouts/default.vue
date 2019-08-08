<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>職務経歴書を作る</v-toolbar-title>
    </v-toolbar>
    <v-content>
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
