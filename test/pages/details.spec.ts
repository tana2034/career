import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import details from '@/pages/details.vue'
import {
  state as experienceState,
  mutations as experienceMutations
} from '@/store/employment.ts'
import {
  state as detailsState,
  mutations as detailsMutations
} from '@/store/details.ts'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('details', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    actions = {
      testAction: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        employment: {
          namespaced: true,
          state: experienceState(),
          actions,
          mutations: experienceMutations
        },
        details: {
          namespaced: true,
          state: detailsState(),
          actions,
          mutations: detailsMutations
        }
      }
    })
    wrapper = shallowMount(details, {
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(details, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
