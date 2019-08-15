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

const factory  = (details, employment, skills) => {
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

})
