import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Link from '@/components/Link.vue'
import {
  state as skillsState,
  mutations as skillsMutations
} from '@/store/skills.ts'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Link', () => {
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
    wrapper = shallowMount(Link, {
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(Link, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
