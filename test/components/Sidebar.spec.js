import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Sidebar from '@/components/Sidebar.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Sidebar', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    const state = {}

    actions = {
      testAction: jest.fn()
    }
    store = new Vuex.Store({
      state: state,
      actions
    })
    wrapper = shallowMount(Sidebar, { store, localVue })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('exists Home', () => {
    expect(wrapper.find('.home').html()).toContain('Home')
  })

  test('exists personal information', () => {
    expect(wrapper.find('.personal_information').html()).toContain('基本情報')
  })

  test('exists skills', () => {
    expect(wrapper.find('.skills').html()).toContain('スキル')
  })

  test('exists work employment', () => {
    expect(wrapper.find('.work_employment').html()).toContain('職務経歴')
  })

  test('exists preview', () => {
    expect(wrapper.find('.preview').html()).toContain('プレビュー')
  })
})
