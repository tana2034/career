import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Qualification from '@/components/Qualification.vue'
import {
  state as skillsState,
  mutations as skillsMutations
} from '@/store/skills.js'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Qualification', () => {
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
    wrapper = shallowMount(Qualification, {
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(Qualification, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('displays propsData data(languages and description)', () => {
    wrapper = shallowMount(Qualification, {
      propsData: {
        qualification: {
          date: '2019-07',
          name: '基本情報技術者'
        }
      },
      store,
      localVue
    })
    expect(wrapper.find('.qualification-name').html()).toContain(
      '基本情報技術者'
    )
    expect(wrapper.find('.qualification-date').html()).toContain('2019-07')
  })

  test('uses props default value', () => {
    wrapper = shallowMount(Qualification, {
      localVue
    })
    expect(wrapper.find('.qualification-name')).toBeTruthy()
    expect(wrapper.find('.qualification-date')).toBeTruthy()
  })
})
