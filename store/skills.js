export const state = () => ({
  languages: [],
  databases: [],
  tools: [],
  qualifications: [],
  links: []
})

export const mutations = {
  updateSkills(state, { key, value }) {
    state[key] = value
  },
  removeElement(state, { key, index }) {
    delete state[key].splice(index, 1)
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
  getInitializedDatabase() {
    return { name: '', description: '' }
  },
  addDatabase(state) {
    state.databases.push(mutations.getInitializedDatabase())
  },
  updateDatabase(state, { index, key, value }) {
    state.databases[index][key] = value
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
  addLink(state) {
    state.links.push('')
  },
  updateLink(state, { index, value }) {
    state.links[index] = value
  },
  addTool(state, value) {
    let duplicate = false
    state.tools.forEach(v => {
      if (v === value) {
        duplicate = true
      }
    })
    if (duplicate || value === '') return
    state.tools.push(value)
  }
}
