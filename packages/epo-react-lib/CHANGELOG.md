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

## 2.0.3

- add signature overloads to `token`
- export `ImageShape`, `Option`, and `ListBoxOption` from their modules

## 2.0.10

- add `showText` to share buttons to optionally display labels
- add links as a valid `menuitem` in Slideout
- add `InfoCircle` icon
- reset all icons to stroke-width: 0
- minor refactor to use CSS variables for backgrounds and hovers.

## 2.0.16

- new `GenericPlayer` for playing DAM assets
- integrated Investigations-style horizontal and vertical layouts into `Figure`

## 2.0.17

- `HorizontalSlider` shows thumb label during hover and focus in addition to during changes

## 2.0.19

- added default color for invalid `HorizontalSlider` color props

## 2.0.20

- expand test coverage of `HorizontalSlider`
- add `ariaValueNow` to `HorizontalSlider` props

## 2.0.21

- make `Figure` caption RichText capable

# 2.0.24

- update `@headlessui/react` to 2.x

# 2.0.25

- replace `react-uid` with `useId`

# 2.0.26

- add marks to `HorizontalSlider`

# 2.0.29

- add French translations

# 2.0.30

- re-organize dependencies

# 2.0.31

- fix: `Grid` component passes props to DOM

# 2.0.32

- fix: `ResponsiveImage` leaks styles to DOM

# 2.1.0

- feat: `Picture` component to support art direction
- `Image`
  - feat: makes correct use of `srcset`
  - feat: add support for `sizes`
  - feat: add `priority` flag for LCP images
  - deprecation: mark `url2x url3x` setup as deprecated, to be dropped in future versions
