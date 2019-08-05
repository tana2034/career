import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import EmploymentTable from '@/components/EmploymentTable.vue'
import {
  state as employmentState,
  mutations as employmentMutations
} from '@/store/employment.ts'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('EmploymentTable', () => {
  let actions
  let store
  let wrapper
  let state

  beforeEach(() => {
    state = employmentState()
    employmentMutations.addCompany(state)
    employmentMutations.addProject(state, 0)
    employmentMutations.updateCompany(state, {
      index: 0,
      key: 'from',
      value: '2019-04'
    })
    employmentMutations.updateCompany(state, {
      index: 0,
      key: 'to',
      value: '2019-05'
    })
    employmentMutations.updateCompany(state, {
      index: 0,
      key: 'company',
      value: '株式会社テスト'
    })
    employmentMutations.updateCompany(state, {
      index: 0,
      key: 'companyProfile',
      value: 'IT企業'
    })
    employmentMutations.updateProject(state, {
      i: 0,
      j: 0,
      key: 'from',
      value: '2019-04'
    })
    employmentMutations.updateProject(state, {
      i: 0,
      j: 0,
      key: 'to',
      value: '2019-05'
    })
    employmentMutations.updateProject(state, {
      i: 0,
      j: 0,
      key: 'title',
      value: 'SPAの開発'
    })
    employmentMutations.updateProject(state, {
      i: 0,
      j: 0,
      key: 'description',
      value: 'nuxt.jsでSPAアプリを開発'
    })

    actions = {
      testAction: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        employment: {
          namespaced: true,
          state: state,
          actions,
          mutations: employmentMutations
        }
      }
    })
    wrapper = shallowMount(EmploymentTable, {
      propsData: {
        employment: state[0]
      },
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('term', () => {
    expect(wrapper.find('.term').html()).toContain('2019-04 - 2019-05')
  })

  test('company', () => {
    expect(wrapper.find('.company').html()).toContain('株式会社テスト')
  })

  test('companyProfile', () => {
    expect(wrapper.find('.companyProfile').html()).toContain('IT企業')
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
