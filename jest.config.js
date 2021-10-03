/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'solid-jest/preset/browser',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '<rootDir>/src/**/*.tsx'],
  coverageProvider: 'v8',
  moduleNameMapper: {
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@lib/(.*)': '<rootDir>/src/lib/$1',
    '@X/(.*)': '<rootDir>/src/features/X/$1',
  },
};
