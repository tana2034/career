import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import details from '@/pages/details.vue'
import {
  state as detailsState,
  mutations as detailsMutations
} from '@/store/details.ts'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('details', () => {
  let actions
  let store
  let wrapper
  let state

  beforeEach(() => {
    actions = {
      testAction: jest.fn()
    }
    state = detailsState()
    detailsMutations.updateDetail(state, { key: 'lastname', value: '山田' })
    detailsMutations.updateDetail(state, { key: 'firstname', value: '太郎' })
    detailsMutations.updateDetail(state, {
      key: 'email',
      value: 'test@example.com'
    })
    detailsMutations.updateDetail(state, {
      key: 'birthDate',
      value: '2019-01-01'
    })
    detailsMutations.updateDetail(state, {
      key: 'address',
      value: '東京都港区'
    })
    detailsMutations.updateDetail(state, { key: 'tel', value: '090-0000-0000' })
    detailsMutations.updateDetail(state, {
      key: 'summary',
      value: '大学卒業後現在の職場に就職'
    })
    detailsMutations.updateDetail(state, {
      key: 'publicRelations',
      value: 'JavaScriptが得意です'
    })
    detailsMutations.updateDetail(state, {
      key: 'education',
      value: '東京大学卒業'
    })
    detailsMutations.updateDetail(state, {
      key: 'graduationYear',
      value: '2019-03'
    })
    store = new Vuex.Store({
      modules: {
        details: {
          namespaced: true,
          state: state,
          actions,
          mutations: detailsMutations
        }
      }
    })
    wrapper = shallowMount(details, {
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(details, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('lastname', () => {
    expect(wrapper.find('.lastname').html()).toContain('山田')
  })

  test('firstname', () => {
    expect(wrapper.find('.firstname').html()).toContain('太郎')
  })

  test('email', () => {
    expect(wrapper.find('.email').html()).toContain('test@example.com')
  })

  test('birthDate', () => {
    expect(wrapper.find('.birthDate').html()).toContain('2019-01-01')
  })

  test('address', () => {
    expect(wrapper.find('.address').html()).toContain('東京都港区')
  })

  test('tel', () => {
    expect(wrapper.find('.tel').html()).toContain('090-0000-0000')
  })
  
  test('summary', () => {
    expect(wrapper.find('.summary').html()).toContain('大学卒業後現在の職場に就職')
  })

  test('publicRelations', () => {
    expect(wrapper.find('.publicRelations').html()).toContain('JavaScriptが得意です')
  })

  test('education', () => {
    expect(wrapper.find('.education').html()).toContain('東京大学卒業')
  })
  
  test('graduationYear', () => {
    expect(wrapper.find('.graduationYear').html()).toContain('2019-03')
  })
})
