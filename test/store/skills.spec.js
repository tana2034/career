import { mutations, state } from '@/store/skills.js'

const {
  updateSkills,
  addLanguage,
  updateLanguage,
  getInitializedLanguage,
  deleteLanguage
} = mutations
let testState

beforeEach(() => {
  testState = state()
})

describe('mutations', () => {
  test('updateSkills', () => {
    updateSkills(testState, { key: 'github', value: 'https://github.com/' })
    expect(testState.github).toBe('https://github.com/')
  })

  test('addLanguage', () => {
    addLanguage(testState)
    expect(testState.languages.length).toBe(1)
    expect(testState.languages[0].name).toBe('')
    expect(testState.languages[0].description).toBe('')
  })

  test('updateLanguage', () => {
    addLanguage(testState)
    updateLanguage(testState, { index: 0, key: 'name', value: 'JavaScript' })
    expect(testState.languages[0].name).toBe('JavaScript')
    updateLanguage(testState, {
      index: 0,
      key: 'description',
      value: '業務で３年経験'
    })
    expect(testState.languages[0].description).toBe('業務で３年経験')
  })

  test('getInitializedLanguage', () => {
    const lang = getInitializedLanguage()
    expect(lang).toEqual({ name: '', description: '' })
  })

  test('deleteLanguage', () => {
    addLanguage(testState)
    addLanguage(testState)
    expect(testState.languages.length).toBe(2)
    deleteLanguage(testState, {
      index: 0
    })
    expect(testState.languages.length).toBe(1)
    expect(testState.languages[0]).toBeTruthy()
  })
})
