import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import WorkExperienceTable from '@/components/WorkExperienceTable.vue'
import { state as resumeState } from '@/store/resume.js'
import { state as experienceState } from '@/store/experiences.js'
import { state as skillState } from '@/store/skills.js'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('WorkExperienceTable', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    const state = {
      resume: resumeState(),
      skills: skillState(),
      experiences: experienceState()
    }
    state.experiences[0].from = '2019-04'
    state.experiences[0].to = '2019-05'
    state.experiences[0].company = '株式会社テスト'
    state.experiences[0].company_profile = 'IT企業'
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
    wrapper = shallowMount(WorkExperienceTable, {
      propsData: {
        work: state.experiences[0]
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
