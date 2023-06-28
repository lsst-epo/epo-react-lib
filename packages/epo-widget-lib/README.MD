# epo-widget-lib

React widgets for Rubin Observatory Education & Public Outreach projects

## Use

### Install

Install from npm.

`yarn add @rubin-epo/epo-widget-lib`

### Dependencies

EPO React Library has 5 peer dependencies required to pull it in to your application.

`yarn add react react-dom styled-components i18next react-i18next`

### Styles

After installing the package library, the global styles from `epo-react-lib` will need to be added to your application

```
import { GlobalStyles } from "@rubin-epo/epo-react-lib/styles";


### Translations

Import `localeStrings` from `@rubin-epo/epo-widget-lib`, it contains individual locales that can be added to your project's i18next setup.

## Build

### Vite

This project uses Vite in library mode to package the contents of `/packages/epo-widget-lib/src` into modules located in `/packages/epo-widget-lib/dist/epo-widget-lib.[es|umd].js` and TypeScript typings in `/packages/epo-widget-lib/dist/index.d.ts`

To build from source:

```

cd packages/epo-widget-lib
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

Each component in EPO Widget Library contains a Jest unit test. Tests should be co-located with component code and their stories and follow the `**.test.[t|j]sx` naming format.

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

```
