<template>
  <v-container>
    <v-layout row wrap mb-4>
      <v-flex sm12 lg12>
        <h1 class="display-2 font-weight-light">
          職務経歴書
        </h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap mb-3>
      <v-flex sm12 lg12>
        <h2 class="display-1">
          <span class="lastname">
            {{ $store.state.details.lastname }}
          </span>
          <span class="firstname">
            {{ $store.state.details.firstname }}
          </span>
        </h2>
      </v-flex>
    </v-layout>
    <v-layout v-if="show($store.state.details.email)" wrap row>
      <v-flex xs2 sm2 lg2 class="subtitle-1">
        <p>
          メールアドレス
        </p>
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p class="email body-1">
          {{ $store.state.details.email }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout v-if="show($store.state.details.birthDate)" row wrap>
      <v-flex xs2 sm2 lg2 class="subtitle-1">
        生年月日
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p class="birthDate">
          {{ $store.state.details.birthDate }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout v-if="show($store.state.details.address)" row wrap>
      <v-flex xs2 sm2 lg2 class="subtitle-1">
        住所
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p class="address">
          {{ $store.state.details.address }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout v-if="show($store.state.details.tel)" row wrap>
      <v-flex xs2 sm2 lg2 class="subtitle-1">
        電話番号
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p class="tel">
          {{ $store.state.details.tel }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout v-if="show($store.state.details.summary)" row wrap>
      <v-flex xs2 sm2 lg2>
        略歴
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <Markdown class="summary" :text="$store.state.details.summary" />
      </v-flex>
    </v-layout>
    <v-layout v-if="show($store.state.details.publicRelations)" row wrap>
      <v-flex xs2 sm2 lg2 class="subtitle-1">
        自己PR
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <Markdown class="publicRelations" :text="$store.state.details.publicRelations" />
      </v-flex>
    </v-layout>
    <v-layout v-if="showArray($store.state.skills.links)" row wrap>
      <v-flex xs2 sm2 lg2 class="subtitle-1">
        URL
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p
          v-for="(link, index) in this.$store.state.skills.links"
          :key="index"
          :link="link"
          class="link"
        >
          {{ link }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-3>
      <v-flex>
        <div class="headline">
          スキル
        </div>
      </v-flex>
    </v-layout>
    <v-layout v-if="showArray($store.state.skills.languages)" row wrap>
      <v-flex xs2 sm2 lg2 class="subtitle-1">
        言語
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <v-container grid-list-xs>
          <v-layout 
            v-for="(language, index) in this.$store.state.skills.languages" 
            :key="index" 
            :language="language"
            :index="index"
            row
            wrap
          >
            <v-flex xs12 sm2 xl2>
              <p class="language-name">
                {{ language.name }}
              </p>
            </v-flex>
            <v-flex xs12 sm10 xl10>
              <Markdown class="language-description" :text="language.description" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout v-if="showArray($store.state.skills.databases)" row wrap>
      <v-flex xs2 sm2 lg2 class="subtitle-1">
        DB
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <v-container grid-list-xs>
          <v-layout 
            v-for="(database, index) in this.$store.state.skills.databases" 
            :key="index" 
            :database="database"
            :index="index"
            row
            wrap
          >
            <v-flex xs12 sm2 xl2>
              <p class="database-name">
                {{ database.name }}
              </p>
            </v-flex>
            <v-flex xs12 sm10 xl10>
              <Markdown class="database-description" :text="database.description" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout v-if="showArray($store.state.skills.qualifications)" row wrap>
      <v-flex xs2 sm2 lg2 class="subtitle-1">
        資格
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <p 
          v-for="(qualification, index) in this.$store.state.skills.qualifications" 
          :key="index" 
          :qualification="qualification"
          :index="index"
          class="qualification-name"
        >
          {{ qualification.name }} ({{ qualification.date }} 取得)
        </p>
      </v-flex>
    </v-layout>
    <v-layout v-if="showArray($store.state.skills.tools)" row wrap>
      <v-flex xs2 sm2 lg2 class="subtitle-1">
        ミドルウェアやツール
      </v-flex>
      <v-flex xs10 sm10 lg10>
        <v-chip-group
          column
          multi-line
        >
          <v-chip
            v-for="(tool, index) in this.$store.state.skills.tools"
            :key="index"
            :tool="tool"
            class="tool"
          >
            {{ tool }}
          </v-chip>
        </v-chip-group>
      </v-flex>
    </v-layout>
    <v-layout v-if="show($store.state.details.education)" row wrap mt-3>
      <v-flex>
        <div class="headline">
          最終学歴
        </div>
      </v-flex>
    </v-layout>
    <v-layout v-if="show($store.state.details.education)" row wrap>
      <v-flex xs12 md12 xl12 mb-1 mt-3>
        <div>
          <span class="subtitle-1">{{ $store.state.details.graduationYear }}</span>
          <h4 class="title education">
            {{ $store.state.details.education }}
          </h4>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-3>
      <v-flex>
        <div class="headline">
          職務経歴
        </div>
      </v-flex>
    </v-layout>
    <EmploymentTable
      v-for="(employment, index) in this.$store.state.employment"
      :key="index"
      :employment="employment"
      :index="index"
    />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EmploymentTable from '@/components/EmploymentTable.vue'
import Markdown from '@/components/Markdown.vue'

@Component({
  components: { EmploymentTable, Markdown }
})
export default class Resume extends Vue {
  show(value: string): boolean {
    return value !== '' && value !== undefined
  }

  showArray(values: Array<Object>): boolean {
    return values.length > 0
  }
}
</script>
