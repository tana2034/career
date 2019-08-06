<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="toggleDrawer" />
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

@Component({
  components: {
    Sidebar: () => import('@/components/Sidebar.vue')
  }
})
export default class DefaultLayouts extends Vue {
  clipped: boolean = false

  drawer: boolean = false

  fixed: boolean = false

  miniVariant: boolean = false

  right: boolean = true

  rightDrawer: boolean = false

  title: boolean = '職務経歴書'

  toggleDrawer() {
    this.drawer = !this.drawer
  }
}
</script>
