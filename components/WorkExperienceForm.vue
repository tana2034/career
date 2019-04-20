<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md4 xl4>
        <v-card color="blue lighten-5">
          <v-card-text>
            <v-text-field
              :value="company"
              name="company"
              label="company"
              @input="updateWorkExperience('company', $event)"
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
                  :value="from"
                  label="from"
                  readonly
                  v-on="on"
                />
              </template>
              <v-date-picker 
                :value="from"
                scrollable 
                landscape 
                color="blue" 
                @input="updateWorkExperience('from', $event); closeFromModal()"
              />  
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
                  :value="to"
                  label="to"
                  readonly
                  @input="updateWorkExperience('to', $event)"
                  v-on="on"
                />
              </template>
              <v-date-picker 
                :value="to"
                scrollable
                landscape 
                color="blue" 
                @input="updateWorkExperience('to', $event); closeToModal()"
              />
            </v-menu>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md8 xl8>
        <WorkExperienceContentForm
          v-for="(content, indexcontent) in work.contents" 
          :key="indexcontent" 
          :content="content" 
          :index-content="indexcontent"
          :index-parent="index"
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
  computed: {
    company: {
      get() {
        return this.$store.state.resume.work_experiences[this.index].company
      }
    },
    from: {
      get() {
        return this.$store.state.resume.work_experiences[this.index].from
      }
    },
    to: {
      get() {
        return this.$store.state.resume.work_experiences[this.index].to
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
    updateWorkExperience(key, value) {
      this.$store.commit('resume/updateWorkExperience', {
        index: this.index,
        key: key,
        value: value
      })
    }
  }
}
</script>
