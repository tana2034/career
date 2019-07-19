module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,js,vue}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/coverage/**'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$'
}
