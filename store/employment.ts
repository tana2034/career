import { MutationTree } from 'vuex'

export interface Employment {
  from: string
  to: string
  company: string
  companyProfile: string
  role: string
  projects: Project[]
}

export interface Project {
  from: string
  to: string
  title: string
  description: string
}

export const state = (): Employment[] => [
  {
    from: '',
    to: '',
    company: '',
    companyProfile: '',
    role: '',
    projects: []
  }
]

export const mutations: MutationTree<Employment[]> = {
  addCompany(state): void {
    state.push({
      from: '',
      to: '',
      company: '',
      companyProfile: '',
      role: '',
      projects: []
    })
  },
  deleteCompany(state, { index }): void {
    state.splice(index, 1)
  },
  addProject(state, index): void {
    const project: Project = {
      from: '',
      to: '',
      description: '',
      title: ''
    }
    state[index].projects.push(project)
  },
  updateCompany(state, { index, key, value }): void {
    state[index][key] = value
  },
  updateProject(state, { i, j, key, value }): void {
    state[i].projects[j][key] = value
  },
  updateProjects(state, { index, value }): void {
    state[index].projects = value
  },
  deleteProject(state, { i, j }): void {
    state[i].projects.splice(j, 1)
  }
}
