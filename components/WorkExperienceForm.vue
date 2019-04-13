<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md4 xl4 d-flex>
        <v-card color="blue lighten-5">
          <v-card-text>
            <v-text-field
              v-model="work.company"
              name="company"
              label="company"
            />
            <v-menu
              v-model="modal.from"
              :close-on-content-click="false"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              full-width
              min-width="290px"
            >
              <template v-slot:activator="{on}">
                <v-text-field
                  v-model="work.from"
                  label="from"
                  readonly
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="work.from" scrollable landscape color="blue" @input="closeFromModal" />  
            </v-menu>
            <v-menu
              v-model="modal.to"
              :close-on-content-click="false"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              full-width
              min-width="290px"
            >
              <template v-slot:activator="{on}">
                <v-text-field
                  v-model="work.to"
                  label="to"
                  readonly
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="work.to" scrollable landscape color="blue" @input="closeToModal" />
            </v-menu>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md8 xl8>
        <WorkExperienceContentForm
          v-for="(content, indexcontent) in work.contents" 
          :key="indexcontent" 
          :content="content" 
          :indexcontent="indexcontent"
        />
        <v-btn color="success" @click="$store.commit('resume/addContent', index)">
          コンテンツを追加する
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WorkExperienceContentForm from '~/components/WorkExperienceContentForm.vue'

export default {
  components: { WorkExperienceContentForm },
  props: {
    work: {
      type: Object,
      default: () => {
        return ''
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
      modal: {
        from: false,
        to: false
      }
    }
  },
  methods: {
    closeFromModal() {
      this.modal.from = false
    },
    closeToModal() {
      this.modal.to = false
    }
  }
}
</script>
