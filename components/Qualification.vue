<template>
  <v-card>     
    <v-card-actions>
      資格
      <v-spacer />
      <v-icon @click="deleteQualification()">
        clear
      </v-icon>
    </v-card-actions>
    <v-card-text>
      <v-layout row>
        <v-flex xs12 md4 xl4>
          <v-menu
            v-model="modal"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{on}">
              <v-text-field
                :value="date"
                label="取得年月"
                readonly
                box
                v-on="on"
              />
            </template>
            <v-date-picker 
              :value="date"
              scrollable 
              landscape 
              color="blue" 
              type="month"
              class="qualification-date"
              @input="updateDate($event); closeModal()"
            />  
          </v-menu>
        </v-flex>
        <v-flex xs12 md8 xl8>
          <v-text-field
            v-model="name"
            box
            label="資格"
            class="qualification-name"
            required
          />
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>


<script>
import { mutations } from '@/store/skills.js'

export default {
  props: {
    qualification: {
      type: Object,
      default: () => {
        return mutations.getInitializedQualification()
      }
    },
    index: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  data: function() {
    return {
      modal: false
    }
  },
  computed: {
    name: {
      get() {
        return this.qualification.name
      },
      set(value) {
        this.$store.commit('skills/updateQualification', {
          index: this.index,
          key: 'name',
          value: value
        })
      }
    },
    date: {
      get() {
        return this.qualification.date
      },
      set(value) {
        this.$store.commit('skills/updateQualification', {
          index: this.index,
          key: 'date',
          value: value
        })
      }
    }
  },
  methods: {
    closeModal() {
      this.modal = false
    },
    updateDate(value) {
      this.$store.commit('skills/updateQualification', {
        index: this.index,
        key: 'date',
        value: value
      })
    },
    deleteQualification() {
      this.$store.commit('skills/removeElement', {
        key: 'qualification',
        index: this.index
      })
    }
  }
}
</script>
