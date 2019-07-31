import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import top from '@/layouts/top.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)
const localVue = createLocalVue()

localVue.use(Vuex)

describe('top', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    actions = {
      testAction: jest.fn()
    }
    wrapper = shallowMount(top, {
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(top, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
