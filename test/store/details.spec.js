import { mutations, state } from '@/store/details.ts'

const { updateDetail } = mutations
let testState

beforeEach(() => {
  testState = state()
})

describe('mutations', () => {
  test('updateDetail', () => {
    updateDetail(testState, { key: 'lastname', value: '田中' })
    expect(testState.lastname).toBe('田中')
  })
})
