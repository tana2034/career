export const state = () => ({
  lastname: '',
  firstname: '',
  email: '',
  birth_date: '',
  tel: '',
  summary: '',
  public_relations: '',
  education: '',
  graduation_year: ''
})

export const mutations = {
  updateDetail(state, content) {
    state[content.key] = content.value
  }
}
