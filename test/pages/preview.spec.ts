import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import preview from '@/pages/preview.vue'
import {
  state as experienceState,
  mutations as experienceMutations
} from '@/store/employment.ts'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('preview', () => {
  let actions
  let store
  let wrapper
  let state

  beforeEach(() => {
    state = experienceState()

    actions = {
      testAction: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        employment: {
          namespaced: true,
          state: state,
          actions,
          mutations: experienceMutations
        }
      }
    })
    wrapper = shallowMount(preview, {
      propsData: {
        work: state[0]
      },
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(preview, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
