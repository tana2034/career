<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <Resume />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  layout: 'pdf',
  components: {
    Resume: () => import('@/components/Resume.vue')
  }
})
export default class PreviewPage extends Vue {}
</script>
