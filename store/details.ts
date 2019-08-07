import { MutationTree } from 'vuex'

export interface Detail {
  lastname: string
  firstname: string
  email: string
  birthDate: string
  tel: string
  address: string
  summary: string
  publicRelations: string
  education: string
  graduationYear
}

export const state = (): Detail => ({
  lastname: '',
  firstname: '',
  email: '',
  birthDate: '',
  tel: '',
  address: '',
  summary: '',
  publicRelations: '',
  education: '',
  graduationYear: ''
})

export const mutations: MutationTree<Detail> = {
  updateDetail(state, { key, value }) {
    state[key] = value
  }
}
