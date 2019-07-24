import { mutations, state } from '@/store/skills.ts'

const {
  updateSkills,
  addLanguage,
  addDatabase,
  addQualification,
  updateLanguage,
  updateDatabase,
  updateQualification,
  addLink,
  addTool,
  updateLink,
  removeElement
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

  test('removeElement', () => {
    addLanguage(testState)
    addLanguage(testState)
    expect(testState.languages.length).toBe(2)
    removeElement(testState, {
      key: 'languages',
      index: 0
    })
    expect(testState.languages.length).toBe(1)
    expect(testState.languages[0]).toBeTruthy()
  })

  test('addDatabase', () => {
    addDatabase(testState)
    expect(testState.databases.length).toBe(1)
    expect(testState.databases[0].name).toBe('')
    expect(testState.databases[0].description).toBe('')
  })

  test('updateDatabase', () => {
    addDatabase(testState)
    updateDatabase(testState, { index: 0, key: 'name', value: 'MySQL' })
    expect(testState.databases[0].name).toBe('MySQL')
    updateDatabase(testState, {
      index: 0,
      key: 'description',
      value: '業務で３年経験'
    })
    expect(testState.databases[0].description).toBe('業務で３年経験')
  })

  test('addQualification', () => {
    addQualification(testState)
    expect(testState.qualifications.length).toBe(1)
    expect(testState.qualifications[0].date).toBe('')
    expect(testState.qualifications[0].name).toBe('')
  })

  test('updateQualification', () => {
    addQualification(testState)
    updateQualification(testState, {
      index: 0,
      key: 'name',
      value: '基本情報技術者'
    })
    expect(testState.qualifications[0].name).toBe('基本情報技術者')
    updateQualification(testState, {
      index: 0,
      key: 'date',
      value: '2019-07'
    })
    expect(testState.qualifications[0].date).toBe('2019-07')
  })

  test('addLink', () => {
    addLink(testState)
    expect(testState.links.length).toBe(1)
    expect(testState.links[0]).toBe('')
  })

  test('updateLink', () => {
    addLink(testState)
    updateLink(testState, { index: 0, value: 'https://www.github.com' })
    expect(testState.links[0]).toBe('https://www.github.com')
  })

  test('addTool', () => {
    expect(testState.tools.length).toBe(0)
    addTool(testState, 'Apache')
    expect(testState.tools.length).toBe(1)
    expect(testState.tools[0]).toBe('Apache')
    addTool(testState, 'Nginx')
    expect(testState.tools.length).toBe(2)
    expect(testState.tools[0]).toBe('Apache')
    expect(testState.tools[1]).toBe('Nginx')
  })

  test('addTool set duplicate value', () => {
    addTool(testState, 'Apache')
    expect(testState.tools.length).toBe(1)
    expect(testState.tools[0]).toBe('Apache')
    addTool(testState, 'Apache')
    expect(testState.tools.length).toBe(1)
    expect(testState.tools[0]).toBe('Apache')
  })

  test('addTool set empty value', () => {
    addTool(testState, '')
    expect(testState.tools.length).toBe(0)
    // 全角スペース
    addTool(testState, '　')
    expect(testState.tools.length).toBe(0)
    // 半角スペース
    addTool(testState, ' ')
    expect(testState.tools.length).toBe(0)
  })
})
