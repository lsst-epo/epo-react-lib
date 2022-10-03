import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  verbose: true,
  moduleNameMapper: {
    "^@/assets(.*)$": "<rootDir>/src/assets$1",
    "^@/atomic(.*)$": "<rootDir>/src/atomic$1",
    "^@/helpers(.*)$": "<rootDir>/src/helpers$1",
    "^@/styles(.*)$": "<rootDir>/src/styles$1",
    "^@/svg(.*)$": "<rootDir>/src/svg$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
  },
  modulePathIgnorePatterns: ["node_modules", ".jest-test-results.json"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileTransformer.js",
  },
};

export default config;
