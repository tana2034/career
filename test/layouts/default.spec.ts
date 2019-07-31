import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import defaultLayout from '@/layouts/default.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)
const localVue = createLocalVue()

localVue.use(Vuex)

describe('defaultLayout', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    actions = {
      testAction: jest.fn()
    }
    wrapper = shallowMount(defaultLayout, {
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(defaultLayout, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
