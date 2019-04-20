<template>
  <v-layout row wrap>
    <v-flex xs12 md12 xl12>
      <v-list three-line>
        <div class="mt-3 mb-3">
          <span>{{ work.from }} - {{ work.to }}</span><h4 class="subheading">
            {{ work.company }}
          </h4>
        </div>

        <v-list-tile
          v-for="(content, i) in work.contents" 
          :key="i"
          :content="content"
        >
          <v-list-tile-content>
            <v-list-tile-title>
              <div class="body-2">
                <span>{{ content.title }}</span>
              </div>
            </v-list-tile-title>
            <v-list-tile-sub-title>
              <div>
                <small class="caption"> {{ content.from }} - {{ content.to }} </small>
                <p class="body-1">
                  {{ content.description }}
                </p>
              </div>
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>
      </v-list>
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
