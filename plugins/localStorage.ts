import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'career',
    paths: ['details', 'employment', 'skills']
  })(store)
}
