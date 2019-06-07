import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Resume from '@/components/Resume.vue'
import { state as resumeState } from '@/store/resume.js'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Resume', () => {
    let actions
    let store
    let wrapper

    beforeEach(() => {
        let state = {
          resume: resumeState()
        }
        state.resume.lastname = "山田"
        state.resume.firstname = "太郎"
        state.resume.email = "example@example.com"
        state.resume.birth_date = "2019-01-01"
        state.resume.address = "東京都千代田区丸の内一丁目"
        state.resume.tel = "000-0000-0000"
        state.resume.summary = "設計・開発をやっています。"
        state.resume.public_relations = "JavaScriptが得意です。"
        
        actions = {
          testAction: jest.fn()
        }
        store = new Vuex.Store({
          state: state,
          actions
        })
        wrapper = shallowMount(Resume, { store, localVue })
    })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('lastname', () => {
    expect(wrapper.find(".lastname").html()).toContain("山田")
  })

  test('firstname', () => {
    expect(wrapper.find(".firstname").html()).toContain("太郎")
  })
  
  test('email', () => {
    expect(wrapper.find(".email").html()).toContain("example@example.com")
  })

  test('birth_date', () => {
    expect(wrapper.find('.birth_date').html()).toContain("2019-01-01")
  })

  test('address', () => {
    expect(wrapper.find('.address').html()).toContain("東京都千代田区丸の内一丁目")
  })

  test('tel', () => {
    expect(wrapper.find('.tel').html()).toContain("000-0000-0000")
  })

  test('summary', () => {
    expect(wrapper.find('.summary').html()).toContain("設計・開発をやっています。")
  })

  test('public_relations', () => {
    expect(wrapper.find('.public_relations').html()).toContain("JavaScriptが得意です。")
  })

  test('public_relations', () => {
    expect(wrapper.find('.public_relations').html()).toContain("JavaScriptが得意です。")
  })
})
