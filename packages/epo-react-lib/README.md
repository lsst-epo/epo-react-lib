# epo-react-lib

React UI components for Rubin Observatory Education & Public Outreach projects

## Use

### Install

Write about NPM package when applicable

### Dependencies

EPO React Library has 3 peer dependencies required to pull it in to your application.

`yarn add react react-dom styled-components`

### Styles

Write about `styled-components` global import here.

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
