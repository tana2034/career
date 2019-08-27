<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="markdownedText" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import MarkdownIt from 'markdown-it'

@Component
export default class Markdown extends Vue {
  @Prop(String)
  text!: string

  $md!: MarkdownIt

  get markdownedText(): string {
    return this.$md.render(this.text)
  }
}
</script>
