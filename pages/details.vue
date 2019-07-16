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
                    :counter="10"
                    label="Last name"
                    prepend-icon="person"
                    required
                  />
                </v-flex>
                <v-flex xs12 md6 xl6>
                  <v-text-field
                    v-model="firstname"
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
                    label="E-mail"
                    prepend-icon="email"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-menu
                    ref="modal_birth_date"
                    v-model="modal_birth_date"
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
                        v-model="birth_date"
                        name="birth_date"
                        readonly
                        label="birth date"
                        prepend-icon="event"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      ref="picker"
                      v-model="birth_date" 
                      landscape 
                      color="blue"
                      :max="new Date().toISOString().substr(0, 10)"
                      min="1950-01-01"
                      @input="closeModal('modal_birth_date')"
                    />
                  </v-menu>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="address"
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
                    label="Summary"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-textarea
                    v-model="public_relations"
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
                    v-model="modal_graduation_year"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{on}">
                      <v-text-field
                        v-model="graduation_year"
                        name="graduation_year"
                        readonly
                        label="the year of graduation"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker 
                      v-model="graduation_year" 
                      landscape 
                      type="month"
                      color="blue"
                      @input="closeModal('modal_graduation_year')"
                    />
                  </v-menu>
                  <v-text-field 
                    v-model="education" 
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
      modal_birth_date: false,
      modal_graduation_year: false
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
    birth_date: {
      get() {
        return this.$store.state.details.birth_date
      },
      set(value) {
        this.$store.commit('details/updateDetail', {
          key: 'birth_date',
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
    public_relations: {
      get() {
        return this.$store.state.details.public_relations
      },
      set(value) {
        this.$store.commit('details/updateDetail', {
          key: 'public_relations',
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
    graduation_year: {
      get() {
        return this.$store.state.details.graduation_year
      },
      set(value) {
        this.$store.commit('details/updateDetail', {
          key: 'graduation_year',
          value: value
        })
      }
    }
  },
  watch: {
    modal_birth_date(val) {
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
