import { MutationTree } from 'vuex'

export interface Skills {
  languages: Language[]
  databases: Database[]
  tools: string[]
  qualifications: Qualification[]
  links: string[]
}

export interface Language {
  name: string
  description: string
}

export interface Database {
  name: string
  description: string
}

export interface Qualification {
  name: string
  date: string
}

export const state = (): Skills => ({
  languages: [],
  databases: [],
  tools: [],
  qualifications: [],
  links: []
})

export const mutations: MutationTree<Skills> = {
  updateSkills(state, { key, value }): void {
    state[key] = value
  },
  removeElement(state, { key, index }): void {
    state[key].splice(index, 1)
  },
  addLanguage(state): void {
    const language: Language = { name: '', description: '' }
    state.languages.push(language)
  },
  updateLanguage(state, { index, key, value }): void {
    state.languages[index][key] = value
  },
  addDatabase(state): void {
    const database: Database = { name: '', description: '' }
    state.databases.push(database)
  },
  updateDatabase(state, { index, key, value }): void {
    state.databases[index][key] = value
  },
  addQualification(state): void {
    const qualification: Qualification = { name: '', date: '' }
    state.qualifications.push(qualification)
  },
  updateQualification(state, { index, key, value }): void {
    state.qualifications[index][key] = value
  },
  addLink(state): void {
    state.links.push('')
  },
  updateLink(state, { index, value }): void {
    state.links[index] = value
  },
  addTool(state, value): void {
    const tool = value.trim()
    if (state.tools.includes(tool) || tool === '') return
    state.tools.push(tool)
  }
}
