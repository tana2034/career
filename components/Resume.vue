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
            <span>
              {{ $store.state.resume.lastname }}
            </span>
            <span>
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
        <p>
          {{ $store.state.resume.email }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        生年月日
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.resume.birth_date }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        住所
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.resume.address }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        電話番号
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.resume.tel }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        プロフィール
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.resume.summary }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        資格
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.resume.qualification }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        言語
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.resume.language }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        OS
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.resume.os }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        データベース
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.resume.database }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        フレームワーク
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.resume.framework }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        ミドルウェアやツール
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p>
          {{ $store.state.resume.tools }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-3>
      <div>
        <h3 class="subheading">
          学歴
        </h3>
      </div>
    </v-layout>
    <v-layout row wrap>
          <v-flex xs12 md12 xl12 mb-1 mt-3>
      <v-subheader light>
        <div>
          <span>{{ $store.state.resume.graduation_year }}</span><h4>{{ $store.state.resume.education }}</h4>
        </div>
      </v-subheader>
          </v-flex>
    </v-layout>
    <v-layout row wrap mt-3>
      <div>
        <h3 class="subheading">
          職務経歴
        </h3>
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
