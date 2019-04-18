<template>
  <v-container>
    <v-layout row wrap mb-4>
      <v-flex sm12 lg12>
        <h1 class="headline">
          職務経歴書
        </h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap mb-3>
      <v-flex sm12 lg12>
        <div>
        <h2 class="title">
          <span id="lastname">
            {{ $store.state.resume.lastname }}
          </span>
          <span id="firstname">
            {{ $store.state.resume.firstname }}
          </span>
        </h2>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        email
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p id="email">
          {{ $store.state.resume.email }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        住所
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p id="address">
          {{ $store.state.resume.address }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        電話番号
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p id="tel">
          {{ $store.state.resume.tel }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        プロフィール
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p id="summary">
          {{ $store.state.resume.summary }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        資格
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p id="qualification">
          {{ $store.state.resume.qualification }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        言語
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p id="language">
          {{ $store.state.resume.language }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        OS
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p id="os">
          {{ $store.state.resume.os }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        データベース
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p id="database">
          {{ $store.state.resume.database }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        フレームワーク
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p id="framework">
          {{ $store.state.resume.framework }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        ミドルウェアやツール
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p id="tools">
          {{ $store.state.resume.tools }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-3>
      <div>
        <h3 class="subheading">職務経歴</h3>
      </div>
    </v-layout>
    <WorkExperienceTable
      v-for="(work, index) in $store.state.resume.work_experiences"
      :key="index"
      :work="work"
      :index="index"
    />
  </v-container>
</template>

<script>
import WorkExperienceTable from '~/components/WorkExperienceTable.vue'

export default {
  components: { WorkExperienceTable }
}
</script>
