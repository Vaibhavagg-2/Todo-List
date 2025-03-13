module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'json'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
}; 