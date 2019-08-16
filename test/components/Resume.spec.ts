import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Resume from '@/components/Resume.vue'
import {
  state as detailsState,
  mutations as detailsMutations
} from '@/store/details.ts'
import {
  state as employmentState,
  mutations as employmentMutations
} from '@/store/employment.ts'
import {
  state as skillsState,
  mutations as skillsMutations
} from '@/store/skills.ts'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

const factory = (details, employment, skills) => {
  const store = new Vuex.Store({
    modules: {
      details: {
        namespaced: true,
        state: details,
        mutations: detailsMutations
      },
      employment: {
        namespaced: true,
        state: employment,
        mutations: employmentMutations
      },
      skills: {
        namespaced: true,
        state: skills,
        mutations: skillsMutations
      }
    }
  })
  return shallowMount(Resume, { store, localVue })
}

describe('Resume', () => {
  let wrapper
  let state

  test('is a Vue instance', () => {
    wrapper = factory(detailsState(), employmentState(), skillsState())
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('lastname あり', () => {
    state = detailsState()
    state.lastname = '山田'
    wrapper = factory(state, employmentState(), skillsState())
    expect(wrapper.find('.lastname').html()).toContain('山田')
  })

  test('firstname あり', () => {
    state = detailsState()
    state.firstname = '太郎'
    wrapper = factory(state, employmentState(), skillsState())
    expect(wrapper.find('.firstname').html()).toContain('太郎')
  })

  test('email あり', () => {
    state = detailsState()
    state.email = 'example@example.com'
    wrapper = factory(state, employmentState(), skillsState())
    expect(wrapper.find('.email').html()).toContain('example@example.com')
  })

  test('email なし', () => {
    wrapper = factory(detailsState(), employmentState(), skillsState())
    expect(wrapper.find('.email').exists()).toBeFalsy()
  })

  test('birthDate あり', () => {
    state = detailsState()
    state.birthDate = '2019-01-01'
    wrapper = factory(state, employmentState(), skillsState())
    expect(wrapper.find('.birthDate').html()).toContain('2019-01-01')
  })

  test('birthDate なし', () => {
    wrapper = factory(detailsState(), employmentState(), skillsState())
    expect(wrapper.find('.birthDate').exists()).toBeFalsy()
  })

  test('address あり', () => {
    state = detailsState()
    state.address = '東京都千代田区丸の内一丁目'
    wrapper = factory(state, employmentState(), skillsState())
    expect(wrapper.find('.address').html()).toContain(
      '東京都千代田区丸の内一丁目'
    )
  })

  test('address なし', () => {
    wrapper = factory(detailsState(), employmentState(), skillsState())
    expect(wrapper.find('.address').exists()).toBeFalsy()
  })

  test('tel あり', () => {
    state = detailsState()
    state.tel = '000-0000-0000'
    wrapper = factory(state, employmentState(), skillsState())
    expect(wrapper.find('.tel').html()).toContain('000-0000-0000')
  })

  test('tel なし', () => {
    wrapper = factory(detailsState(), employmentState(), skillsState())
    expect(wrapper.find('.tel').exists()).toBeFalsy()
  })

  test('summary あり', () => {
    state = detailsState()
    state.summary = '設計・開発をやっています。'
    wrapper = factory(state, employmentState(), skillsState())
    expect(wrapper.find('.summary').html()).toContain(
      '設計・開発をやっています。'
    )
  })

  test('summary　なし', () => {
    wrapper = factory(detailsState(), employmentState(), skillsState())
    expect(wrapper.find('.summary').exists()).toBeFalsy()
  })

  test('publicRelations　あり', () => {
    state = detailsState()
    state.publicRelations = 'JavaScriptが得意です。'
    wrapper = factory(state, employmentState(), skillsState())
    expect(wrapper.find('.publicRelations').html()).toContain(
      'JavaScriptが得意です。'
    )
  })

  test('publicRelations　なし', () => {
    wrapper = factory(detailsState(), employmentState(), skillsState())
    expect(wrapper.find('.publicRelations').exists()).toBeFalsy()
  })

  test('education あり', () => {
    state = detailsState()
    state.education = '東京大学'
    wrapper = factory(state, employmentState(), skillsState())
    expect(wrapper.find('.education').html()).toContain(
      '東京大学'
    )
  })

  test('education なし', () => {
    wrapper = factory(detailsState(), employmentState(), skillsState())
    expect(wrapper.find('.education').exists()).toBeFalsy()
  })

  test('languages あり', () => {
    state = skillsState()
    state.languages[0] = { name: 'JavaScript', description: 'Nuxt.jsでアプリケーションを作成'}
    wrapper = factory(detailsState(), employmentState(), state)
    expect(wrapper.find('.language-name').html()).toContain(
      'JavaScript'
    )
    expect(wrapper.find('.language-description').html()).toContain(
      'Nuxt.jsでアプリケーションを作成'
    )
  })

  test('languages なし', () => {
    wrapper = factory(detailsState(), employmentState(), skillsState())
    expect(wrapper.find('.language-name').exists()).toBeFalsy()
    expect(wrapper.find('.language-description').exists()).toBeFalsy()    
  })

  test('databases あり', () => {
    state = skillsState()
    state.databases[0] = { name: 'MySQL', description: '2年ほど使用'}
    wrapper = factory(detailsState(), employmentState(), state)
    expect(wrapper.find('.database-name').html()).toContain(
      'MySQL'
    )
    expect(wrapper.find('.database-description').html()).toContain(
      '2年ほど使用'
    )
  })

  test('databases なし', () => {
    wrapper = factory(detailsState(), employmentState(), skillsState())
    expect(wrapper.find('.database-name').exists()).toBeFalsy()
    expect(wrapper.find('.database-description').exists()).toBeFalsy()    
  })
  
  test('qualifications あり', () => {
    state = skillsState()
    state.qualifications[0] = { name: '基本情報技術者', date: '2019-08'}
    wrapper = factory(detailsState(), employmentState(), state)
    expect(wrapper.find('.qualification-name').html()).toContain(
      '基本情報技術者 (2019-08 取得)'
    )
  })

  test('qualifications なし', () => {
    wrapper = factory(detailsState(), employmentState(), skillsState())
    expect(wrapper.find('.qualification-name').exists()).toBeFalsy()  
  })

  test('links あり', () => {
    state = skillsState()
    state.links[0] = 'https://www.github.com'
    wrapper = factory(detailsState(), employmentState(), state)
    expect(wrapper.find('.link').html()).toContain(
      'https://www.github.com'
    )
  })

  test('links なし', () => {
    wrapper = factory(detailsState(), employmentState(), skillsState())
    expect(wrapper.find('.link').exists()).toBeFalsy()  
  })

  test('tools あり', () => {
    state = skillsState()
    state.tools[0] = 'AWS Lambda'
    wrapper = factory(detailsState(), employmentState(), state)
    expect(wrapper.find('.tool').html()).toContain(
      'AWS Lambda'
    )
  })

  test('tools なし', () => {
    wrapper = factory(detailsState(), employmentState(), skillsState())
    expect(wrapper.find('.tool').exists()).toBeFalsy()  
  })
})
