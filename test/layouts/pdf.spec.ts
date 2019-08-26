import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import pdf from '@/layouts/pdf.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)
const localVue = createLocalVue()

localVue.use(Vuex)

describe('pdf', () => {
  let store
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(pdf, {
      localVue
    })
  })

  test('is a Vue instance', () => {
    wrapper = shallowMount(pdf, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
