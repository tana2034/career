export const state = () => ({
  lastname: '',
  firstname: '',
  email: '',
  tel: '',
  summary: '',
  language: '',
  os: '',
  database: '',
  framework: '',
  tools: '',
  work_experiences: [
    {
      from: '',
      to: '',
      company: '',
      contents: [
        {
          from: '',
          to: '',
          title: '',
          description: ''
        }
      ]
    }
  ]
})

export const mutations = {
  add(state, key, text) {
    state[key] = text
  },
  addTerm(state) {
    state.work_experiences.push({
      from: '',
      to: '',
      contents: [
        {
          from: '',
          to: '',
          title: '',
          description: ''
        }
      ]
    })
  },
  addContent(state, index) {
    state.work_experiences[index].contents.push({
      from: '',
      to: '',
      title: '',
      description: ''
    })
  },
  toggleModal(state, value) {
    state.modal = value
  }
}
