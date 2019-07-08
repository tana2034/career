import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Database from '@/components/Database.vue'
import {
  state as skillsState,
  mutations as skillsMutations
} from '@/store/skills.js'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Database', () => {
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
    wrapper = shallowMount(Database, {
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(Database, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('displays propsData data(databases and description)', () => {
    wrapper = shallowMount(Database, {
      propsData: {
        database: {
          name: 'MySQL',
          description: '業務で3年使用'
        }
      },
      store,
      localVue
    })
    expect(wrapper.find('.database-name').html()).toContain('MySQL')
    expect(wrapper.find('.database-description').html()).toContain(
      '業務で3年使用'
    )
  })

  test('uses props default value', () => {
    wrapper = shallowMount(Database, {
      localVue
    })
    expect(wrapper.find('.database-name')).toBeTruthy()
    expect(wrapper.find('.database-description')).toBeTruthy()
  })
})
