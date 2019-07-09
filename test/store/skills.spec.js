import { mutations, state } from '@/store/skills.js'

const {
  updateSkills,
  addLanguage,
  addDatabase,
  addQualification,
  updateLanguage,
  updateDatabase,
  updateQualification,
  getInitializedLanguage,
  getInitializedDatabase,
  getInitializedQualification,
  deleteLanguage,
  deleteDatabase,
  deleteQualification
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

  test('getInitializedDatabase', () => {
    const db = getInitializedDatabase()
    expect(db).toEqual({ name: '', description: '' })
  })

  test('deleteDatabase', () => {
    addDatabase(testState)
    addDatabase(testState)
    expect(testState.databases.length).toBe(2)
    deleteDatabase(testState, {
      index: 0
    })
    expect(testState.databases.length).toBe(1)
    expect(testState.databases[0]).toBeTruthy()
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

  test('getInitializedQualification', () => {
    const qualification = getInitializedQualification()
    expect(qualification).toEqual({ date: '', name: '' })
  })

  test('deleteQualification', () => {
    addQualification(testState)
    addQualification(testState)
    expect(testState.qualifications.length).toBe(2)
    deleteQualification(testState, {
      index: 0
    })
    expect(testState.qualifications.length).toBe(1)
    expect(testState.qualifications[0]).toBeTruthy()
  })
})
