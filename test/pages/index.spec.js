import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import index from '@/pages/index.vue'
import {
  state as experienceState,
  mutations as experienceMutations
} from '@/store/experiences.js'
import {
  state as resumeState,
  mutations as resumeMutations
} from '@/store/resume.js'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('index', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    actions = {
      testAction: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        experiences: {
          namespaced: true,
          state: experienceState(),
          actions,
          mutations: experienceMutations
        },
        resume: {
          namespaced: true,
          state: resumeState(),
          actions,
          mutations: resumeMutations
        }
      }
    })
    wrapper = shallowMount(index, {
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(index, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
