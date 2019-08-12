import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import MarkdownIt from 'markdown-it'
import Markdown from '@/components/Markdown.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()

describe('Markdown', () => {
  let wrapper

  beforeEach(() => {
    const $md = new MarkdownIt({
      preset: 'default',
      linkify: true,
      breaks: true,
      injected: true
    })
    wrapper = shallowMount(Markdown, {
      propsData: {
        text: '# h1-text'
      },
      mocks: {
        $md
      },
      localVue
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('markdown text', () => {
    expect(wrapper.find('h1').html()).toBe('<h1>h1-text</h1>')
  })
})
