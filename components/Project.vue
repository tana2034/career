<template>
  <v-card
    flat
    outlined
    elevation="3"
  >
    <v-layout>
      <v-flex xs11>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
                :value="title"
                label="プロジェクト概要" 
                class="project-title"
                outlined
                @input="updateProject('title', $event)"
              />
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 md6 xl6>
              <v-menu
                v-model="modalFrom"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{on}">
                  <v-text-field
                    :value="from"
                    label="期間（自）"
                    readonly
                    outlined
                    v-on="on"
                  />
                </template>
                <v-date-picker 
                  :value="from"
                  class="from"
                  scrollable
                  landscape 
                  color="indigo" 
                  type="month"
                  @input="updateProject('from', $event); closeFromModal()"
                />  
              </v-menu>
            </v-flex>     
            <v-flex xs12 md6 xl6>
              <v-menu
                v-model="modalTo"
                :close-on-content-click="false"
                :nudge-right="40"
                transsition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{on}">
                  <v-text-field
                    :value="to" 
                    label="期間（至）"
                    readonly
                    outlined
                    v-on="on"
                  />
                </template>
                <v-date-picker 
                  :value="to"
                  class="to"
                  scrollable 
                  landscape 
                  color="indigo" 
                  type="month"
                  @input="updateProject('to', $event); closeToModal()"
                />
              </v-menu>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <v-textarea 
                :value="description"
                label="プロジェクト詳細" 
                class="description"
                outlined
                @input="updateProject('description', $event)"
              />
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-flex>
      <v-flex xs1>
        <v-card-actions>
          <v-icon @click="deleteProject()">
            clear
          </v-icon>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Project extends Vue {
  modalFrom: boolean = false

  modalTo: boolean = false

  @Prop(Number)
  i!: number

  @Prop(Number)
  j!: number

  get title() {
    return this.$store.state.employment[this.i].projects[this.j].title
  }

  get description() {
    return this.$store.state.employment[this.i].projects[this.j].description
  }

  get from() {
    return this.$store.state.employment[this.i].projects[this.j].from
  }

  get to() {
    return this.$store.state.employment[this.i].projects[this.j].to
  }

  closeFromModal() {
    this.modalFrom = false
  }

  closeToModal() {
    this.modalTo = false
  }

  updateProject(key, value) {
    this.$store.commit('employment/updateProject', {
      i: this.i,
      j: this.j,
      key,
      value
    })
  }

  deleteProject() {
    this.$store.commit('employment/deleteProject', {
      i: this.i,
      j: this.j
    })
  }
}
</script>
