import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Language from '@/components/Language.vue'
import {
  state as skillsState,
  mutations as skillsMutations
} from '@/store/skills.js'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Language', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    actions = {
      testAction: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        skills: {
          namespaced: true,
          state: skillsState(),
          actions,
          mutations: skillsMutations
        }
      }
    })
    wrapper = shallowMount(Language, {
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(Language, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('displays propsData data(languages and description)', () => {
    wrapper = shallowMount(Language, {
      propsData: {
        language: {
          name: 'JavaScript',
          description: 'Nuxt.jsでアプリを作成'
        }
      },
      store,
      localVue
    })
    expect(wrapper.find('.language-name').html()).toContain('JavaScript')
    expect(wrapper.find('.language-description').html()).toContain(
      'Nuxt.jsでアプリを作成'
    )
  })

  test('uses props default value', () => {
    wrapper = shallowMount(Language, {
      localVue
    })
    expect(wrapper.find('.language-name')).toBeTruthy()
    expect(wrapper.find('.language-description')).toBeTruthy()
  })
})
