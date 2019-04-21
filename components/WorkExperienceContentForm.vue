<template>
  <v-card>
    <v-card-text> 
      <v-layout row wrap>
        <v-flex x12 md12 xl12 class="text-xs-right">
          <div @click="deleteContent()">
            <v-icon>
              clear
            </v-icon>
          </div>
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
              scrollable
              landscape 
              color="blue" 
              type="month"
              @input="updateContent('from', $event); closeFromModal()"
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
              scrollable 
              landscape 
              color="blue" 
              type="month"
              @input="updateContent('to', $event); closeToModal()"
            />
          </v-menu>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            :value="title"
            label="title" 
            @input="updateContent('title', $event)"
          />
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-textarea 
            :value="description"
            label="description" 
            @input="updateContent('description', $event)"
          />
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {
        return {}
      }
    },
    indexContent: {
      type: Number,
      default: () => {
        return 0
      }
    },
    indexParent: {
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
        return this.$store.state.resume.work_experiences[this.indexParent]
          .contents[this.indexContent].title
      }
    },
    description: {
      get() {
        return this.$store.state.resume.work_experiences[this.indexParent]
          .contents[this.indexContent].description
      }
    },
    from: {
      get() {
        return this.$store.state.resume.work_experiences[this.indexParent]
          .contents[this.indexContent].from
      }
    },
    to: {
      get() {
        return this.$store.state.resume.work_experiences[this.indexParent]
          .contents[this.indexContent].to
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
    updateContent(key, value) {
      this.$store.commit('resume/updateWorkExperienceContent', {
        indexParent: this.indexParent,
        indexContent: this.indexContent,
        key: key,
        value: value
      })
    },
    deleteContent() {
      this.$store.commit('resume/deleteContent', {
        indexParent: this.indexParent,
        indexContent: this.indexContent
      })
    }
  }
}
</script>
