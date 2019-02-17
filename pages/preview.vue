<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <v-card>
          <v-container>
            <v-layout row wrap>
              <v-flex sm12 lg12>
                <v-card-title>
                  <span class="headline">
                    職務経歴書
                  </span>
                </v-card-title>
              </v-flex>
              <v-flex sm12 lg12>
                <v-card-text>
                  <p class="title">
                    {{ $store.state.lastname }} {{ $store.state.firstname }}
                  </p>
                  <p>{{ $store.state.email }}</p>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
