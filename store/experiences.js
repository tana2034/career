export const state = () => [
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

export const mutations = {
  addTerm(state) {
    state.push({
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
    state[index].contents.push({
      from: '',
      to: '',
      title: '',
      description: ''
    })
  },
  updateWorkExperience(state, work) {
    state[work.index][work.key] = work.value
  },
  updateWorkExperienceContent(state, content) {
    state[content.i].contents[content.j][content.key] = content.value
  },
  deleteContent(state, content) {
    delete state[content.i].contents.splice(content.j, 1)
  }
}
