<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs6 md6 xl6>
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
            type="month"
            class="from"
            @input="updateWorkExperience('from', $event); closeFromModal()"
          />  
        </v-menu>
      </v-flex>
      <v-flex xs6 md6 xl6>
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
            type="month"
            class="to"
            @input="updateWorkExperience('to', $event); closeToModal()"
          />
        </v-menu>
      </v-flex>
      <v-flex xs12 md12 xl12>
        <v-text-field
          :value="company"
          name="company"
          label="company"
          class="company"
          @input="updateWorkExperience('company', $event)"
        />
      </v-flex>
      <v-flex xs12 md12 xl12>
        <v-text-field
          :value="company_profile"
          name="company profile"
          label="company profile"
          class="company_profile"
          @input="updateWorkExperience('company_profile', $event)"
        />
      </v-flex>
      <v-flex xs12 md12 xl12>
        <draggable v-model="contents">
          <WorkExperienceContentForm
            v-for="(content, j) in contents" 
            :key="j" 
            :content="content" 
            :j="j"
            :i="index"
          />
        </draggable>
        <v-btn color="lime lighten-3" @click="$store.commit('experiences/addContent', index)">
          コンテンツを追加する
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable'
import WorkExperienceContentForm from '~/components/WorkExperienceContentForm.vue'
import { state } from '@/store/experiences.js'

export default {
  components: { WorkExperienceContentForm, draggable },
  props: {
    work: {
      type: Object,
      default: () => {
        return state()[0]
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
    contents: {
      get() {
        return this.$store.state.experiences[this.index].contents
      },
      set(value) {
        return this.$store.commit('experiences/updateWorkExperienceContents', {
          index: this.index,
          value: value
        })
      }
    },
    company: {
      get() {
        return this.$store.state.experiences[this.index].company
      }
    },
    company_profile: {
      get() {
        return this.$store.state.experiences[this.index].company_profile
      }
    },
    from: {
      get() {
        return this.$store.state.experiences[this.index].from
      }
    },
    to: {
      get() {
        return this.$store.state.experiences[this.index].to
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
      this.$store.commit('experiences/updateWorkExperience', {
        index: this.index,
        key: key,
        value: value
      })
    }
  }
}
</script>
