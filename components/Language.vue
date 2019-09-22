<template>
  <v-card flat outlined elevation="2">
    <v-layout row wrap>
      <v-flex xs11>
        <v-card-text>
          <v-text-field
            v-model="name"
            label="言語"
            class="language-name"
            outlined
            required
            clearable
          />
          <v-textarea 
            v-model="description" 
            auto-grow
            label="詳細" 
            class="language-description" 
            outlined
            hint="使ったことのあるバージョン、実務経験、フレームワーク等を記載してください。Markdown記法も可能です。" 
          />
        </v-card-text>
      </v-flex>
      <v-flex xs1>
        <v-card-actions>
          <v-icon @click="deleteLanguage()">
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
export default class Language extends Vue {
  @Prop(Number)
  index!: number

  get name(): string {
    return this.$store.state.skills.languages[this.index].name
  }

  set name(value: string) {
    this.$store.commit('skills/updateLanguage', {
      index: this.index,
      key: 'name',
      value
    })
  }

  get description(): string {
    return this.$store.state.skills.languages[this.index].description
  }

  set description(value: string) {
    this.$store.commit('skills/updateLanguage', {
      index: this.index,
      key: 'description',
      value
    })
  }

  deleteLanguage(): void {
    this.$store.commit('skills/removeElement', {
      key: 'languages',
      index: this.index
    })
  }
}
</script>
