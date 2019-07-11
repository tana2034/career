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

<script>
import { mutations } from '@/store/skills.js'

export default {
  props: {
    database: {
      type: Object,
      default: () => {
        return mutations.getInitializedDatabase()
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
        return this.database.name
      },
      set(value) {
        this.$store.commit('skills/updateDatabase', {
          index: this.index,
          key: 'name',
          value: value
        })
      }
    },
    description: {
      get() {
        return this.database.description
      },
      set(value) {
        this.$store.commit('skills/updateDatabase', {
          index: this.index,
          key: 'description',
          value: value
        })
      }
    }
  },
  methods: {
    deleteDatabase() {
      this.$store.commit('skills/removeElement', {
        key: 'databases',
        index: this.index
      })
    }
  }
}
</script>
