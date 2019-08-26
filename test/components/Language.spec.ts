import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Language from '@/components/Language.vue'
import {
  state as skillsState,
  mutations as skillsMutations
} from '@/store/skills.ts'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Language', () => {
  let actions
  let store
  let wrapper
  let state

  beforeEach(() => {
    actions = {
      testAction: jest.fn()
    }

    state = skillsState()
    skillsMutations.addLanguage(state)
    skillsMutations.updateLanguage(state, {
      index: 0,
      key: 'name',
      value: 'JavaScript'
    })
    skillsMutations.updateLanguage(state, {
      index: 0,
      key: 'description',
      value: 'Nuxt.jsでアプリを作成'
    })

    store = new Vuex.Store({
      modules: {
        skills: {
          namespaced: true,
          state,
          actions,
          mutations: skillsMutations
        }
      }
    })
    wrapper = shallowMount(Language, {
      propsData: {
        index: 0
      },
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('displays propsData data(languages and description)', () => {
    expect(wrapper.find('.language-name').html()).toContain('JavaScript')
    expect(wrapper.find('.language-description').html()).toContain(
      'Nuxt.jsでアプリを作成'
    )
  })
})
