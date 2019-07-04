export const state = () => ({
  language: [],
  os: '',
  database: '',
  framework: '',
  tools: '',
  cloud_computing: '',
  github: ''
})

export const mutations = {
  updateSkills(state, {key, value}) {
    state[key] = value
  },
  addLanguage(state) {
    state['language'].push({
      name: '',
      description: ''
    })
  },
  updateLanguage(state, {index, key, value}) {
    state.language[index][key] = value
  }
}
