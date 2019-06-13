export const state = () => ({
  language: '',
  os: '',
  database: '',
  framework: '',
  tools: '',
  cloud_computing: '',
  github: ''
})

export const mutations = {
  updateSkills(state, content) {
    state[content.key] = content.value
  }
}
