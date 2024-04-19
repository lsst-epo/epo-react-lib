# Shared ESLint configuration for React projects

This [ESLint](https://eslint.org/) configuration deactivates all formatting rules of ESLint and makes sure that [Prettier](https://prettier.io/) is used for code beautifying.

## Integrate into new project

1. Install this package as devDependency. The package uses [eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch) to include its plugins as `devDependencies` for minimal configuration.

```sh
# with Yarn
$ yarn add -D @rubin-epo/eslint-config-react
```

2. Use ESLint config in your project

Create a `.eslintrc.js` file in project root with the following content:

```js
module.exports = {
  extends: ["@rubin-epo/eslint-config-react"],
  parserOptions: { tsconfigRootDir: __dirname },
};
```

3. Add a script to run ESLint in your `package.json`

```json
{
  "scripts": {
    "lint-js": "eslint -c .eslintrc.js \"**/*.{js,jsx,ts,tsx}\""
  }
}
```

4. Add an `.eslintignore` file to your project to exclude test directories, build directories, and other code that should not be linted.

```
node_modules/
dist/
storybook-static/
__mocks__/
```
