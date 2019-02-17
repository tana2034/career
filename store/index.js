import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      lastname: '',
      firstname: '',
      email: ''
    }),
    mutations: {
      add(state, key, text) {
        state[key] = text
      }
    }
  })
}

export default createStore
