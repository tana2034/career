<template>
  <v-container>
    <v-layout row wrap>
      <v-flex sm12 lg12>
        <span class="headline">
          職務経歴書
        </span>
      </v-flex>
      <v-flex sm12 lg12>
        <p class="title">
          {{ $store.state.lastname }} {{ $store.state.firstname }}
        </p>
        <p>{{ $store.state.email }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
