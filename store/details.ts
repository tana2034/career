export const state = () => ({
  lastname: '',
  firstname: '',
  email: '',
  birth_date: '',
  tel: '',
  address: '',
  summary: '',
  publicRelations: '',
  education: '',
  graduationYear: ''
})

export const mutations = {
  updateDetail(state, content) {
    state[content.key] = content.value
  }
}
