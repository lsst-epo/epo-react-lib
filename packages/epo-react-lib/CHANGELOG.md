# Changelog

**All notable changes to this project will be documented in this file. This project adheres to [Semantic Versioning](https://semver.org).**

## 1.2.6

- remove `displayValue` prop from `ProgressBar` and replace with `markerFormatter` method.
- add `CHANGELOG.MD`

## 1.2.7

- add `ProgressRadial` variant with same API as `ProgressBar`

## 1.2.8

- add `SlideoutMenu`, `MenuGroup`, `MenuItem`, and `MenuItemRadio`
- add `--button-text-align` CSS variable to `Button`
- add event listener and focus trap hooks.

## 2.0.0

### New

- updated `styled-components` to v6.x
- Individual modules for components have been added, alongside the barrel import. Import modules either by doing
  ```javascript
  import { Accordion } from "@rubin-epo/epo-react-lib";
  // or
  import Accordion from "@rubin-epo/epo-react-lib/Accordion";
  ```
- added `includeFonts` flag to `GlobalStyles` that can disable attempted inclusion of font families if using an alternative like `next/font`. `default = true`
- re-organized dependencies and library externals so other packages are not bundled

### Breaking

- fonts moved from inline to static assets folder
- separated `localeStrings` to static assets `localeStrings` folder, export only JSON under `epo-react-lib` namespace.

  ```javascript
  import { localeStrings } from "@rubin-epo/epo-react-lib";
  // to
  import localeStrings from "@rubin-epo/epo-react-lib/localeStrings";
  ```

## 2.0.1

- refactor `Container` so that `className` can be properly attached for restyling with `styled-components`
- add nested example to `Container` storybook
- remove type exports from main module

## 2.0.2

- add signature overloads to `token`
- export `ImageShape`, `Option`, and `ListBoxOption` from their modules
