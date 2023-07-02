module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/**/*.test.ts'],
  testEnvironment: 'node',
  resetMocks: true,
  restoreMocks: true,
  detectOpenHandles: true,
  verbose: true,
  forceExit: true,
  clearMocks: true,
};
