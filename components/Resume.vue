<template>
  <v-container>
    <v-layout row wrap mb-4>
      <v-flex sm12 lg12>
        <h1 class="display-2">
          職務経歴書
        </h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap mb-3>
      <v-flex sm12 lg12>
        <div>
          <h2 class="display-1">
            <span class="lastname">
              {{ $store.state.details.lastname }}
            </span>
            <span class="firstname">
              {{ $store.state.details.firstname }}
            </span>
          </h2>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-3>
      <div class="headline">
        プロフィール
      </div>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        email
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p class="email">
          {{ $store.state.details.email }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        生年月日
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p class="birth_date">
          {{ $store.state.details.birth_date }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        住所
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p class="address">
          {{ $store.state.details.address }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        電話番号
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p class="tel">
          {{ $store.state.details.tel }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        自己紹介
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p class="summary">
          {{ $store.state.details.summary }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        自己PR
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p class="public_relations">
          {{ $store.state.details.public_relations }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-3>
      <div class="headline">
        スキル
      </div>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        資格
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.skills.qualification }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        言語
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <v-layout 
          v-for="(language, index) in this.$store.state.skills.languages" 
          :key="index" 
          :language="language"
          :index="index"
          row
          wrap
        >
          <v-flex xs12 sm2 xl2>
            <p>
              {{ language.name }}
            </p>
          </v-flex>
          <v-flex xs12 sm8 xl8>
            <p> {{ language.description }} </p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        OS
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.skills.os }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        データベース
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.skills.database }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        ミドルウェアやツール
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.skills.tools }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        クラウドサービス
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.skills.cloud_computing }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        GitHub
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.skills.github }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-3>
      <div class="headline">
        最終学歴
      </div>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md12 xl12 mb-1 mt-3>
        <div>
          <span>{{ $store.state.details.graduation_year }}</span>
          <h4 class="subheading">
            {{ $store.state.details.education }}
          </h4>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-3>
      <div class="headline">
        職務経歴
      </div>
    </v-layout>
    <WorkExperienceTable
      v-for="(work, index) in $store.state.experiences"
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
