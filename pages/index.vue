<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap align-start justify-start>
      <v-flex>
        <h1 mb-4 display-3>
          職務経歴書を作る
        </h1>
        <v-btn color="lime" to="/details">
          入力する
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: '職務経歴書'
    }
  },
  layout: 'top'
}
</script>
