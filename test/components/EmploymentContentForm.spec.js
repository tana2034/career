import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import EmploymentContentForm from '@/components/EmploymentContentForm.vue'
import {
  state as experienceState,
  mutations as experienceMutations
} from '@/store/employment.js'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('EmploymentContentForm', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    const state = experienceState()
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
    wrapper = shallowMount(EmploymentContentForm, {
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('from', () => {
    expect(wrapper.find('.from').html()).toContain('2019-04')
  })

  test('to', () => {
    expect(wrapper.find('.to').html()).toContain('2019-05')
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
