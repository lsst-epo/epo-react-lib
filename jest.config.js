const config = {
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@stories(.*)$': '<rootDir>/src/stories$1',
    '^@styles(.*)$': '<rootDir>/src/assets/styles$1',
  },
  setupFilesAfterEnv: ['./src/test/jest-setup.ts'],
  verbose: true,
};

module.exports = config;
