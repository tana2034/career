import { mutations, state } from '@/store/employment.js'

const {
  addTerm,
  addContent,
  updateEmployment,
  updateEmploymentContent,
  updateEmploymentContents,
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

  test('updateEmployment', () => {
    updateEmployment(testState, {
      index: 0,
      key: 'company',
      value: '株式会社テスト'
    })
    expect(testState[0].company).toBe('株式会社テスト')
  })

  test('updateEmploymentContent', () => {
    updateEmploymentContent(testState, {
      i: 0,
      j: 0,
      key: 'title',
      value: 'プロジェクト参画'
    })
    expect(testState[0].contents[0].title).toBe('プロジェクト参画')
  })

  test('updateEmploymentContents', () => {
    updateEmploymentContents(testState, {
      index: 0,
      value: [
        {
          from: '2019-07',
          to: '2019-08',
          title: '株式会社テスト',
          description: 'IT企業'
        }
      ]
    })
    expect(testState[0].contents[0].from).toBe('2019-07')
    expect(testState[0].contents[0].to).toBe('2019-08')
    expect(testState[0].contents[0].title).toBe('株式会社テスト')
    expect(testState[0].contents[0].description).toBe('IT企業')
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
