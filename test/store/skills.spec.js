import { mutations, state } from '@/store/skills.js'

const { updateSkills, addLanguage, updateLanguage } = mutations
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
    expect(testState.language.length).toBe(1)
    expect(testState.language[0].name).toBe('')
    expect(testState.language[0].description).toBe('')
  })

  test('updateLanguage', () => {
    addLanguage(testState)
    updateLanguage(testState, {index: 0, key: 'name', value: 'JavaScript'})
    expect(testState.language[0].name).toBe('JavaScript')
    updateLanguage(testState, {index: 0, key: 'description', value: '業務で３年経験'})
    expect(testState.language[0].description).toBe('業務で３年経験')
  })
})
