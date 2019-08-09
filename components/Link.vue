<template>
  <v-card flat outlined elevation="8">
    <v-layout row wrap>
      <v-flex xs11>
        <v-card-text>
          <v-text-field
            v-model="link"
            class="link"
            label="URL"
            hint="githubアカウントやその他記載したいURLを追加してください"
            outlined
          />
        </v-card-text>
      </v-flex>
      <v-flex xs1> 
        <v-card-actions>
          <v-icon @click="$store.commit('skills/removeElement', {key: 'links', index: index})">
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
