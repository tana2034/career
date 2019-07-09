<template>
  <v-card>
    <v-card-text> 
      <v-layout row wrap>
        <v-flex x12 md12 xl12 class="text-xs-right">
          <v-icon @click="deleteProject()">
            clear
          </v-icon>
        </v-flex>
        <v-flex xs12 md6 xl6>
          <v-menu
            v-model="modal.from"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{on}">
              <v-text-field
                :value="from"
                label="from"
                readonly
                v-on="on"
              />
            </template>
            <v-date-picker 
              :value="from"
              class="from"
              scrollable
              landscape 
              color="blue" 
              type="month"
              @input="updateProject('from', $event); closeFromModal()"
            />  
          </v-menu>
        </v-flex>     
        <v-flex xs12 md6 xl6>
          <v-menu
            v-model="modal.to"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{on}">
              <v-text-field
                :value="to" 
                label="to"
                readonly
                v-on="on"
              />
            </template>
            <v-date-picker 
              :value="to"
              class="to"
              scrollable 
              landscape 
              color="blue" 
              type="month"
              @input="updateProject('to', $event); closeToModal()"
            />
          </v-menu>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            :value="title"
            label="title" 
            class="title"
            @input="updateProject('title', $event)"
          />
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-textarea 
            :value="description"
            label="description" 
            class="description"
            @input="updateProject('description', $event)"
          />
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import { state } from '@/store/employment.js'

export default {
  props: {
    project: {
      type: Object,
      default: () => {
        return state().projects
      }
    },
    j: {
      type: Number,
      default: () => {
        return 0
      }
    },
    i: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  data: function() {
    return {
      modal: {
        from: false,
        to: false
      }
    }
  },
  computed: {
    title: {
      get() {
        return this.$store.state.employment[this.i].projects[this.j].title
      }
    },
    description: {
      get() {
        return this.$store.state.employment[this.i].projects[this.j].description
      }
    },
    from: {
      get() {
        return this.$store.state.employment[this.i].projects[this.j].from
      }
    },
    to: {
      get() {
        return this.$store.state.employment[this.i].projects[this.j].to
      }
    }
  },
  methods: {
    closeFromModal() {
      this.modal.from = false
    },
    closeToModal() {
      this.modal.to = false
    },
    updateProject(key, value) {
      this.$store.commit('employment/updateProject', {
        i: this.i,
        j: this.j,
        key: key,
        value: value
      })
    },
    deleteProject() {
      this.$store.commit('employment/deleteProject', {
        i: this.i,
        j: this.j
      })
    }
  }
}
</script>
