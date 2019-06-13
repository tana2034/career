import { mutations, state } from '@/store/experiences.js'

const {
  addTerm,
  addContent,
  updateWorkExperience,
  updateWorkExperienceContent,
  deleteContent
} = mutations
let testState

beforeEach(() => {
  testState = state()
})

describe('mutations', () => {
  test('addTerm', () => {
    addTerm(testState)
    expect(testState.length).toBe(2)
  })

  test('addContent', () => {
    addContent(testState, 0)
    expect(testState[0].contents.length).toBe(2)
  })

  test('updateWorkExperience', () => {
    updateWorkExperience(testState, {
      index: 0,
      key: 'company',
      value: '株式会社テスト'
    })
    expect(testState[0].company).toBe('株式会社テスト')
  })

  test('updateWorkExperienceContent', () => {
    updateWorkExperienceContent(testState, {
      i: 0,
      j: 0,
      key: 'title',
      value: 'プロジェクト参画'
    })
    expect(testState[0].contents[0].title).toBe('プロジェクト参画')
  })

  test('deleteContent', () => {
    addContent(testState, 0)
    deleteContent(testState, {
      i: 0,
      j: 0
    })
    expect(testState[0].contents.length).toBe(1)
  })
})
