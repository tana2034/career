export const state = () => [
  {
    from: '',
    to: '',
    company: '',
    company_profile: '',
    projects: []
  }
]

export const mutations = {
  getInitializedProject() {
    return {
      from: '',
      to: '',
      title: '',
      description: ''
    }
  },
  addTerm(state) {
    state.push({
      from: '',
      to: '',
      company: '',
      company_profile: '',
      projects: []
    })
  },
  deleteTerm(state, { index }) {
    delete state.splice(index, 1)
  },
  addProject(state, index) {
    state[index].projects.push(mutations.getInitializedProject())
  },
  updateEmployment(state, { index, key, value }) {
    state[index][key] = value
  },
  updateProject(state, { i, j, key, value }) {
    state[i].projects[j][key] = value
  },
  updateProjects(state, { index, value }) {
    state[index].projects = value
  },
  deleteProject(state, { i, j }) {
    delete state[i].projects.splice(j, 1)
  }
}
