<template>
  <v-app>
    <Sidebar />
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
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '職務経歴書'
    }
  }
})
export default class DefaultLayouts extends Vue {}
</script>
