<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-form>
            <v-container>
              <v-layout row>
                <v-flex x12>
                  <div>スキル</div>
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
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="cloud_computing"
                    label="Cloud Computing"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="github"
                    label="Github Account"
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
  layout: 'default',
  computed: {
    qualification: {
      get() {
        return this.$store.state.skills.qualification
      },
      set(value) {
        this.$store.commit('skills/updateSkills', {
          key: 'qualification',
          value: value
        })
      }
    },
    language: {
      get() {
        return this.$store.state.skills.language
      },
      set(value) {
        this.$store.commit('skills/updateSkills', {
          key: 'language',
          value: value
        })
      }
    },
    os: {
      get() {
        return this.$store.state.skills.os
      },
      set(value) {
        this.$store.commit('skills/updateSkills', { key: 'os', value: value })
      }
    },
    database: {
      get() {
        return this.$store.state.skills.database
      },
      set(value) {
        this.$store.commit('skills/updateSkills', {
          key: 'database',
          value: value
        })
      }
    },
    framework: {
      get() {
        return this.$store.state.skills.framework
      },
      set(value) {
        this.$store.commit('skills/updateSkills', {
          key: 'framework',
          value: value
        })
      }
    },
    tools: {
      get() {
        return this.$store.state.skills.tools
      },
      set(value) {
        this.$store.commit('skills/updateSkills', {
          key: 'tools',
          value: value
        })
      }
    },
    cloud_computing: {
      get() {
        return this.$store.state.skills.cloud_computing
      },
      set(value) {
        this.$store.commit('skills/updateSkills', {
          key: 'cloud_computing',
          value: value
        })
      }
    },
    github: {
      get() {
        return this.$store.state.skills.github
      },
      set(value) {
        this.$store.commit('skills/updateSkills', {
          key: 'github',
          value: value
        })
      }
    },
    education: {
      get() {
        return this.$store.state.skills.education
      },
      set(value) {
        this.$store.commit('skills/updateSkills', {
          key: 'education',
          value: value
        })
      }
    }
  }
}
</script>
