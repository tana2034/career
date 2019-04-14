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
                  <div>これまでの経験</div>
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
  layout: 'default',
  components: { WorkExperienceForm },
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
  }
}
</script>
