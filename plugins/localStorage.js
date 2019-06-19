import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'career',
      paths: ['details', 'experiences', 'skills']
    })(store)
  })
}
