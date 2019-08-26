<template>
  <v-card flat outlined elevation="2">
    <v-card-title primary-title>
      <p class="title">
        所属中・所属していた会社の情報
      </p>
      <v-spacer />
      <v-icon @click="deleteCompany()">
        clear
      </v-icon>
    </v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 md12 xl12>
          <v-text-field
            :value="company"
            name="company"
            label="会社名"
            class="company"
            outlined
            @input="updateCompany('company', $event)"
          />
        </v-flex>
        <v-flex xs6 md6 xl6>
          <v-menu
            v-model="modalFrom"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
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
              scrollable 
              landscape 
              color="indigo" 
              type="month"
              class="from"
              @input="updateCompany('from', $event); closeFromModal()"
            />  
          </v-menu>
        </v-flex>
        <v-flex xs6 md6 xl6>
          <v-menu
            v-model="modalTo"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{on}">
              <v-text-field
                :value="to"
                label="期間（至）"
                readonly
                outlined
                @input="updateCompany('to', $event)"
                v-on="on"
              />
            </template>
            <v-date-picker 
              :value="to"
              scrollable
              landscape 
              color="indigo" 
              type="month"
              class="to"
              @input="updateCompany('to', $event); closeToModal()"
            />
          </v-menu>
        </v-flex>
        <v-flex xs12 md12 xl12>
          <v-text-field
            :value="companyProfile"
            name="company profile"
            label="会社の事業・概要など"
            class="companyProfile"
            outlined
            @input="updateCompany('companyProfile', $event)"
          />
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md12 xl12>
          <v-text-field
            :value="role"
            name="role"
            label="職務"
            class="role"
            outlined
            @input="updateCompany('role', $event)"
          />
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md12 xl12>
          <v-subheader>プロジェクト、案件</v-subheader>
        </v-flex>
        <v-flex xs12 md12 xl12>
          <draggable v-model="projects">
            <Project
              v-for="(project, j) in projects" 
              :key="j" 
              :project="project" 
              :j="j"
              :i="index"
            />
          </draggable>
        </v-flex>
        <v-flex xs12 md12 xl12>
          <v-btn color="amber lighten-3" @click="$store.commit('employment/addProject', index)">
            <v-icon>add</v-icon>プロジェクトを追加する
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import draggable from 'vuedraggable'
import { Component, Vue, Prop } from 'vue-property-decorator'
import Project from '@/components/Project.vue'

@Component({
  components: { Project, draggable }
})
export default class Company extends Vue {
  @Prop({ default: 0 })
  index!: number

  modalFrom: boolean = false

  modalTo: boolean = false

  get projects() {
    return this.$store.state.employment[this.index].projects
  }

  set projects(value) {
    this.$store.commit('employment/updateProjects', {
      index: this.index,
      value
    })
  }

  get company(): string {
    return this.$store.state.employment[this.index].company
  }

  get companyProfile(): string {
    return this.$store.state.employment[this.index].companyProfile
  }

  get from(): string {
    return this.$store.state.employment[this.index].from
  }

  get to(): string {
    return this.$store.state.employment[this.index].to
  }

  get role(): string {
    return this.$store.state.employment[this.index].role
  }

  closeFromModal(): void {
    this.modalFrom = false
  }

  closeToModal(): void {
    this.modalTo = false
  }

  updateCompany(key, value): void {
    this.$store.commit('employment/updateCompany', {
      index: this.index,
      key,
      value
    })
  }

  deleteCompany(): void {
    this.$store.commit('employment/deleteCompany', {
      index: this.index
    })
  }
}
</script>
