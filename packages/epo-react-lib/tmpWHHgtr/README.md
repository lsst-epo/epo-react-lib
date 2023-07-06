# epo-react-lib

React UI components for Rubin Observatory Education & Public Outreach projects

## Use

### Install

Install from npm.

`yarn add @rubin-epo/epo-react-lib`

### Dependencies

EPO React Library has 5 peer dependencies required to pull it in to your application.

`yarn add react react-dom styled-components i18next react-i18next`

There is an additional optional peer dependency on `next` for components that use the Next.js router.

### Styles

After installing the package library, the global styles will need to be added to the top level of your application.

```
import { GlobalStyles } from "@rubin-epo/epo-react-lib";

const App = () => {
  return <main><GlobalStyles></main>
}
```

If you use other Rubin React libraries, this step only needs to be done once from this library. Additional imports of the global styles are not necessary.

### Translations

Import `localeStrings` from `@rubin-epo/epo-react-lib`, it contains individual locales that can be added to your project's i18next setup.

## Build

### Vite

This project uses Vite in library mode to package the contents of `/packages/epo-react-lib/src` into modules located in `/packages/epo-react-lib/dist/epo-lib.[es|umd].js` and TypeScript typings in `/packages/epo-react-lib/dist/index.d.ts`

To build from source:

```
cd packages/epo-react-lib
yarn
yarn build # production build
# yarn dev # development server
```

### Storybook

Storybook is used to create an interactive display of the components in the EPO React Library.

Stories from component folders following the `\*\*.stories.[t|j]sx will be included in the Storybook bundle.

To run Storybook:

```
yarn build
yarn storybook
```

## Test

Each component EPO React Library contains a Jest unit test. Tests should be co-located with component code and their stories and follow the `**.test.[t|j]sx` naming format.

```
yarn test
# yarn test:generate-output # will save to .jest-test-results.json for Storybook
```

To add a unit test to it's Storybook page add the filename of the unit test to the `parameters` property of the story

```
export const Primary: ComponentStoryObj<typeof DemoButton> = {
  args: {
    disabled: false,
    children: "Hello",
  },
  parameters: {
    jest: "DemoButton.test.tsx",
  },
};
```
