import type { JestConfigWithTsJest } from "ts-jest";
import { jsWithTsESM as tsjPreset } from "ts-jest/presets";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  verbose: true,
  moduleNameMapper: {
    "^@/assets(.*)$": "<rootDir>/src/assets$1",
    "^@/atomic(.*)$": "<rootDir>/src/atomic$1",
    "^@/content-blocks(.*)$": "<rootDir>/src/content-blocks$1",
    "^@/contexts(.*)$": "<rootDir>/src/contexts$1",
    "^@/form(.*)$": "<rootDir>/src/form$1",
    "^@/helpers(.*)$": "<rootDir>/src/helpers$1",
    "^@/hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@/layout(.*)$": "<rootDir>/src/layout$1",
    "^@/lib(.*)$": "<rootDir>/src/lib$1",
    "^@/storybook(.*)$": "<rootDir>/.storybook$1",
    "^@/styles(.*)$": "<rootDir>/src/styles$1",
    "^@/svg(.*)$": "<rootDir>/src/svg$1",
    "^@/utils(.*)$": "<rootDir>/src/utils$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
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
