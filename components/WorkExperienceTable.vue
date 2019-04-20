<template>
  <v-layout row wrap>
    <v-flex xs12 md12 xl12 mb-1 mt-3>
      <v-subheader light>
        <div>
          <span>{{ work.from }}-{{ work.to }}</span><h4>{{ work.company }}</h4>
        </div>
      </v-subheader>
    </v-flex> 
    <v-flex xs12 md12 xl12>
      <v-card
        v-for="(content, i) in work.contents" 
        :key="i"
        :content="content"
      >
        <v-card-title primary-title>
          <div>
            <h4>{{ content.title }}</h4>
            <div>
              {{ content.from }} - {{ content.to }}
            </div>
          </div>
        </v-card-title>
        <v-card-text>
          <div>
            {{ content.description }}
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      default: () => {
        return ''
      }
    },
    headers: {
      type: Array,
      default: () => {
        return ''
      }
    }
  }
}
</script>
