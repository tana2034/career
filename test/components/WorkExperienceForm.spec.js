import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import WorkExperienceForm from '@/components/WorkExperienceForm.vue'
import {
  state as experienceState,
  mutations as experienceMutations
} from '@/store/experiences.js'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('WorkExperienceForm', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    const state = experienceState()
    state[0].from = '2019-04'
    state[0].to = '2019-05'
    state[0].company = '株式会社テスト'
    state[0].company_profile = 'IT企業'

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
    wrapper = shallowMount(WorkExperienceForm, {
      propsData: {
        work: state[0]
      },
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(WorkExperienceForm, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('from', () => {
    expect(wrapper.find('.from').html()).toContain('2019-04')
  })

  test('to', () => {
    expect(wrapper.find('.to').html()).toContain('2019-05')
  })

  test('company', () => {
    expect(wrapper.find('.company').html()).toContain('株式会社テスト')
  })

  test('company_profile', () => {
    expect(wrapper.find('.company_profile').html()).toContain('IT企業')
  })
})
