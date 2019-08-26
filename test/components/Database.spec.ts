import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Database from '@/components/Database.vue'
import {
  state as skillsState,
  mutations as skillsMutations
} from '@/store/skills.ts'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Database', () => {
  let actions
  let store
  let wrapper
  let state

  beforeEach(() => {
    state = skillsState()
    skillsMutations.addDatabase(state)
    skillsMutations.updateDatabase(state, {
      index: 0,
      key: 'name',
      value: 'MySQL'
    })
    skillsMutations.updateDatabase(state, {
      index: 0,
      key: 'description',
      value: '業務で3年使用'
    })

    actions = {
      testAction: jest.fn()
    }
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
    wrapper = shallowMount(Database, {
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

  test('displays propsData data(databases and description)', () => {
    expect(wrapper.find('.database-name').html()).toContain('MySQL')
    expect(wrapper.find('.database-description').html()).toContain(
      '業務で3年使用'
    )
  })
})
