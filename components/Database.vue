<template>
  <v-card flat outlined elevation="2">
    <v-layout row wrap>
      <v-flex xs11>
        <v-card-text>
          <v-text-field
            v-model="name"
            label="DBの種類"
            class="database-name"
            outlined
            required
          />
          <v-textarea 
            v-model="description" 
            auto-grow
            label="詳細" 
            class="database-description" 
            hint="使ったことのあるバージョン、使用年数等を記載してください。Markdown記法も可能です。" 
            outlined
          />
        </v-card-text>
      </v-flex>
      <v-flex xs1>
        <v-card-actions>
          <v-icon @click="deleteDatabase()">
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
      value
    })
  }

  get description(): string {
    return this.$store.state.skills.databases[this.index].description
  }

  set description(value: string) {
    this.$store.commit('skills/updateDatabase', {
      index: this.index,
      key: 'description',
      value
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
