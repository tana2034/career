<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="font-weight-thin">
        職務経歴書を作る
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="createPdf">
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
import querystring from 'querystring'
import axios from 'axios'

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
  },
  methods: {
    createPdf: function(event) {
      axios
        .post('/download/pdf', querystring.stringify(this.$store.state), {
          responseType: 'blob',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/pdf'
          }
        })
        .then(res => {
          const url = window.URL.createObjectURL(
            new Blob([res.data], { type: 'application/pdf' })
          )
          const link = document.createElement('a')
          link.href = url
          link.download = 'resume.pdf'
          document.body.appendChild(link)
          link.click()
        })
    }
  }
}
</script>
