<template>
  <v-card>     
    <v-card-actions>
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
                box
                :value="date"
                label="取得年月"
                readonly
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


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Qualification extends Vue {
  @Prop(Number)
  index!: number

  modal: boolean = false

  get name() {
    return this.$store.state.skills.qualifications[this.index].name
  }

  set name(value) {
    this.$store.commit('skills/updateQualification', {
      index: this.index,
      key: 'name',
      value: value
    })
  }

  get date() {
    return this.$store.state.skills.qualifications[this.index].date
  }

  set date(value) {
    this.$store.commit('skills/updateQualification', {
      index: this.index,
      key: 'date',
      value: value
    })
  }

  closeModal() {
    this.modal = false
  }

  updateDate(value) {
    this.$store.commit('skills/updateQualification', {
      index: this.index,
      key: 'date',
      value: value
    })
  }

  deleteQualification() {
    this.$store.commit('skills/removeElement', {
      key: 'qualifications',
      index: this.index
    })
  }
}
</script>
