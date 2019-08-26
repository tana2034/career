import { mutations, state } from '@/store/index.ts'

describe('store/index.ts', () => {
  test('state', () => {
    const testState = state()
    expect(testState).toEqual({})
  })

  test('mutations', () => {
    expect(mutations).toEqual({})
  })
})
