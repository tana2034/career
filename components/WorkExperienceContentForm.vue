<template>
  <v-card>
    <v-card-text>
      <v-layout row wrap>
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
                v-model="content.from"
                label="from"
                readonly
                v-on="on"
              />
            </template>
            <v-date-picker v-model="content.from" scrollable landscape color="blue" @input="closeFromModal" />  
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
                v-model="content.to"
                label="to"
                readonly
                v-on="on"
              />
            </template>
            <v-date-picker v-model="content.to" scrollable landscape color="blue" @input="closeToModal" />
          </v-menu>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            v-model="content.title"
            label="title"
          />
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-textarea 
            v-model="content.description"
            label="description"
          />
        </v-flex>
      </v-layout>
    </v-card-text>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {
        return ''
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
