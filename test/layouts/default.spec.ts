import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import defaultLayout from '@/layouts/default.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)
const localVue = createLocalVue()

localVue.use(Vuex)

describe('defaultLayout', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(defaultLayout, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      localVue
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
