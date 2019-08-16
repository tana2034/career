import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Company from '@/components/Company.vue'
import {
  state as experienceState,
  mutations as experienceMutations
} from '@/store/employment.ts'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Company', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    const state = experienceState()
    state[0].from = '2019-04'
    state[0].to = '2019-05'
    state[0].company = '株式会社テスト'
    state[0].companyProfile = 'IT企業'
    state[0].role = 'アプリケーションエンジニア'

    actions = {
      testAction: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        employment: {
          namespaced: true,
          state: state,
          actions,
          mutations: experienceMutations
        }
      }
    })
    wrapper = shallowMount(Company, {
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(Company, {
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

  test('companyProfile', () => {
    expect(wrapper.find('.companyProfile').html()).toContain('IT企業')
  })

  test('role', () => {
    expect(wrapper.find('.role').html()).toContain('アプリケーションエンジニア')
  })
})
