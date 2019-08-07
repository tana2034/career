import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Qualification from '@/components/Qualification.vue'
import {
  state as skillsState,
  mutations as skillsMutations
} from '@/store/skills.ts'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Qualification', () => {
  let actions
  let store
  let wrapper
  let state

  beforeEach(() => {
    actions = {
      testAction: jest.fn()
    }

    state = skillsState()
    skillsMutations.addQualification(state)
    skillsMutations.updateQualification(state, {
      index: 0,
      key: 'name',
      value: '基本情報'
    })
    skillsMutations.updateQualification(state, {
      index: 0,
      key: 'date',
      value: '2017-08-19'
    })

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
    wrapper = shallowMount(Qualification, {
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

  test('uses props default value', () => {
    expect(wrapper.find('.qualification-name').html()).toContain('基本情報')
    expect(wrapper.find('.qualification-date').html()).toContain('2017-08-19')
  })
})
