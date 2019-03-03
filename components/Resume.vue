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
          <span id="lastname">
            {{ $store.state.lastname }}
          </span> 
          <span id="firstname">
            {{ $store.state.firstname }}
          </span>
        </p>
        <p id="email">
          {{ $store.state.email }}
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
