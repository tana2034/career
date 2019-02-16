<template>
  <v-app>
    <v-navigation-drawer app />
    <v-toolbar app>
      <v-toolbar-title class="font-weight-thin">
        職務経歴書を作る
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>cloud_download</v-icon>
      </v-btn>
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
}
</script>
