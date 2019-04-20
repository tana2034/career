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
                    v-model="lastname"
                    :counter="10"
                    label="Last name"
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
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-menu
                    v-model="modal.birth_date"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{on}">
                      <v-text-field
                        v-model="birth_date"
                        name="birth_date"
                        readonly
                        label="birth date"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker 
                      v-model="birth_date" 
                      landscape 
                      color="blue"
                      @input="closeModal('birth_date')"
                    />
                  </v-menu>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="address"
                    label="Address"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="tel"
                    label="Tel"
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
                  <v-text-field
                    v-model="qualification"
                    label="Qualification"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="language"
                    label="Language"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="os"
                    label="OS"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="database"
                    label="Database"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="framework"
                    label="Web Framework"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="tools"
                    label="Middleware and Tools"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-spacer />
              <v-layout row>
                <v-flex x12>
                  <div>学歴</div>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-container grid-list-md>
                    <v-layout row wrap>
                      <v-flex xs12 md12 xl12>
                        <v-menu
                          v-model="modal.graduation_year"
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
                            @input="closeModal('graduation_year')"
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
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex x12>
                  <div>職歴</div>
                </v-flex>
              </v-layout>
              <WorkExperienceForm
                v-for="(work, index) in work_experiences" 
                :key="index" 
                :work="work"
                :index="index"
              />
              <v-btn color="success" @click="$store.commit('resume/addTerm')">
                期間を追加する
              </v-btn>
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
import WorkExperienceForm from '~/components/WorkExperienceForm.vue'

export default {
  head() {
    return {
      title: '職務経歴書'
    }
  },
  components: { WorkExperienceForm },
  data: function() {
    return {
      modal: {
        graduation_year: false,
        birth_date: false
      }
    }
  },
  layout: 'default',
  computed: {
    lastname: {
      get() {
        return this.$store.state.resume.lastname
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'lastname',
          value: value
        })
      }
    },
    firstname: {
      get() {
        return this.$store.state.resume.firstname
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'firstname',
          value: value
        })
      }
    },
    email: {
      get() {
        return this.$store.state.resume.email
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'email',
          value: value
        })
      }
    },
    birth_date: {
      get() {
        return this.$store.state.resume.birth_date
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'birth_date',
          value: value
        })
      }
    },
    address: {
      get() {
        return this.$store.state.resume.address
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'address',
          value: value
        })
      }
    },
    tel: {
      get() {
        return this.$store.state.resume.tel
      },
      set(value) {
        this.$store.commit('resume/updateResume', { key: 'tel', value: value })
      }
    },
    summary: {
      get() {
        return this.$store.state.resume.summary
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'summary',
          value: value
        })
      }
    },
    qualification: {
      get() {
        return this.$store.state.resume.qualification
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'qualification',
          value: value
        })
      }
    },
    language: {
      get() {
        return this.$store.state.resume.language
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'language',
          value: value
        })
      }
    },
    os: {
      get() {
        return this.$store.state.resume.os
      },
      set(value) {
        this.$store.commit('resume/updateResume', { key: 'os', value: value })
      }
    },
    database: {
      get() {
        return this.$store.state.resume.database
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'database',
          value: value
        })
      }
    },
    framework: {
      get() {
        return this.$store.state.resume.framework
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'framework',
          value: value
        })
      }
    },
    tools: {
      get() {
        return this.$store.state.resume.tools
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'tools',
          value: value
        })
      }
    },
    education: {
      get() {
        return this.$store.state.resume.education
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'education',
          value: value
        })
      }
    },
    graduation_year: {
      get() {
        return this.$store.state.resume.graduation_year
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'graduation_year',
          value: value
        })
      }
    },
    work_experiences: {
      get() {
        return this.$store.state.resume.work_experiences
      },
      set(value) {
        this.$store.commit('resume/updateResume', {
          key: 'work_experiences',
          value: value
        })
      }
    }
  },
  methods: {
    closeModal(key) {
      this.modal[key] = false
    }
  }
}
</script>
