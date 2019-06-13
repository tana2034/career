import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import WorkExperienceContentForm from '@/components/WorkExperienceContentForm.vue'
import { state as experienceState } from '@/store/experiences.js'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('WorkExperienceContentForm', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    const state = {
      experiences: experienceState()
    }
    state.experiences[0].contents[0].from = '2019-04'
    state.experiences[0].contents[0].to = '2019-05'
    state.experiences[0].contents[0].title = 'SPAの開発'
    state.experiences[0].contents[0].description = 'nuxt.jsでSPAアプリを開発'

    actions = {
      testAction: jest.fn()
    }
    store = new Vuex.Store({
      state: state,
      actions
    })
    wrapper = shallowMount(WorkExperienceContentForm, {
      propsData: {
        content: state.experiences[0].contents[0],
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
    expect(wrapper.find('.title').html()).toContain('SPAの開発')
  })

  test('description', () => {
    expect(wrapper.find('.description').html()).toContain(
      'nuxt.jsでSPAアプリを開発'
    )
  })
})
