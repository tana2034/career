<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <resume />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Resume from '~/components/Resume.vue'

@Component({
  layout: 'pdf',
  components: {
    Resume
  }
})
export default class PreviewPage extends Vue {}
</script>
