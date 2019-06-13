import { mutations, state } from '@/store/skills.js'

const { updateSkills } = mutations
let testState

beforeEach(() => {
  testState = state()
})

describe('mutations', () => {
  test('updateSkills', () => {
    updateSkills(testState, { key: 'language', value: 'JavaScript' })
    expect(testState.language).toBe('JavaScript')
  })
})
