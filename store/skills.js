export const state = () => ({
  languages: [],
  os: '',
  database: '',
  tools: '',
  cloud_computing: '',
  github: ''
})

export const mutations = {
  updateSkills(state, { key, value }) {
    state[key] = value
  },
  getInitializedLanguage() {
    return { name: '', description: '' }
  },
  addLanguage(state) {
    state.languages.push(mutations.getInitializedLanguage())
  },
  updateLanguage(state, { index, key, value }) {
    state.languages[index][key] = value
  },
  updateLanguages(state, value) {
    state.languages = value
  },
  deleteLanguage(state, { index }) {
    delete state.languages.splice(index, 1)
  }
}
