import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import preview from '@/pages/preview.vue'
import {
  state as employmentState,
  mutations as employmentMutations
} from '@/store/employment.ts'
import {
  state as detailsState,
  mutations as detailsMutations
} from '@/store/details.ts'
import { state as skillsState } from '@/store/skills.ts'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('preview', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    actions = {
      testAction: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        details: {
          namespaced: true,
          state: detailsState(),
          mutations: detailsMutations
        },
        skills: {
          namespaced: true,
          state: skillsState()
        },
        employment: {
          namespaced: true,
          state: employmentState(),
          actions,
          mutations: employmentMutations
        }
      }
    })
    wrapper = shallowMount(preview, {
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
