<template>
  <v-card>     
    <v-card-actions>
      <v-spacer />
      <v-icon @click="deleteDatabase()">
        clear
      </v-icon>
    </v-card-actions>
    <v-card-text>
      <v-text-field
        v-model="name"
        box
        label="Database"
        class="database-name"
        required
      />
      <v-textarea 
        v-model="description" 
        box 
        label="description" 
        class="database-description" 
        hint="使ったことのあるバージョン、使用年数等を記載してください。" 
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Database extends Vue {
  @Prop(Number)
  index!: number

  get name(): string {
    return this.$store.state.skills.databases[this.index].name
  }

  set name(value: string) {
    this.$store.commit('skills/updateDatabase', {
      index: this.index,
      key: 'name',
      value: value
    })
  }

  get description(): string {
    return this.$store.state.skills.databases[this.index].description
  }

  set description(value: string) {
    this.$store.commit('skills/updateDatabase', {
      index: this.index,
      key: 'description',
      value: value
    })
  }

  deleteDatabase() {
    this.$store.commit('skills/removeElement', {
      key: 'databases',
      index: this.index
    })
  }
}
</script>
