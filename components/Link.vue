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

<script>
export default {
  props: {
    index: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  computed: {
    link: {
      get() {
        return this.$store.state.skills.links[this.index]
      },
      set(value) {
        this.$store.commit('skills/updateLink', {
          index: this.index,
          value: value
        })
      }
    }
  }
}
</script>
