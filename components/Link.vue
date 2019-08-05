<template>
  <v-card>
    <v-card-actions>
      <v-spacer />
      <v-icon @click="$store.commit('skills/removeElement', {key: 'links', index: index})">
        clear
      </v-icon>
    </v-card-actions>
    <v-card-text>
      <v-text-field
        v-model="link"
        box
        label="URL"
        hint="githubアカウントやその他記載したいURLを追加してください"
      />
    </v-card-text>
  </v-card>    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Link extends Vue {
  @Prop(Number)
  index!: number

  get link() {
    return this.$store.state.skills.links[this.index]
  }

  set link(value: string) {
    this.$store.commit('skills/updateLink', {
      index: this.index,
      value: value
    })
  }
}
</script>
