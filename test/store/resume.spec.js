import { mutations, state } from '@/store/resume.js'

const { updateResume } = mutations
let testState

beforeEach(() => {
  testState = state()
})

describe('mutations', () => {
  test('updateResume', () => {
    updateResume(testState, { key: 'lastname', value: '田中' })
    expect(testState.lastname).toBe('田中')
  })
})
