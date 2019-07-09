import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import EmploymentTable from '@/components/EmploymentTable.vue'
import {
  state as experienceState,
  mutations as experienceMutations
} from '@/store/employment.js'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('EmploymentTable', () => {
  let actions
  let store
  let wrapper
  let state

  beforeEach(() => {
    state = experienceState()
    state[0].from = '2019-04'
    state[0].to = '2019-05'
    state[0].company = '株式会社テスト'
    state[0].company_profile = 'IT企業'
    state[0].contents[0].from = '2019-04'
    state[0].contents[0].to = '2019-05'
    state[0].contents[0].title = 'SPAの開発'
    state[0].contents[0].description = 'nuxt.jsでSPAアプリを開発'

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
    wrapper = shallowMount(EmploymentTable, {
      propsData: {
        work: state[0]
      },
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(EmploymentTable, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('term', () => {
    expect(wrapper.find('.term').html()).toContain('2019-04 - 2019-05')
  })

  test('company', () => {
    expect(wrapper.find('.company').html()).toContain('株式会社テスト')
  })

  test('company_profile', () => {
    expect(wrapper.find('.company_profile').html()).toContain('IT企業')
  })

  test('content-term', () => {
    expect(wrapper.find('.content-term').html()).toContain('2019-04 - 2019-05')
  })

  test('title', () => {
    expect(wrapper.find('.title').html()).toContain('SPAの開発')
  })

  test('description', () => {
    expect(wrapper.find('.description').html()).toContain(
      'nuxt.jsでSPAアプリを開発'
    )
  })
})
