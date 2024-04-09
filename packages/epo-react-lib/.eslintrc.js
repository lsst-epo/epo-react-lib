// require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    React: true,
    context: true,
    JSX: true,
  },
  rules: {
    "array-callback-return": 0,
    "arrow-body-style": 0,
    "global-require": 0,
    "consistent-return": 0,
    "prefer-template": 0,
    "no-useless-constructor": 0,
    "jsx-a11y/img-has-alt": 0,
    "jsx-a11y/no-onchange": 0,
    "jsx-a11y/media-has-caption": 1,
    // let next/link package handle anchor attributes
    "jsx-a11y/anchor-is-valid": 0,
    // next/link handles the href, so anchors without href are still interactive
    "jsx-a11y/no-noninteractive-tabindex": [
      "error",
      {
        tags: ["a"],
      },
    ],
    // throwing false negatives on components using Atomics.Image
    "jsx-a11y/alt-text": 0,
    quotes: 0,
    // This rule doesn't work well with jsconfig
    "import/no-unresolved": 0,
    "import/no-anonymous-default-export": [
      "warn",
      {
        allowArray: true,
        allowArrowFunction: true,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        // The true value here is for backward compatibility
        allowLiteral: true,
        allowObject: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": 0,
    "jsx-quotes": 2,
    "block-scoped-var": 0,
    "comma-dangle": 0,
    "comma-spacing": 2,
    "generator-star-spacing": 0,
    indent: 0,
    "no-alert": 2,
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"],
      },
    ],
    "no-debugger": 2,
    semi: 0,
    "no-empty-pattern": 1,
    "no-extra-semi": 0,
    "no-unused-semi": 0,
    "no-unused-vars": [
      0,
      {
        args: "after-used",
        varsIgnorePattern: "PropTypes",
        argsIgnorePattern: "[iI]gnored",
      },
    ],
    "no-trailing-spaces": 2,
    "no-multiple-empty-lines": 2,
    "no-underscore-dangle": 0,
    "max-len": [
      "error",
      {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "padded-blocks": 0,
    "prefer-const": 2,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unknown-property": ["error", { ignore: ["transform-origin"] }],
    "react/react-in-jsx-scope": 0,
    "space-before-function-paren": 0,
    "spaced-comment": 2,
    "unused-imports/no-unused-imports": 2,
  },
  plugins: [
    "jsx-a11y",
    "@typescript-eslint",
    "react",
    "react-hooks",
    "unused-imports",
    "promise",
  ],
  extends: [
    "standard",
    "prettier",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
};
