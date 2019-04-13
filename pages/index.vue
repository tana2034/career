<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-form>
            <v-container>
              <v-layout row>
                <v-flex xs12 md6 xl6>
                  <v-text-field
                    v-model="$store.state.resume.lastname"
                    :counter="10"
                    label="Last name"
                    required
                  />
                </v-flex>
                <v-flex xs12 md6 xl6>
                  <v-text-field
                    v-model="$store.state.resume.firstname"
                    :counter="10"
                    label="First name"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="$store.state.resume.email"
                    label="E-mail"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="$store.state.resume.address"
                    label="Address"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="$store.state.resume.tel"
                    label="Tel"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-textarea
                    v-model="$store.state.resume.summary"
                    label="Summary"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="$store.state.resume.qualification"
                    label="Qualification"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="$store.state.resume.language"
                    label="Language"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="$store.state.resume.os"
                    label="OS"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="$store.state.resume.database"
                    label="Database"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="$store.state.resume.framework"
                    label="Web Framework"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="$store.state.resume.tools"
                    label="Middleware and Tools"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-spacer />
              <v-layout row>
                <v-flex x12>
                  <div>これまでの経験</div>
                </v-flex>
              </v-layout>
              <WorkExperienceForm
                v-for="(work, index) in $store.state.resume.work_experiences" 
                :key="index" 
                :work="work"
                :index="index"
              />
              <v-btn color="success" @click="$store.commit('resume/addTerm')">
                期間を追加する
              </v-btn>
              <v-layout row justify-end>
                <v-flex xs12>
                  <v-card-actions>
                    <v-btn 
                      outline 
                      large 
                      nuxt
                      color="indigo" 
                      to="/preview"
                    >
                      Preview
                    </v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WorkExperienceForm from '~/components/WorkExperienceForm.vue'

export default {
  head() {
    return {
      title: '職務経歴書'
    }
  },
  layout: 'default',
  components: { WorkExperienceForm }
}
</script>
