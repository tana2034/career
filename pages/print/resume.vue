<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <resume />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Resume from '~/components/Resume.vue'

export default {
  layout: 'pdf',
  components: {
    Resume
  }
}
</script>
