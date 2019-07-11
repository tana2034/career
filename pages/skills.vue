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
                <v-subheader>
                  言語
                </v-subheader>
              </v-layout>
              <v-layout row>
                <v-flex>
                  <v-btn color="lime lighten-3" @click="$store.commit('skills/addLanguage')">
                    言語を追加する
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <draggable v-model="languages">
                    <Language
                      v-for="(language, index) in languages" 
                      :key="index" 
                      :language="language"
                      :index="index"
                    />
                  </draggable>
                </v-flex>
              </v-layout>
              <v-divider />
              <v-layout row>
                <v-subheader>
                  DB
                </v-subheader>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn color="lime lighten-3" @click="$store.commit('skills/addDatabase')">
                    DBを追加する
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <draggable v-model="databases">
                    <Database
                      v-for="(database, index) in databases" 
                      :key="index" 
                      :database="database"
                      :index="index"
                    />
                  </draggable>
                </v-flex>
              </v-layout>
              <v-divider />
              <v-layout row>
                <v-subheader>
                  資格
                </v-subheader>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn color="lime lighten-3" @click="$store.commit('skills/addQualification')">
                    資格を追加する
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <draggable v-model="qualifications">
                    <Qualification
                      v-for="(qualification, index) in qualifications" 
                      :key="index" 
                      :qualification="qualification"
                      :index="index"
                    />
                  </draggable>
                </v-flex>
              </v-layout>
              <v-divider />
              <v-layout row>
                <v-subheader>
                  URL
                </v-subheader>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn color="lime lighten-3" @click="$store.commit('skills/addLink')">
                    URLを追加する
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <draggable v-model="links">
                    <Link
                      v-for="(value, index) in links" 
                      :key="index"
                      :index="index"
                    />
                  </draggable>
                </v-flex>
              </v-layout>
              <v-divider />
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
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Language from '@/components/Language.vue'
import Database from '@/components/Database.vue'
import Qualification from '@/components/Qualification.vue'
import Link from '@/components/Link.vue'
import draggable from 'vuedraggable'

export default {
  head() {
    return {
      title: '職務経歴書'
    }
  },
  layout: 'default',
  components: { Language, draggable, Database, Qualification, Link },
  computed: {
    languages: {
      get() {
        return this.$store.state.skills.languages
      },
      set(value) {
        this.$store.commit('skills/updateSkills', {
          key: 'languages',
          value: value
        })
      }
    },
    qualifications: {
      get() {
        return this.$store.state.skills.qualifications
      },
      set(value) {
        this.$store.commit('skills/updateSkills', {
          key: 'qualifications',
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
    databases: {
      get() {
        return this.$store.state.skills.databases
      },
      set(value) {
        this.$store.commit('skills/updateSkills', {
          key: 'databases',
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
    links: {
      get() {
        return this.$store.state.skills.links
      },
      set(value) {
        this.$store.commit('skills/updateSkills', {
          key: 'links',
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
