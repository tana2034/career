import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import callback from '@/pages/callback.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()

localVue.use(Vuex)

describe('callback.vue', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    actions = {
      testAction: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
    wrapper = shallowMount(callback, {
      store,
      localVue
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
