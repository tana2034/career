import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
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
  let state

  beforeEach(() => {
    state = skillsState()
    skillsMutations.addLink(state)
    skillsMutations.updateLink(state, {
      index: 0,
      value: 'https://github.com/'
    })
    actions = {
      testAction: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        skills: {
          namespaced: true,
          state: state,
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
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('リンクが表示されているか', () => {
    wrapper = shallowMount(Link, {
      propsData: {
        index: 0
      },
      store,
      localVue
    })
    expect(wrapper.find('.link').html()).toContain('https://github.com/')
  })
})
