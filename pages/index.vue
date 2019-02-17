<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-form>
            <v-container>
              <v-layout row>
                <v-flex xs12 md6 xl6>
                  <v-text-field
                    v-model="$store.state.lastname"
                    :counter="10"
                    label="Last name"
                    required
                  />
                </v-flex>
                <v-flex xs12 md6 xl6>
                  <v-text-field
                    v-model="$store.state.firstname"
                    :counter="10"
                    label="First name"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="$store.state.email"
                    label="E-mail"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row justify-end>
                <v-flex xs12>
                  <v-card-actions>
                    <v-btn 
                      outline 
                      large 
                      nuxt
                      color="indigo" 
                      to="/preview"
                    >
                      Preview
                    </v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>
