export const state = () => ({
  lastname: '',
  firstname: '',
  email: '',
  birth_date: '',
  tel: '',
  summary: '',
  language: '',
  os: '',
  database: '',
  framework: '',
  tools: '',
  cloud_computing: '',
  github: '',
  education: '',
  graduation_year: '',
  work_experiences: [
    {
      from: '',
      to: '',
      company: '',
      company_profile: '',
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
  updateResume(state, content) {
    state[content.key] = content.value
  },
  addTerm(state) {
    state.work_experiences.push({
      from: '',
      to: '',
      company: '',
      company_profile: '',
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
  }
}
