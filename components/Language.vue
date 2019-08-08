<template>
  <v-card>     
    <v-card-actions>
      <v-spacer />
      <v-icon @click="deleteLanguage()">
        clear
      </v-icon>
    </v-card-actions>
    <v-card-text>
      <v-text-field
        v-model="name"
        label="Language"
        class="language-name"
        required
      />
      <v-textarea 
        v-model="description" 
        label="description" 
        class="language-description" 
        hint="使ったことのあるバージョン、実務経験、フレームワーク等を記載してください。" 
      />
    </v-card-text>
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
      value: value
    })
  }

  get description(): string {
    return this.$store.state.skills.languages[this.index].description
  }

  set description(value: string) {
    this.$store.commit('skills/updateLanguage', {
      index: this.index,
      key: 'description',
      value: value
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
