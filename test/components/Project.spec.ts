import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Project from '@/components/Project.vue'
import {
  state as employmentState,
  mutations as employmentMutations,
  Project as iProject
} from '@/store/employment.ts'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Project', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    const state = employmentState()
    const addProject: iProject = {
      from: '2019-04',
      to: '2019-05',
      title: 'SPAの開発',
      description: 'nuxt.jsでSPAアプリを開発'
    }
    state[0].projects.push(addProject)

    actions = {
      testAction: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        employment: {
          namespaced: true,
          state,
          actions,
          mutations: employmentMutations
        }
      }
    })
    wrapper = shallowMount(Project, {
      propsData: {
        i: 0,
        j: 0
      },
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
    expect(wrapper.find('.project-title').html()).toContain('SPAの開発')
  })

  test('description', () => {
    expect(wrapper.find('.description').html()).toContain(
      'nuxt.jsでSPAアプリを開発'
    )
  })
})
