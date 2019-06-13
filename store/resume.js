export const state = () => ({
  lastname: '',
  firstname: '',
  email: '',
  birth_date: '',
  tel: '',
  summary: '',
  public_relations: '',
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
    const i = content.i
    const j = content.j
    state.work_experiences[i].contents[j][content.key] = content.value
  },
  deleteContent(state, content) {
    const i = content.i
    const j = content.j
    delete state.work_experiences[i].contents.splice(j, 1)
  }
}
