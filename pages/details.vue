<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-form>
            <v-container>
              <v-layout row>
                <v-flex x12>
                  <div>基本情報</div>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12 md6 xl6>
                  <v-text-field
                    v-model="lastname"
                    box
                    :counter="10"
                    label="Last name"
                    prepend-icon="person"
                    required
                  />
                </v-flex>
                <v-flex xs12 md6 xl6>
                  <v-text-field
                    v-model="firstname"
                    box
                    :counter="10"
                    label="First name"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="email"
                    box
                    label="E-mail"
                    prepend-icon="email"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-menu
                    ref="modal_birthDate"
                    v-model="modal_birthDate"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    full-width
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{on}">
                      <v-text-field
                        v-model="birthDate"
                        box
                        name="birthDate"
                        readonly
                        label="birth date"
                        prepend-icon="event"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      ref="picker"
                      v-model="birthDate" 
                      color="blue"
                      :max="new Date().toISOString().substr(0, 10)"
                      min="1950-01-01"
                      @input="closeModal('modal_birthDate')"
                    />
                  </v-menu>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="address"
                    box
                    label="Address"
                    prepend-icon="map"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="tel"
                    box
                    label="Tel"
                    prepend-icon="phone"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-textarea
                    v-model="summary"
                    box
                    label="Summary"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-textarea
                    v-model="publicRelations"
                    box
                    label="PR"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-spacer />
              <v-layout row>
                <v-flex x12>
                  <div>最終学歴</div>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-menu
                    v-model="modal_graduationYear"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{on}">
                      <v-text-field
                        v-model="graduationYear"
                        box
                        name="graduationYear"
                        readonly
                        label="the year of graduation"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker 
                      v-model="graduationYear" 
                      landscape 
                      type="month"
                      color="blue"
                      @input="closeModal('modal_graduationYear')"
                    />
                  </v-menu>
                  <v-text-field
                    v-model="education"
                    box 
                    name="education" 
                    label="education"
                  />
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
export default {
  head() {
    return {
      title: '職務経歴書'
    }
  },
  data: function() {
    return {
      modal_birthDate: false,
      modal_graduationYear: false
    }
  },
  layout: 'default',
  computed: {
    lastname: {
      get() {
        return this.$store.state.details.lastname
      },
      set(value) {
        this.$store.commit('details/updateDetail', {
          key: 'lastname',
          value: value
        })
      }
    },
    firstname: {
      get() {
        return this.$store.state.details.firstname
      },
      set(value) {
        this.$store.commit('details/updateDetail', {
          key: 'firstname',
          value: value
        })
      }
    },
    email: {
      get() {
        return this.$store.state.details.email
      },
      set(value) {
        this.$store.commit('details/updateDetail', {
          key: 'email',
          value: value
        })
      }
    },
    birthDate: {
      get() {
        return this.$store.state.details.birthDate
      },
      set(value) {
        this.$store.commit('details/updateDetail', {
          key: 'birthDate',
          value: value
        })
      }
    },
    address: {
      get() {
        return this.$store.state.details.address
      },
      set(value) {
        this.$store.commit('details/updateDetail', {
          key: 'address',
          value: value
        })
      }
    },
    tel: {
      get() {
        return this.$store.state.details.tel
      },
      set(value) {
        this.$store.commit('details/updateDetail', {
          key: 'tel',
          value: value
        })
      }
    },
    summary: {
      get() {
        return this.$store.state.details.summary
      },
      set(value) {
        this.$store.commit('details/updateDetail', {
          key: 'summary',
          value: value
        })
      }
    },
    publicRelations: {
      get() {
        return this.$store.state.details.publicRelations
      },
      set(value) {
        this.$store.commit('details/updateDetail', {
          key: 'publicRelations',
          value: value
        })
      }
    },
    education: {
      get() {
        return this.$store.state.details.education
      },
      set(value) {
        this.$store.commit('details/updateDetail', {
          key: 'education',
          value: value
        })
      }
    },
    graduationYear: {
      get() {
        return this.$store.state.details.graduationYear
      },
      set(value) {
        this.$store.commit('details/updateDetail', {
          key: 'graduationYear',
          value: value
        })
      }
    }
  },
  watch: {
    modal_birthDate(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    closeModal(key) {
      this.key = false
    }
  }
}
</script>
