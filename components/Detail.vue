<template>
  <v-container fluid grid-list-lg class="grey lighten-4">
    <v-form>
      <v-layout row>
        <v-flex xs12 sm6 md6 xl6>
          <v-text-field
            v-model="lastname"
            :counter="10"
            label="姓"
            prepend-icon="person"
            required
            outlined
            class="lastname"
            clearable
          />
        </v-flex>
        <v-flex xs12 sm6 md6 xl6>
          <v-text-field
            v-model="firstname"
            :counter="10"
            label="名"
            class="firstname"
            outlined
            required
            clearable
          />
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-text-field
            v-model="email"
            label="メールアドレス"
            prepend-icon="email"
            class="email"
            outlined
            required
            clearable
          />
        </v-flex>
      </v-layout>
      <v-layout row class="test">
        <v-flex xs12>
          <v-menu
            ref="modalBirthDate"
            v-model="modalBirthDate"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            full-width
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{on}">
              <v-text-field
                v-model="birthDate"
                name="birthDate"
                readonly
                label="生年月日"
                prepend-icon="event"
                outlined
                v-on="on"
              />
            </template>
            <v-date-picker
              ref="picker"
              v-model="birthDate" 
              class="birthDate"
              color="indigo"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @input="closeModal('modalBirthDate')"
            />
          </v-menu>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-text-field
            v-model="address"
            label="住所"
            prepend-icon="map"
            class="address"
            outlined
            required
            clearable
          />
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-text-field
            v-model="tel"
            label="電話番号"
            prepend-icon="phone"
            class="tel"
            outlined
            required
            clearable
          />
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-textarea
            v-model="summary"
            auto-grow
            label="略歴"
            class="summary"
            hint="Markdown記法も可能です。"
            outlined
            required
          />
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-textarea
            v-model="publicRelations"
            auto-grow
            label="自己PR"
            class="publicRelations"
            hint="Markdown記法も可能です。"
            outlined
            required
          />
        </v-flex>
      </v-layout>
      <v-spacer />
      <v-layout row>
        <v-flex x12>
          <div>最終学歴</div>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-menu
            v-model="modalGraduationYear"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{on}">
              <v-text-field
                v-model="graduationYear"
                name="graduationYear"
                readonly
                label="卒業年度"
                outlined
                v-on="on"
              />
            </template>
            <v-date-picker 
              v-model="graduationYear" 
              landscape 
              type="month"
              class="graduationYear"
              color="blue"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @input="closeModal('modalGraduationYear')"
            />
          </v-menu>
          <v-text-field
            v-model="education"
            class="education"
            name="education" 
            label="所属していた学校名・学部・学科"
            outlined
            clearable
          />
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  watch: {
    modalBirthDate(val) {
      val &&
        setTimeout(() => ((this.$refs.picker as any).activePicker = 'YEAR'))
    }
  }
})
export default class Detail extends Vue {
  modalBirthDate: boolean = false

  modalGraduationYear: boolean = false

  get lastname(): string {
    return this.$store.state.details.lastname
  }

  set lastname(value: string) {
    this.$store.commit('details/updateDetail', {
      key: 'lastname',
      value
    })
  }

  get firstname(): string {
    return this.$store.state.details.firstname
  }

  set firstname(value: string) {
    this.$store.commit('details/updateDetail', {
      key: 'firstname',
      value
    })
  }

  get email(): string {
    return this.$store.state.details.email
  }

  set email(value: string) {
    this.$store.commit('details/updateDetail', {
      key: 'email',
      value
    })
  }

  get birthDate(): string {
    return this.$store.state.details.birthDate
  }

  set birthDate(value: string) {
    this.$store.commit('details/updateDetail', {
      key: 'birthDate',
      value
    })
  }

  get address(): string {
    return this.$store.state.details.address
  }

  set address(value: string) {
    this.$store.commit('details/updateDetail', {
      key: 'address',
      value
    })
  }

  get tel(): string {
    return this.$store.state.details.tel
  }

  set tel(value: string) {
    this.$store.commit('details/updateDetail', {
      key: 'tel',
      value
    })
  }

  get summary(): string {
    return this.$store.state.details.summary
  }

  set summary(value: string) {
    this.$store.commit('details/updateDetail', {
      key: 'summary',
      value
    })
  }

  get publicRelations(): string {
    return this.$store.state.details.publicRelations
  }

  set publicRelations(value: string) {
    this.$store.commit('details/updateDetail', {
      key: 'publicRelations',
      value
    })
  }

  get education(): string {
    return this.$store.state.details.education
  }

  set education(value: string) {
    this.$store.commit('details/updateDetail', {
      key: 'education',
      value
    })
  }

  get graduationYear(): string {
    return this.$store.state.details.graduationYear
  }

  set graduationYear(value: string) {
    this.$store.commit('details/updateDetail', {
      key: 'graduationYear',
      value
    })
  }

  closeModal(key: string) {
    this[key] = false
  }
}
</script>
