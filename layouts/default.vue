<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-side-icon @click="toggleDrawer" />
      <v-toolbar-title>職務経歴書を作る</v-toolbar-title>
    </v-toolbar>
    <Sidebar :drawer="drawer" @changeDrawer="drawer = $event" />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sidebar from '@/components/Sidebar.vue'

@Component({
  components: { Sidebar }
})
export default class DefaultLayouts extends Vue {
  clipped: boolean = false

  drawer: boolean = false

  fixed: boolean = false

  title: boolean = '職務経歴書'

  toggleDrawer(): void {
    this.drawer = !this.drawer
  }
}
</script>
