<template>
  <v-layout row wrap>
    <v-flex xs12 md12 xl12>
      <div>
        <div class="mt-3 mb-3">
          <span>{{ work.from }} - {{ work.to }}</span><h4 class="subheading">
            {{ work.company }}
          </h4>
          <p class="grey--text">{{ work.company_profile }}</p>
        </div>

        <div
          v-for="(content, i) in work.contents" 
          :key="i"
          :content="content"
        >
          <div class="pl-3">  
            <div>
              <div>
                <small class="caption"> {{ content.from }} - {{ content.to }} </small>
                <div class="body-2">
                  <span>{{ content.title }}</span>
                </div>
                <p class="body-1 grey--text pt-1">
                  {{ content.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
