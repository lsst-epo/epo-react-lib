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

## 1.3.0

- fonts moved from inline to static assets folder
- added `includeFonts` flag to `GlobalStyles` that can disable attempted inclusion of font families if using an alternative like `next/font`.

  `default = true`

- re-organized dependencies and library externals so other packages are not bundled

- **BREAKING:** separated `localeStrings` to static assets `localeStrings` folder, export only JSON under `epo-react-lib` namespace.

  ```javascript
  import { localeStrings } from "@rubin-epo/epo-react-lib";

  // to

  import localeStrings from "@rubin-epo/epo-react-lib/localeStrings";
  ```

- **BREAKING:** separated global CSS-in-JS to new `styles` module, update

  ```javascript
  import { GlobalStyles} from '@rubin-epo/epo-react-lib'

  // to

  import { GlobalStyles } from '@rubin-epo/epo-react-lib/styles
  ```

  Complete list of methods that have moved:

  - cContentRte
  - containerFull
  - containerFullBleed
  - containerMax
  - containerNarrow
  - containerNews
  - containerRegular
  - containerWide
  - encodeColor
  - fluidScale
  - GlobalStyles
  - layoutGrid
  - needsDarkColor
  - palette
  - protoContainer
  - ptToEm
  - pxToEm
  - respond
  - ScreenreaderText
  - token
  - tokens
