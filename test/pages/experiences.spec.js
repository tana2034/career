import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import experiences from '@/pages/experiences.vue'
import {
  state as experienceState,
  mutations as experienceMutations
} from '@/store/experiences.js'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('experiences', () => {
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
        experiences: {
          namespaced: true,
          state: state,
          actions,
          mutations: experienceMutations
        }
      }
    })
    wrapper = shallowMount(experiences, {
      propsData: {
        work: state[0]
      },
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(experiences, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
