export const state = () => ({
  languages: [],
  os: '',
  databases: [],
  tools: '',
  cloud_computing: '',
  qualifications: [],
  links: []
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
  deleteLanguage(state, { index }) {
    delete state.languages.splice(index, 1)
  },
  getInitializedDatabase() {
    return { name: '', description: '' }
  },
  addDatabase(state) {
    state.databases.push(mutations.getInitializedDatabase())
  },
  updateDatabase(state, { index, key, value }) {
    state.databases[index][key] = value
  },
  deleteDatabase(state, { index }) {
    delete state.databases.splice(index, 1)
  },
  getInitializedQualification() {
    return { name: '', date: '' }
  },
  addQualification(state) {
    state.qualifications.push(mutations.getInitializedQualification())
  },
  updateQualification(state, { index, key, value }) {
    state.qualifications[index][key] = value
  },
  deleteQualification(state, { index }) {
    delete state.qualifications.splice(index, 1)
  },
  addLink(state) {
    state.links.push('')
  },
  updateLink(state, { index, value }) {
    state.links[index] = value
  },
  deleteLink(state, { index }) {
    delete state.links.splice(index, 1)
  }
}
