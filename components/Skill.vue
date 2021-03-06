<template>
  <v-container fluid grid-list-lg class="grey lighten-4">
    <v-form @submit.prevent>
      <v-layout row>
        <v-subheader>
          言語
        </v-subheader>
      </v-layout>
      <v-layout row>
        <v-flex>
          <v-btn color="amber lighten-3" @click="$store.commit('skills/addLanguage')">
            <v-icon>add</v-icon>言語を追加する
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
          <v-btn color="amber lighten-3" @click="$store.commit('skills/addDatabase')">
            <v-icon>add</v-icon>DBを追加する
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
          <v-btn color="amber lighten-3" @click="$store.commit('skills/addQualification')">
            <v-icon>add</v-icon>資格を追加する
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
          <v-btn color="amber lighten-3" @click="$store.commit('skills/addLink')">
            <v-icon>add</v-icon>URLを追加する
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
          <v-chip-group
            column
            multi-line
          >
            <draggable v-model="tools">
              <v-chip 
                v-for="(toolname, index) in tools"
                :key="index"
                :index="index"
                :toolname="toolname"
                close
                @update:active="$store.commit('skills/removeElement', { key: 'tools', index: index })"
              >
                {{ toolname }}
              </v-chip>
            </draggable>
          </v-chip-group>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-text-field
            v-model="tool"
            outlined
            hint="追加したい単語を入力してEnterを押してください"
            required
            @keydown.enter="addTool($event)"
          />
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import draggable from 'vuedraggable'
import { Component, Vue } from 'vue-property-decorator'
import Language from '@/components/Language.vue'
import Database from '@/components/Database.vue'
import Qualification from '@/components/Qualification.vue'
import Link from '@/components/Link.vue'

@Component({
  components: { Language, draggable, Database, Qualification, Link }
})
export default class Skill extends Vue {
  tool = ''

  get languages() {
    return this.$store.state.skills.languages
  }

  set languages(value: string) {
    this.$store.commit('skills/updateSkills', {
      key: 'languages',
      value
    })
  }

  get qualifications() {
    return this.$store.state.skills.qualifications
  }

  set qualifications(value: string) {
    this.$store.commit('skills/updateSkills', {
      key: 'qualifications',
      value
    })
  }

  get databases() {
    return this.$store.state.skills.databases
  }

  set databases(value: string) {
    this.$store.commit('skills/updateSkills', {
      key: 'databases',
      value
    })
  }

  get tools() {
    return this.$store.state.skills.tools
  }

  set tools(value: string) {
    this.$store.commit('skills/updateSkills', {
      key: 'tools',
      value
    })
  }

  get links() {
    return this.$store.state.skills.links
  }

  set links(value) {
    this.$store.commit('skills/updateSkills', {
      key: 'links',
      value
    })
  }

  addTool(event) {
    if (event.keyCode !== 13) {
      return
    }
    this.$store.commit('skills/addTool', this.tool)
    this.tool = ''
  }
}
</script>
