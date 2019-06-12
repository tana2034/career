<template>
  <v-app>
    <Sidebar :sidebar="drawer" />
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="toggleSidebar" />
      <v-toolbar-title class="font-weight-thin">
        職務経歴書を作る
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
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
  },
  methods: {
    toggleSidebar: function() {
      this.drawer = !this.drawer
    }
  }
}
</script>
