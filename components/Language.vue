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
        box
        label="Language"
        class="language-name"
        required
      />
      <v-textarea 
        v-model="description" 
        box 
        label="description" 
        class="language-description" 
        hint="使ったことのあるバージョン、実務経験、フレームワーク等を記載してください。" 
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { mutations } from '@/store/skills.ts'

export default {
  props: {
    language: {
      type: Object,
      default: () => {
        return mutations.getInitializedLanguage()
      }
    },
    index: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  computed: {
    name: {
      get() {
        return this.language.name
      },
      set(value) {
        this.$store.commit('skills/updateLanguage', {
          index: this.index,
          key: 'name',
          value: value
        })
      }
    },
    description: {
      get() {
        return this.language.description
      },
      set(value) {
        this.$store.commit('skills/updateLanguage', {
          index: this.index,
          key: 'description',
          value: value
        })
      }
    }
  },
  methods: {
    deleteLanguage() {
      this.$store.commit('skills/removeElement', {
        key: 'languages',
        index: this.index
      })
    }
  }
}
</script>
