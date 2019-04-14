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
      company: '',
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
  updateWorkExperience(state, work) {
    state.work_experiences[work.index][work.key] = work.value
  },
  updateWorkExperienceContent(state, content) {
    const i = content.indexParent
    const j = content.indexContent
    state.work_experiences[i].contents[j][content.key] = content.value
  },
  toggleModal(state, value) {
    state.modal = value
  }
}
