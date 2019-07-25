import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import skills from '@/pages/skills.vue'
import {
  state as skillsState,
  mutations as skillsMutations
} from '@/store/skills.ts'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('skills', () => {
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
    wrapper = shallowMount(skills, {
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(skills, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
