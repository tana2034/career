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
        DB
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <v-layout 
          v-for="(database, index) in this.$store.state.skills.databases" 
          :key="index" 
          :database="database"
          :index="index"
          row
          wrap
        >
          <v-flex xs12 sm2 xl2>
            <p>
              {{ database.name }}
            </p>
          </v-flex>
          <v-flex xs12 sm8 xl8>
            <p> {{ database.description }} </p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        資格
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <v-layout 
          v-for="(qualification, index) in this.$store.state.skills.qualifications" 
          :key="index" 
          :qualification="qualification"
          :index="index"
          row
          wrap
        >
          <p> {{ qualification.name }} ({{ qualification.date }} 取得)</p>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        URL
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p
          v-for="(link, index) in this.$store.state.skills.links"
          :key="index"
          :link="link"
        >
          {{ link }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 sm2 lg2>
        ミドルウェアやツール
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <v-chip
          v-for="(tool, index) in this.$store.state.skills.tools"
          :key="index"
          :tool="tool"
        >
          {{ tool }}
        </v-chip>
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
    <EmploymentTable
      v-for="(work, index) in $store.state.employment"
      :key="index"
      :work="work"
      :index="index"
    />
  </v-container>
</template>

<script>
import EmploymentTable from '~/components/EmploymentTable.vue'

export default {
  components: { EmploymentTable }
}
</script>
