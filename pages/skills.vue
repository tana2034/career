<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-form @submit.prevent>
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
                <v-subheader>
                  OS、ミドルウェア、ツール、クラウドコンピューティング等
                </v-subheader>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <draggable v-model="tools">
                    <v-chip 
                      v-for="(tag, index) in tools"
                      :key="index"
                      :index="index"
                      :tag="tag"
                      close
                      @input="$store.commit('skills/removeElement', { key: 'tools', index: index })"
                    >
                      {{ tag }}
                    </v-chip>
                  </draggable>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="tool"
                    box
                    hint="追加したい単語を入力してEnterを押してください"
                    required
                    @keydown.enter="addTool($event)"
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
import draggable from 'vuedraggable'
import Language from '@/components/Language.vue'
import Database from '@/components/Database.vue'
import Qualification from '@/components/Qualification.vue'
import Link from '@/components/Link.vue'

export default {
  head() {
    return {
      title: '職務経歴書'
    }
  },
  layout: 'default',
  components: { Language, draggable, Database, Qualification, Link },
  data: function() {
    return {
      tool: ''
    }
  },
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
    }
  },
  methods: {
    addTool(event) {
      if (event.keyCode !== 13) {
        return
      }
      this.$store.commit('skills/addTool', this.tool)
      this.tool = ''
    }
  }
}
</script>
