import type { JestConfigWithTsJest } from "ts-jest";
import { jsWithTsESM as tsjPreset } from "ts-jest/presets";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  verbose: true,
  moduleNameMapper: {
    "^@/assets(.*)$": "<rootDir>/src/assets$1",
    "^@/atomic(.*)$": "<rootDir>/src/atomic$1",
    "^@/hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@/storybook(.*)$": "<rootDir>/.storybook$1",
    "^@/widgets(.*)$": "<rootDir>/src/widgets$1",
  },
  modulePathIgnorePatterns: ["node_modules", ".jest-test-results.json"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  transform: {
    ...tsjPreset.transform,
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileTransformer.js",
  },
};

export default config;
